import React, { useState } from "react";
import "../css/NOUVO.css";
import { useNavigate } from "react-router-dom";
const NOUVO = () => {
  const navigate = useNavigate();

  const images = [
    "https://www.nouvocityhotel.com/wp-content/uploads/2018/08/suite_diplomat.jpg",
    "https://www.nouvocityhotel.com/wp-content/uploads/2018/08/5-gdt-600x400.jpg",
    "https://www.nouvocityhotel.com/wp-content/uploads/2018/08/11-dlx-594x400.jpg",
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
          <h1>NOUVO GRAND SUITE</h1>
          <p>
            Our hotel’s masterpiece. The Nouvo Grand Suite is a two-bedroom
            suite suitable for families that want to experience the best of what
            Bangkok has to offer while relaxing in stylish decor settings. An
            en-suite Jacuzzi tub, complimentary Wi-Fi Internet, satellite
            television programming on large-screen LCD televisions, and 24-hour
            room service are among the many amenities and services provided for
            you during your stay. Each of our 2 Nouvo Grand Suites (Rama 8
            Bridge Suite and Golden Mount Suite) consist of one suite room (70
            sqm.) connected with one Grand Deluxe room (32 sqm.) for a total
            size of 102 square meters.
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
            <strong>Room Size:</strong> 102 square meters
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
            <li>En-suite private jacuzzi</li>
            <li>DVD player</li>
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
        onClick={() => navigate(`/booking/${"nouvo"}`)} // Navigate with type parameter
      >
        Book Now 
      </button>
      </section>
    </div>
  );
};

export default NOUVO;
