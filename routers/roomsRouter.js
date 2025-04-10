const express = require("express");
const router = express.Router();
const Room = require("../models/room"); // Ensure the model path is correct

// Route to get all rooms
router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    if (rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found" });
    }
    return res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


router.get("/getroomsbytype/:type", async (req, res) => {
  try {
    const { type } = req.params;

    // Check if type is provided
    if (!type) {
      return res.status(400).json({ message: "Room type is required" });
    }

    // Fetch rooms by type
    const rooms = await Room.find({ type });

    if (rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found for this type" });
    }

    return res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms by type:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});



router.put("/updatebooking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { currentbookings } = req.body;

    const updatedRoom = await Room.findByIdAndUpdate(id, { currentbookings }, { new: true });

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.json({ message: "Booking updated successfully", room: updatedRoom });
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.post("/addroom", async (req, res) => {
  try {
    const {
      name,
      maxcount,
      phonenumber,
      imageurls,
      type,
      description,
      rentperday,
      amount,
    } = req.body;

    // Validate data
    if (
      !name ||
      !maxcount ||
      !phonenumber ||
      !type ||
      !description ||
      !rentperday ||
      !amount
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new room
    const newRoom = new Room({
      name,
      maxcount,
      phonenumber,
      imageurls: imageurls || [], // Default empty array
      currentbookings: [],
      type,
      description,
      rentperday,
      amount,
    });

    await newRoom.save();
    return res
      .status(201)
      .json({ message: "Room added successfully", room: newRoom });
  } catch (error) {
    console.error("❌ Error adding room:", error);
    return res.status(500).json({ message: "Server error" });
  }
});


router.put("/updateroom/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const { startDate, endDate, amount, name, breakfast, extraServices, totalPrice } = req.body;

    // Validate required fields
    if (!startDate || !endDate || !amount || !name || totalPrice == null) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Ensure amount is a valid number
    const parsedAmount = parseInt(amount, 10);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({ message: "End date must be after start date" });
    }

    const room = await Room.findOne({ type });

    if (!room) {
      return res.status(404).json({ message: "No available room found for this type" });
    }

    if (parsedAmount > room.amount) {
      return res.status(400).json({ message: `Only ${room.amount} rooms available!` });
    }

    // Create new booking
    const newBooking = {
      name,
      startDate,
      endDate,
      amount: parsedAmount,
      breakfast,
      extraServices,
      totalPrice,
    };

    room.currentbookings.push(newBooking);
    room.amount -= parsedAmount; // Reduce available rooms

    await room.save();

    return res.json({ message: "Room booked successfully", room });
  } catch (error) {
    console.error("Error updating room:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
