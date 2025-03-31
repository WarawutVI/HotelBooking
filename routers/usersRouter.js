const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
    const { name, emaill, password } = req.body; 

    const newUser = new User({ name, emaill, password });

    try {
        await newUser.save(); // Removed incorrect reassignment
        res.json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;



router.post("/login", async (req, res) => {
    const { emaill, password } = req.body; 

    try {
        const user = await User.findOne({ emaill }); 

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        

        res.json({
            _id: user._id,
            name: user.name,
            emaill: user.emaill,
            isAdmin: user.isAdmin,
        }); 
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});



module.exports =router