import React from "react";
import { useNavigate } from "react-router-dom";


function DeluxeRoomScreen() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h1>SUPERIOR CLASSIC ROOM</h1>
      <p>This is the Deluxe Room. Here are the details...</p>
      <button 
        className="btn btn-primary mt-3"
        onClick={() => navigate(`/booking/${"superior"}`)} // Navigate with type parameter
      >
        Book Now
      </button>
    </div>
  );
}

export default DeluxeRoomScreen;
