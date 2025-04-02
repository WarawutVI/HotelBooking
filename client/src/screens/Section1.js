import React from 'react';
import "../css/section1.css"

const Section1 = () => {
  const carouselImages = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/461417499.jpg?k=492bc7186fc162ed263e0e2fbc822d1bb23fedec8fd436147ea36004cb3afd73&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/461417499.jpg?k=492bc7186fc162ed263e0e2fbc822d1bb23fedec8fd436147ea36004cb3afd73&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/461417499.jpg?k=492bc7186fc162ed263e0e2fbc822d1bb23fedec8fd436147ea36004cb3afd73&o=&hp=1"
  ];

  return (
    <div className='box-controll'>
      <div className="box">
        <div className="item1">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.map((src, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="item2">
          <h1>The Nouvo City Hotel</h1>
          <p>
            The four-star, modern boutique-style and halal-certified hotel in the old city Bangkok area near Khao San Road. 
            The finest in accommodations in the city’s city center and palace area with full facilities located within walking distance to many of the city’s top attractions. 
            The Nouvo City Hotel’s immediate area provides guests with the utmost convenience to travel and see old Bangkok’s many attractions, most of it within walking distance. 
            Nouvo City Hotel provides guests with memorable experiences paired with comfortable services.
          </p>
          <br />
          <p>
            “Nouvo City Hotel’s commitment to the future and to Environmental sustainability. 
            We all recognize the importance of the environment and we can all work together. 
            Make this world a better place to live in”
          </p>
          <button>View More Our Rooms</button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
