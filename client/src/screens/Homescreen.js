import React, { useState, useEffect } from "react";
import axios from "axios";

function Homescreen() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rooms/getallrooms");
        setRooms(response.data.rooms); // Make sure your API returns an object with a "rooms" field
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <br />

      {rooms.length > 0 ? (
        rooms.map((room, index) => (
          <div key={index} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h2>{room.name}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {room.imageurls.map((imgUrl, imgIndex) => (
                <img 
                  key={imgIndex}
                  src={imgUrl}
                  alt={`${room.name} ${imgIndex}`}
                  style={{ width: "300px", height: "200px", borderRadius: "10px", marginRight: "10px", marginBottom: "10px" }}
                />
              ))}
            </div>
            <p>{room.description}</p>
            <p><strong>Max Guests:</strong> {room.maxcount}</p>
            <p><strong>Phone:</strong> {room.phonenumber}</p>
            <p><strong>Price per Day:</strong> ${room.rentperday}</p>
            <br />
            <hr />
          </div>
        ))
      ) : (
        <p>Loading rooms...</p>
      )}
    </div>
  );
}

export default Homescreen;
