import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";

function Homescreen() {
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
    <div>
       <div className="container">
      <h1 className="mt-4">Booking</h1>
      {rooms.length > 0 ? (
        rooms.map((room, index) => <Room key={index} room={room} />)
      ) : (
        <p>Loading rooms...</p>
      )}
    </div>
      
    </div>
  );
}

export default Homescreen;
