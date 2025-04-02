import React from 'react';
import "../css/section0.css"

const Section0 = () => {
  const images = [
    { src: "/Image/7-spa.jpeg", alt: "Spa" },
    { src: "/Image/rooftoppool-1.jpg", alt: "Rooftop Pool" },
    { src: "/Image/cnlRes3.jpg", alt: "Room" },
    { src: "/Image/room-1.jpg", alt: "Room" },
    { src: "/Image/LivingRoomReimagined.jpg", alt: "Living Room" }
  ];

  return (
    <div>
      <div id="carouselHeaderBanner" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselHeaderBanner"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={image.src} className="d-block w-100" alt={image.alt} />
              <div className="carousel-caption d-none d-md-block">
                <h1>NOUVO CITY HOTEL</h1>
                <h5>The four-star, modern boutique-style and halal-certified hotel</h5>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHeaderBanner" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselHeaderBanner" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Section0;
