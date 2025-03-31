import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [rooms, setRooms] = useState([]);
  const [editMode, setEditMode] = useState({}); // Track edit mode for each booking

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/rooms/getallrooms"
        );
        setRooms(response.data || []);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const handleEditToggle = (roomId, index) => {
    setEditMode((prev) => ({
      ...prev,
      [`${roomId}-${index}`]: !prev[`${roomId}-${index}`],
    }));
  };

  const handleEdit = async (roomId, index, updatedBooking) => {
    try {
      const updatedRooms = rooms.map((room) => {
        if (room._id === roomId) {
          const updatedBookings = [...room.currentbookings];
          updatedBookings[index] = updatedBooking;
          return { ...room, currentbookings: updatedBookings };
        }
        return room;
      });

      setRooms(updatedRooms);

      await axios.put(
        `http://localhost:5000/api/rooms/updatebooking/${roomId}`,
        {
          currentbookings: updatedRooms.find((room) => room._id === roomId)
            .currentbookings,
        }
      );


    } catch (error) {
      console.error("Error updating booking:", error);
      alert("Failed to update booking.");
    }
  };

  const handleDelete = async (roomId, index) => {
    try {
      const updatedRooms = rooms.map((room) => {
        if (room._id === roomId) {
          const updatedBookings = [...room.currentbookings];
          updatedBookings.splice(index, 1);
          return { ...room, currentbookings: updatedBookings };
        }
        return room;
      });

      setRooms(updatedRooms);

      await axios.put(
        `http://localhost:5000/api/rooms/updatebooking/${roomId}`,
        {
          currentbookings: updatedRooms.find((room) => room._id === roomId)
            .currentbookings,
        }
      );

  
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel - Room Bookings</h2>
      {rooms.length === 0 ? (
        <p>Loading rooms...</p>
      ) : (
        rooms.map((room) => (
          <div key={room._id} className="card mb-4 p-3">
            <h4>{room.name}</h4>
            <p>Rent per day: {room.rentperday} THB</p>

            <h5>Current Bookings</h5>
            {room.currentbookings.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Amount</th>
                    <th>Breakfast</th>
                    <th>Extra Services</th>
                    <th>Total Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {room.currentbookings.map((booking, index) => (
                    <tr key={index}>
                      <td>
                        {editMode[`${room._id}-${index}`] ? (
                          <input
                            type="text"
                            value={booking.name}
                            onChange={(e) =>
                              handleEdit(room._id, index, {
                                ...booking,
                                name: e.target.value,
                              })
                            }
                            className="form-control"
                          />
                        ) : (
                          booking.name
                        )}
                      </td>
                      <td>
                        {editMode[`${room._id}-${index}`] ? (
                          <input
                            type="date"
                            value={booking.startDate}
                            onChange={(e) =>
                              handleEdit(room._id, index, {
                                ...booking,
                                startDate: e.target.value,
                              })
                            }
                            className="form-control"
                          />
                        ) : (
                          booking.startDate
                        )}
                      </td>
                      <td>
                        {editMode[`${room._id}-${index}`] ? (
                          <input
                            type="date"
                            value={booking.endDate}
                            onChange={(e) =>
                              handleEdit(room._id, index, {
                                ...booking,
                                endDate: e.target.value,
                              })
                            }
                            className="form-control"
                          />
                        ) : (
                          booking.endDate
                        )}
                      </td>
                      <td>
                        {editMode[`${room._id}-${index}`] ? (
                          <input
                            type="number"
                            value={booking.amount}
                            onChange={(e) =>
                              handleEdit(room._id, index, {
                                ...booking,
                                amount: e.target.value,
                              })
                            }
                            className="form-control"
                          />
                        ) : (
                          booking.amount
                        )}
                      </td>
                      <td>
                        {editMode[`${room._id}-${index}`] ? (
                          <select
                            className="form-control"
                            value={booking.breakfast ? "Yes" : "No"}
                            onChange={(e) =>
                              handleEdit(room._id, index, {
                                ...booking,
                                breakfast: e.target.value === "Yes",
                              })
                            }
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        ) : booking.breakfast ? (
                          "Yes"
                        ) : (
                          "No"
                        )}
                      </td>
                      <td>
                        {editMode[`${room._id}-${index}`] ? (
                          <input
                            type="text"
                            value={booking.extraServices.join(", ")}
                            onChange={(e) =>
                              handleEdit(room._id, index, {
                                ...booking,
                                extraServices: e.target.value.split(", "),
                              })
                            }
                            className="form-control"
                          />
                        ) : (
                          booking.extraServices.join(", ")
                        )}
                      </td>
                      <td>
                        {editMode[`${room._id}-${index}`] ? (
                          <input
                            type="number"
                            value={booking.totalPrice}
                            onChange={(e) =>
                              handleEdit(room._id, index, {
                                ...booking,
                                totalPrice: e.target.value,
                              })
                            }
                            className="form-control"
                          />
                        ) : (
                          booking.totalPrice
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleEditToggle(room._id, index)}
                          style={{ marginRight: "10px" }} // Add margin to create space
                        >
                          {editMode[`${room._id}-${index}`] ? "Save" : "Edit"}
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(room._id, index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ color: "red" }}>No current bookings</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
