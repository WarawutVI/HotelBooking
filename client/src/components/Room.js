import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";

function Room({ room }) {
  const [show, setShow] = useState(false); // Modal state

  const handleClose = () => setShow(false); // Close modal
  const handleShow = () => setShow(true); // Open modal

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
          <p><b>Phone number:</b> {room.phonenumber}</p>
          <p><b>Type:</b> {room.type}</p>
          <p><b>Rent per day:</b> ${room.rentperday}</p>

          {/* Buttons - Now directly under Rent per day */}
          <div className="mt-2">
            <Button className="btn btn-primary" onClick={handleShow}>
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name} - Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Bootstrap Carousel for images */}
          <Carousel>
            {room.imageurls.map((imgUrl, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={imgUrl}
                  alt={`Slide ${index + 1}`}
                  style={{ borderRadius: "10px", maxHeight: "300px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <p className="mt-3"><b>Description:</b> {room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Book Now</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
