import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "react-bootstrap";

function UpdateRoomBooking() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [amount, setAmount] = useState(1);
  const [roomType, setRoomType] = useState("Deluxe");
  const [breakfast, setBreakfast] = useState(false);
  const [extraServices, setExtraServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [room, setRoom] = useState([]); 
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleCancel = () => {
    setStartDate("");
    setEndDate("");
    setAmount(1);
    setBreakfast(false);
    setExtraServices([]);
    setErrorMessage("");
    setSuccessMessage("");
    setReceipt(null);
    setIsConfirmed(false);
  };


  const user = JSON.parse(localStorage.getItem("currentUser") || "null");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/rooms/getroomsbytype/${roomType}`
        );
        console.log("API Response:", response.data);
        
        // Ensure the response is in expected format
        if (Array.isArray(response.data) && response.data.length > 0) {
          setRoom(response.data[0]); // Assuming first object is the correct room
        } else {
          setRoom(null);
          setErrorMessage("No room data found for selected type.");
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setErrorMessage("Failed to fetch room data.");
      }
    };
  
    fetchRooms();
  }, [roomType]); // Dependency added

  const calculateTotalPrice = () => {
    if (!room || !room.rentperday || !startDate || !endDate) return 0;
  
    const days = calculateDays();
    let totalPrice = room.rentperday * amount * days;
  
    if (breakfast) totalPrice += 10 * amount * days;
    if (extraServices.includes("Spa")) totalPrice += 50 * amount * days;
    if (extraServices.includes("Airport Transfer")) totalPrice += 30 * amount;
    if (extraServices.includes("Late Check-Out")) totalPrice += 20 * amount;
  
    return totalPrice;
  };

  const calculateDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Convert ms to days
    return difference > 0 ? difference : 1; // Ensure at least 1 day
  };
  
  const handleBooking = async () => {
    if (!startDate || !endDate || !amount || !room) {
      setErrorMessage("Start date, end date, amount, and room type are required");
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      setErrorMessage("End date must be after start date");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const totalPrice = calculateTotalPrice(); // Calculate the total price

      // Sending data to the server
      const response = await axios.put(
        `http://localhost:5000/api/rooms/updateroom/${roomType}`,
        {
          name: user.name,
          startDate,
          endDate,
          amount,
          breakfast,
          extraServices,
          totalPrice,
        }
      );

      setSuccessMessage(response.data.message);

      // Set the receipt data after successful booking
      setReceipt({
        roomType,
        startDate,
        endDate,
        amount,
        breakfast,
        extraServices,
        totalPrice,
      });
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  // Handle changes in extra services
  const handleExtraServiceChange = (event) => {
    const { value, checked } = event.target;
    setExtraServices((prev) =>
      checked ? [...prev, value] : prev.filter((service) => service !== value)
    );
  };

  return (
    <div className="container mt-5" style={{display:"grid"}}>
      <h2>Deluxe canal room</h2>


      {/* Room Price */}
      {room && (
        <div className="mb-3">
          <label className="form-label">Room Price:</label>
          <div>{`$${room.rentperday} per day`}</div>
        </div>
      )}

      {/* Start Date */}
      <div className="mb-3">
        <label className="form-label">From Date:</label>
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      {/* End Date */}
      <div className="mb-3">
        <label className="form-label">To Date:</label>
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Number of Rooms */}
      <div className="mb-3">
        <label className="form-label">Number of Rooms:</label>
        <input
          type="number"
          className="form-control"
          min="1"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
        />
      </div>

      {/* Breakfast Option */}
      <div className="mb-3">
        <label className="form-label">
          <input
            type="checkbox"
            checked={breakfast}
            onChange={(e) => setBreakfast(e.target.checked)}
          />
          Add Breakfast ($10)
        </label>
      </div>

      {/* Extra Services */}
      <div className="mb-3">
        <label className="form-label">Select Extra Services:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="Spa"
              onChange={handleExtraServiceChange}
            />
            Spa ($50)
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Airport Transfer"
              onChange={handleExtraServiceChange}
            />
            Airport Transfer ($30)
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Late Check-Out"
              onChange={handleExtraServiceChange}
            />
            Late Check-Out ($20)
          </label>
        </div>
      </div>

      {/* Booking Button */}
      <button
        className="btn btn-primary"
        onClick={handleBooking}
        disabled={loading}
      >
        {loading ? <Spinner animation="border" size="sm" /> : "Update Booking"}
      </button>

      {/* Error and Success Messages */}
      {errorMessage && (
        <Alert variant="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )}

      {successMessage && (
        <Alert variant="success" className="mt-3">
          {successMessage}
        </Alert>
      )}

      {/* Receipt Section */}
      {receipt && (
        <div className="mt-5">
          <h3>Booking Receipt</h3>
          <ul>
             <li><strong>User:</strong> {user?.name}</li>
            <li><strong>Room Type:</strong> {receipt.roomType}</li>
            <li><strong>From:</strong> {receipt.startDate}</li>
            <li><strong>To:</strong> {receipt.endDate}</li>
            <li><strong>Number of Rooms:</strong> {receipt.amount}</li>
            <li><strong>Breakfast:</strong> {receipt.breakfast ? "Yes ($10)" : "No"}</li>
            <li><strong>Extra Services:</strong>
              {receipt.extraServices.length > 0
                ? receipt.extraServices.join(", ")
                : "None"}
            </li>
            <li><strong>Total Price:</strong> ${receipt.totalPrice}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UpdateRoomBooking;
