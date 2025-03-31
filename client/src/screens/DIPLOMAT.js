import React, { useState } from "react";
import "../css/DIPLOMAT.css";
import { useNavigate } from "react-router-dom";
const DIPLOMAT = () => {
  const navigate = useNavigate();
  const images = [
    "https://www.nouvocityhotel.com/wp-content/uploads/2018/08/1-dld.jpg",
    "https://www.nouvocityhotel.com/wp-content/uploads/2018/08/4a-dld-661x400.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94EzOZ9Tbk4lts73rXfTeuScuJbQowqyl3Q&s",
  ];

  // สร้าง State สำหรับติดตามรูปปัจจุบัน
  const [currentImage, setCurrentImage] = useState(0);

  // ฟังก์ชันเลื่อนรูปไปข้างหน้า
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // ฟังก์ชันเลื่อนรูปกลับหลัง
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="room-detail">
      {/* Room Image & Header */}
      <div className="room-container">
        {/* รูปภาพห้องพัก (Image Slider) */}
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
          <h1>DIPLOMAT ROOM</h1>
          <p>
            Business and leisure in a comfortable setting complete with a work
            area and complimentary in-room Wi-Fi Internet. Our Diplomat rooms
            are ready to help make your trip both productive and enjoyable.
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
            <strong>Room Size:</strong> 38 square meters
          </li>
          <li>
            <strong>Non-smoking room</strong>
          </li>
          <li>
            <strong>Amenities:</strong>
          </li>
          <ul>
            <li>Air-conditioner</li>
            <li>IDD telephone</li>
            <li>Complimentary Wi-Fi Internet</li>
            <li>Mini-bar and fridge</li>
            <li>Hair dryer</li>
            <li>Hot and cold shower</li>
            <li>Desk and working area</li>
            <li>Complete bathroom amenities</li>
            <li>In-room safety deposit box</li>
            <li>Bathrobe and slippers</li>
            <li>LCD TV with satellite channels</li>
            <li>24-hour room service</li>
          </ul>
        </ul>
      </section>

      {/* Booking Section */}
      <section className="Button1">
        {/* <button className="button1" onClick={() => alert("Booking Confirmed!")}>
          Book Now
        </button> */}
        <button 
        className="btn btn-primary mt-3"
        onClick={() => navigate(`/booking/${"diplomat"}`)} // Navigate with type parameter
      >
        Book Now 
      </button>
      </section>
    </div>
  );
};

export default DIPLOMAT;
