import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // For React Router v6

function Room({ room }) {
  const navigate = useNavigate(); // Initialize navigate

  const handleViewDetails = () => {
    // Remove spaces from the room name and navigate to the room's standalone page
    const roomNameWithoutSpaces = room.name.replace(/\s+/g, ''); // Remove spaces
    navigate(`/rooms/${roomNameWithoutSpaces}`); // Navigate to the specific page of the room
  };

  return (
    <div className="container mt-3">
      <div className="row bs p-3" style={{ border: "1px solid #ddd", borderRadius: "10px", marginBottom: "15px" }}>
        {/* Left: Room Image */}
        <div className="col-md-4 d-flex align-items-center">
          <img
            src={room.imageurls[0]}
            className="smalling"
            alt={room.name}
            style={{ width: "100%", borderRadius: "10px", maxHeight: "200px", objectFit: "cover" }}
          />
        </div>

        {/* Right: Room Details */}
        <div className="col-md-8">
          <h2>{room.name}</h2>
          <p><b>Max Count:</b> {room.maxcount}</p>
          <p><b>Type:</b> {room.type}</p>
          <p><b>Rent per day:</b> ${room.rentperday}</p>

          {/* Check if the room is unavailable (amount === 0) */}
          {room.amount === 0 ? (
            <p className="text-danger">Unavailable</p> // Show "Unavailable" if amount is 0
          ) : (
            <div className="mt-2">
              <Button className="btn btn-primary" onClick={handleViewDetails}>
                View Details
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Room;
