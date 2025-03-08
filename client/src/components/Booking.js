import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Bookingscreen() {
  const { type } = useParams(); // Getting type from URL
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/rooms/getroomsbytype/${type}`);
        setRoom(response.data[0]); // Assuming first matching room is used
        setLoading(false);
      } catch (error) {
        console.error("Error fetching room:", error);
        setLoading(false);
        setError(true);
      }
    };

    if (type) fetchRoom();
  }, [type]);

  const handleBooking = async () => {
    if (!fromDate || !toDate) {
      alert("Please select a date range!");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/rooms/updateroom/${type}`, {
        startDate: fromDate,
        endDate: toDate,
    
      });

      alert(response.data.message);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Error booking the room.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      {loading ? (
        <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
      ) : error || !room ? (
        <h1 className="text-2xl font-semibold text-red-500">Error: Room Not Found</h1>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Room Details */}
          <div>
            <h2 className="text-2xl font-bold">{room.name}</h2>
            <img
              src={room.imageurls[0]}
              className="w-full h-64 object-cover rounded-lg mt-3"
              alt="Room"
            />
            <p className="mt-3 text-gray-700"><b>Type:</b> {room.type}</p>
            <p className="text-gray-700"><b>Max Count:</b> {room.maxcount}</p>
            <p className="text-gray-700"><b>Phone:</b> {room.phonenumber}</p>
            <p className="text-gray-700"><b>Rent per day:</b> ${room.rentperday}</p>
          </div>

          {/* Right: Booking Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Booking Details</h3>
            <label className="block text-gray-600">From Date:</label>
            <input 
              type="date" 
              className="w-full p-2 border rounded-lg" 
              value={fromDate} 
              onChange={(e) => setFromDate(e.target.value)} 
            />

            <label className="block text-gray-600">To Date:</label>
            <input 
              type="date" 
              className="w-full p-2 border rounded-lg" 
              value={toDate} 
              onChange={(e) => setToDate(e.target.value)} 
            />

            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleBooking}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingscreen;
