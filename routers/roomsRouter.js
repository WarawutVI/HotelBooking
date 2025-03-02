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

router.post('/addroom', async (req, res) => {
    try {
        const { name, maxcount, phonenumber, imageurls, type, description,rentperday } = req.body;

        // Validate data
        if (!name || !maxcount || !phonenumber || !type || !description || !rentperday) {
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
            rentperday
        });

        await newRoom.save();
        return res.status(201).json({ message: "Room added successfully", room: newRoom });

    } catch (error) {
        console.error("❌ Error adding room:", error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
