import React from 'react'
import { useNavigate } from "react-router-dom";
function StandardRoomScreen() {
    const navigate = useNavigate();
  return (
    <div>
       <h1>DELUXE CANAL ROOM</h1>
      <p>This is the Deluxe Room. Here are the details...</p>
      <button 
        className="btn btn-primary mt-3"
        onClick={() => navigate(`/booking/${"deluxecanal"}`)} // Navigate with type parameter
      >
        Book Now
      </button>
    </div>
    
  )
}

export default StandardRoomScreen
