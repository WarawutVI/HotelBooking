import React from "react";
import Section0 from "./Section0";
import "../css/section0.css";
import "../css/guest-service.css";
import Footer from "./Footer";
function guestservice() {
  return (
    <div>
      <Section0 />
      <div class="container-title">
        <div class="title">
          <h1>Guest Services at Nouvo City Hotel</h1>
        </div>
      </div>

      <section className="container-amenity">
        <div className="amenity-content">
          <div className="amenity-slider">
            <div
              id="conciergeCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#conciergeCarousel"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#conciergeCarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#conciergeCarousel"
                  data-bs-slide-to="2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/Image/concierge-1.jpg"
                    className="d-block w-100"
                    alt="Concierge Service"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/concierge-2.jpg"
                    className="d-block w-100"
                    alt="Concierge Service"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/concierge-3.webp"
                    className="d-block w-100"
                    alt="Concierge Service"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#conciergeCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#conciergeCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="amenity-info">
            <h2>Concierge Service</h2>
            <p>
              Our knowledgeable concierge team is dedicated to enhancing your
              stay with personalized assistance and insider knowledge of
              Bangkok. From restaurant reservations and transportation
              arrangements to cultural recommendations and special requests, our
              concierge service ensures a seamless and memorable experience.
            </p>

            <div className="amenity-details">
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Available Hours</h4>
                  <p>24 hours daily</p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-ticket-alt"></i>
                <div>
                  <h4>Services</h4>
                  <p>
                    Tour bookings, Restaurant reservations, Transportation
                    arrangements, Cultural recommendations, Event tickets
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-map-marked-alt"></i>
                <div>
                  <h4>Local Expertise</h4>
                  <p>
                    Personalized city guides, Hidden gems, Shopping
                    recommendations, Cultural insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-amenity">
            <div className="amenity-content reversed">
                <div className="amenity-slider">
                    <div id="airportTransferCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#airportTransferCarousel" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#airportTransferCarousel" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#airportTransferCarousel" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/Image/airport-transfer-1.jpg" className="d-block w-100" alt="Airport Transfer" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Image/airport-transfer-2.jpg" className="d-block w-100" alt="Airport Transfer" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Image/airport-transfer-3.jpg" className="d-block w-100" alt="Airport Transfer" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#airportTransferCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#airportTransferCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="amenity-info">
                    <h2>Airport Transfer</h2>
                    <p>
                        Begin your stay with our premium airport transfer service, offering comfort and convenience from the moment you land in Bangkok. Our professional drivers ensure timely pickups and drop-offs in well-maintained luxury vehicles, allowing you to relax and enjoy the journey to and from Nouvo City Hotel.
                    </p>
                    <div className="amenity-details">
                        <div className="detail-item">
                            <i className="fas fa-plane-arrival"></i>
                            <div>
                                <h4>Airports Served</h4>
                                <p>Suvarnabhumi International Airport (BKK), Don Mueang International Airport (DMK)</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-car"></i>
                            <div>
                                <h4>Vehicle Options</h4>
                                <p>Luxury sedans, SUVs, Vans for families or groups</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-info-circle"></i>
                            <div>
                                <h4>Additional Features</h4>
                                <p>Complimentary bottled water, WiFi access, Meet & greet service, Flight tracking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-amenity">
            <div className="amenity-content">
                <div className="amenity-slider">
                    <div id="businessCenterCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#businessCenterCarousel" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#businessCenterCarousel" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#businessCenterCarousel" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/Image/business-center-1.avif" className="d-block w-100" alt="Business Center" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Image/business-center-2.jpg" className="d-block w-100" alt="Business Center" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Image/business-center-3.jpg" className="d-block w-100" alt="Business Center" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#businessCenterCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#businessCenterCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="amenity-info">
                    <h2>Business Center</h2>
                    <p>
                        Stay productive during your travels with our fully-equipped business center. Whether you need to prepare for a meeting, print important documents, or connect with colleagues worldwide, our business facilities offer everything required for seamless professional operations while away from the office.
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
                            <i className="fas fa-laptop"></i>
                            <div>
                                <h4>Equipment</h4>
                                <p>High-speed computers, Printers, Scanners, Photocopiers, Video conferencing facilities</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-wifi"></i>
                            <div>
                                <h4>Services</h4>
                                <p>High-speed internet, Secretarial assistance, Translation services, Courier services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="special-offers">
            <div className="special-offers-container">
                <h2>Special Guest Services</h2>
                <div className="offers-grid">
                    <div className="offer-card">
                        <div className="offer-image">
                            <img src="/Image/laundry-service.jpg" alt="Laundry Service" />
                        </div>
                        <div className="offer-content">
                            <h3>Laundry & Dry Cleaning</h3>
                            <p>Professional laundry and dry cleaning services with express options available upon request.</p>
                            <p className="offer-price">Same-day service available</p>
                        </div>
                    </div>
                    
                    <div className="offer-card">
                        <div className="offer-image">
                            <img src="/Image/babysitting.jpg" alt="Babysitting Service" />
                        </div>
                        <div className="offer-content">
                            <h3>Childcare Services</h3>
                            <p>Professional and trusted childcare providers to ensure children's safety and enjoyment while parents relax.</p>
                            <p className="offer-price">Advance booking required</p>
                        </div>
                    </div>
                    
                    <div className="offer-card">
                        <div className="offer-image">
                            <img src="/Image/currency-exchange.webp" alt="Currency Exchange" />
                        </div>
                        <div className="offer-content">
                            <h3>Currency Exchange</h3>
                            <p>Convenient in-house currency exchange service with competitive rates for major world currencies.</p>
                            <p className="offer-price">Available at reception</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="private-wellness">
            <div className="private-wellness-container">
                <div className="private-wellness-content">
                    <h2>VIP Guest Services</h2>
                    <p>
                        Experience unparalleled luxury with our exclusive VIP Guest Services package, designed for guests seeking an elevated and personalized stay. Our dedicated VIP concierge team provides discreet, attentive service to meet your every need and exceed expectations.
                    </p>
                    <p>
                        The VIP Guest Services package includes priority check-in/check-out, personalized welcome amenities, unpacking and packing assistance, daily turndown service with special treats, and dedicated 24/7 butler service throughout your stay.
                    </p>
                    <p>
                        Additional VIP benefits include preferential reservations at our restaurants, priority spa appointments, and customized itineraries for exploring Bangkok's hidden gems and exclusive experiences.
                    </p>
                </div>
                <div className="private-wellness-image">
                    <img src="/Image/vip-service.webp" alt="VIP Service" />
                </div>
            </div>
        </section>

      <Footer />
    </div>
  );
}

export default guestservice;
