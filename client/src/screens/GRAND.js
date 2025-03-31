import React, { useState } from "react";
import "../css/GRAND.css";
import { useNavigate } from "react-router-dom";

const GRAND = () => {
  const navigate = useNavigate();
  const images = [
    "https://www.peninsula.com/en/-/media/pbk/rooms/grand-deluxe-room.jpg?mw=905&hash=DB70976B5D4F8FFD54D3129A68E9922A",
    "https://media.onyx-hospitality.com/-/media/project/amari/common/property/bangkok/hotel-photos/stay/grand-deluxe/grand-deluxe_king-1.jpg?rev=-1",
    "https://media.onyx-hospitality.com/-/media/project/amari/common/property/bangkok/hotel-photos/stay/grand-deluxe/grand-deluxe_bathroom.jpg?rev=-1",
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
          <h1>GRAND DELUXE ROOM</h1>
          <p>
            Whether you are traveling as a couple or as a family, our Grand
            Deluxe room provides you with spacious accommodations and complete
            in-room amenities to help make your stay as comfortable and
            convenient as possible.
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
        onClick={() => navigate(`/booking/${"grand"}`)} // Navigate with type parameter
      >
        Book Now 
      </button>
      </section>
    </div>
  );
};

export default GRAND;
