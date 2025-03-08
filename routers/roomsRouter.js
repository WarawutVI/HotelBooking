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

// router.get("/getroomsbytype/:type", async (req, res) => {
//   try {
//     const { type } = req.params;
//     const rooms = await Room.find({ type });

//     if (rooms.length === 0) {
//       return res.status(404).json({ message: "No rooms found for this type" });
//     }

//     return res.json(rooms);
//   } catch (error) {
//     console.error("Error fetching rooms by type:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });
router.get("/getroomsbytype/Superior", async (req, res) => {
  try {
    const rooms = await Room.find({ type: 'Superior' });

    if (rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found for this type" });
    }

    return res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms by type:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});



router.put("/updateroom/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const { startDate, endDate, amount } = req.body;

    if (!startDate || !endDate || !amount) {
      return res
        .status(400)
        .json({ message: "Start date, end date, and amount are required" });
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return res
        .status(400)
        .json({ message: "End date must be after start date" });
    }

    const room = await Room.findOne({ type });

    if (!room) {
      return res
        .status(404)
        .json({ message: "No available room found for this type" });
    }

    if (amount > room.amount) {
      return res
        .status(400)
        .json({ message: `We only have ${room.amount} rooms available!` });
    }

    // Create new booking
    const newBooking = {
      startDate,
      endDate,
      amount,
    };

    room.currentbookings.push(newBooking);
    room.amount -= amount; // Reduce available rooms

    await room.save();

    return res.json({ message: "Room booked successfully", room });
  } catch (error) {
    console.error("Error updating room:", error);
    return res.status(500).json({ message: "Internal Server Error" });
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

module.exports = router;
