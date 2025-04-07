import React from "react";
import Section0 from "./Section0";
import "../css/section0.css";
import "../css/swimmingpool.css";
import Footer from "./Footer";

function Swimmingpool() {
  const offers = [
    {
      title: "Weekend Wellness Retreat",
      description: "Indulge in a two-day wellness journey including spa treatments, fitness sessions, and pool access.",
      price: "From $199 per person",
      image: "/Image/spa-wellness.jpg",
      alt: "Wellness Package"
    },
    {
      title: "Couples Relaxation Package",
      description: "Share a special day with your loved one with dual massages, private pool time, and complimentary refreshments.",
      price: "From $299 per couple",
      image: "/Image/couples-package.jpg",
      alt: "Couples Package"
    },
    {
      title: "Fitness Boost Package",
      description: "Kickstart your fitness journey with five personal training sessions, nutrition consultation, and full amenities access.",
      price: "From $249 per person",
      image: "/Image/fitness-package.jpg",
      alt: "Fitness Package"
    }
  ];
  return (
    <div>
      <Section0 />
      <div className="container-title">
        <div className="title">
          <h1>Hotel Wellness & Recreation Facilities</h1>
        </div>
      </div>

      {/* Swimming Pool Section */}
      <section className="container-amenity">
        <div className="amenity-content">
          <div className="amenity-slider">
            <div
              id="swimmingPoolCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#swimmingPoolCarousel"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#swimmingPoolCarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#swimmingPoolCarousel"
                  data-bs-slide-to="2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/Image/rooftoppool-1.jpg"
                    className="d-block w-100"
                    alt="Rooftop Pool 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/rooftoppool-2.jpg"
                    className="d-block w-100"
                    alt="Rooftop Pool 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/rooftoppool-3.jpg"
                    className="d-block w-100"
                    alt="Rooftop Pool 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#swimmingPoolCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#swimmingPoolCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="amenity-info">
            <h2>Swimming Pool</h2>
            <p>
              Immerse yourself in tranquility at our luxurious swimming pool,
              designed for both relaxation and recreation. Our crystal-clear
              waters are maintained at the perfect temperature year-round,
              providing a refreshing escape from the everyday.
            </p>

            <div className="amenity-details">
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Daily: 7:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-info-circle"></i>
                <div>
                  <h4>Facilities</h4>
                  <p>
                    Sun loungers, Pool towels, Changing rooms, Poolside service
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-user-check"></i>
                <div>
                  <h4>Services</h4>
                  <p>
                    Professional lifeguard on duty, Poolside dining, Private
                    swimming lessons available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPA Section */}
      <section className="container-amenity">
        <div className="amenity-content reversed">
          <div className="amenity-slider">
            <div
              id="salaSpaCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#salaSpaCarousel"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#salaSpaCarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#salaSpaCarousel"
                  data-bs-slide-to="2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#salaSpaCarousel"
                  data-bs-slide-to="3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#salaSpaCarousel"
                  data-bs-slide-to="4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/Image/1-spa.jpeg"
                    className="d-block w-100"
                    alt="Spa Room 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/6-spa.jpeg"
                    className="d-block w-100"
                    alt="Spa Room 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/7-spa.jpeg"
                    className="d-block w-100"
                    alt="Spa Room 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/11-spa.jpeg"
                    className="d-block w-100"
                    alt="Spa Room 4"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/3a-spa.JPG"
                    className="d-block w-100"
                    alt="Spa Room 5"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#salaSpaCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#salaSpaCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="amenity-info">
            <h2>SALA SPA</h2>
            <p>
              Step into a sanctuary of wellness and rejuvenation at our SALA
              SPA. Our expert therapists provide personalized treatments using
              premium products, designed to soothe your body and mind.
              Experience the perfect harmony of traditional techniques and
              modern luxury.
            </p>

            <div className="amenity-details">
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Daily: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-spa"></i>
                <div>
                  <h4>Treatments</h4>
                  <p>
                    Massages, Facials, Body wraps, Aromatherapy, Couples
                    treatments
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-gift"></i>
                <div>
                  <h4>Packages</h4>
                  <p>
                    Half-day retreat, Full-day indulgence, Bridal packages,
                    Corporate wellness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    <section className="container-amenity">
      <div className="amenity-content">
        <div className="amenity-slider">
          <div id="fitnessCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#fitnessCarousel" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#fitnessCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#fitnessCarousel" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/Image/fitness-1.jpg" className="d-block w-100" alt="fitness-1" />
              </div>
              <div className="carousel-item">
                <img src="/Image/fitness-2.jpg" className="d-block w-100" alt="fitness-2" />
              </div>
              <div className="carousel-item">
                <img src="/Image/fitness-3.jpg" className="d-block w-100" alt="fitness-3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#fitnessCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#fitnessCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="amenity-info">
          <h2>Roof Top Fitness</h2>
          <p>
            Elevate your workout routine at our state-of-the-art Roof Top Fitness center. Featuring panoramic views of the city skyline,
            our gym combines premium equipment with expert guidance to help you achieve your fitness goals while enjoying a breathtaking setting.
          </p>

          <div className="amenity-details">
            <div className="detail-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>24/7 access for hotel guests</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="fas fa-dumbbell"></i>
              <div>
                <h4>Equipment</h4>
                <p>Cardio machines, Free weights, Resistance training, Yoga mats, TRX</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="fas fa-user-friends"></i>
              <div>
                <h4>Services</h4>
                <p>Personal trainers, Group fitness classes, Yoga sessions, Fitness assessment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="special-offers">
      <div className="special-offers-container">
        <h2>Special Wellness Packages</h2>
        
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <div className="offer-image">
                <img src={offer.image} alt={offer.alt} />
              </div>
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <p className="offer-price">{offer.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="private-wellness">
      <div className="private-wellness-container">
        <div className="private-wellness-content">
          <h2>Private Wellness Experiences</h2>
          <p>
            Enhance your stay with our exclusive private wellness experiences, designed for those seeking the ultimate in personalized luxury. Our dedicated wellness concierge will create a bespoke program tailored to your specific needs and preferences.
          </p>
          <p>
            Whether you're celebrating a special occasion, planning a corporate wellness event, or simply desiring a more private experience, our team is committed to exceeding your expectations.
          </p>
          <p>
            Available options include private pool reservations, after-hours spa treatments, exclusive fitness sessions, and customized wellness journeys.
          </p>
        </div>
        <div className="private-wellness-image">
          <img src="/Image/private-wellness.jpg" alt="Private Wellness Experience" />
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}

export default Swimmingpool;
