import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/SuperiorClassicRoomscreen.css'
function SuperiorClassicRoomscreen() {
  const navigate = useNavigate();

  // Array of room images
  const images = [
    "https://www.nouvocityhotel.com/wp-content/uploads/2018/08/13-spd.jpg",
    "https://www.nouvocityhotel.com/wp-content/uploads/2018/08/2-spt.jpg",
    "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2022/01/04-1.jpg",
  ];

  // State to track the current image
  const [currentImage, setCurrentImage] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="room-detail">
      {/* Room Image & Header */}
      <div className="room-container">
        {/* Room Image Slider */}
        <section className="room-image">
          <button className="prev-btn" onClick={prevImage}>
            ❮
          </button>
          <img src={images[currentImage]} alt="Room" className="room-photo" />
          <button className="next-btn" onClick={nextImage}>
            ❯
          </button>
        </section>

        {/* Header */}
        <header className="room-header">
          <h1>SUPERIOR CLASSIC ROOM</h1>
          <p>
            The spacious 32 square meter room has all the amenities to make your
            stay comfortable. A cozy atmosphere welcomes all travelers along with
            rain showers, open closet, and decor which complements this city’s
            historic & vibrant surroundings.
          </p>
          <p>
            <strong>Note:</strong> This room type will have limited natural
            lighting with a non-view glass screen (no window) but is instead
            brightly illuminated by energy-efficient LEDs.
          </p>
        </header>
      </div>

      {/* Room Details */}
      <section className="room-info">
        <h2>ROOM DETAIL</h2>
        <ul>
          <li>
            <strong>Room Size:</strong> 32 square meters
          </li>
          <li>
            <strong>Non-smoking room</strong>
          </li>
          <li>
            <strong>Amenities:</strong>
            <ul>
              <li>Air-conditioner</li>
              <li>IDD telephone</li>
              <li>Complimentary Wi-Fi Internet</li>
              <li>Mini-bar and fridge</li>
              <li>Hair dryer</li>
              <li>Hot and cold shower</li>
              <li>Table and chairs</li>
              <li>Complete bathroom amenities</li>
              <li>In-room safety deposit box</li>
              <li>Bathrobe and slippers</li>
              <li>LCD TV with satellite channels</li>
              <li>24-hour room service</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Booking Button */}
      <section className="Button1">
        {/* <button className="button1" onClick={() => alert("Booking Confirmed!")}>
          Book Now
        </button> */}
        <button 
        className="btn btn-primary mt-3"
        onClick={() => navigate(`/booking/${"superior"}`)} // Navigate with type parameter
      >
        Book Now 
      </button>
      </section>
    </div>
  );
}

export default SuperiorClassicRoomscreen;
