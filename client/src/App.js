import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import SuperiorClassicRoomscreen from './screens/SuperiorClassicRoomscreen';
import Room from './components/Room'; // Import the Room component
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeluxeCalRoomscreen from './screens/DeluxeCanalRoomscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Roomscreen from './screens/Roomscreen';
import Superiorbooking from './screens/booking/Superiorbooking';


// Example room data (you can replace this with dynamic data or fetch from API)


function App() {
  const [rooms, setRooms] = useState([]); // Ensures `rooms` is always an array

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rooms/getallrooms");
        console.log("API Response:", response.data); // Log response to check its structure
        
        // If response.data is an array directly, setRooms(response.data)
        if (Array.isArray(response.data)) {
          setRooms(response.data);
        } else if (Array.isArray(response.data.rooms)) {
          setRooms(response.data.rooms);
        } else {
          console.error("Unexpected API response structure:", response.data);
          setRooms([]); // Set to empty array if structure is incorrect
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/home" element={<Homescreen />} />
          <Route path="/room" element={<Roomscreen />} />
          {/* Route for rooms list */}
          <Route
            path="/rooms"
            element={
              <div className="container mt-5">
                <h1>Available Rooms</h1>
                {rooms.map((room, index) => (
                  <Room key={index} room={room} />
                ))}
              </div>
            }
          />

          {/* Individual Room Routes */}
          <Route path="/rooms/Superiorclassicroom" element={<SuperiorClassicRoomscreen />} />
          <Route path="/rooms/Deluxecanalroom" element={<DeluxeCalRoomscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path='/booking/superior' element={<Superiorbooking/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
