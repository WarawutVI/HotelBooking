import React from "react";
import Section0 from "./Section0";
import "../css/section0.css";
import "../css/restaurants.css";
import Footer from "./Footer";
function Restaurant() {
  return (
    <div>
      <Section0 />
      <section class="container-title">
        <div class="title">
          <h1>Restaurants</h1>
        </div>
      </section>
      <section className="container-restaurant">
        <div className="restaurant-content">
          <div className="restaurant-slider">
            <div
              id="canalRestaurantCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#canalRestaurantCarousel"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#canalRestaurantCarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#canalRestaurantCarousel"
                  data-bs-slide-to="2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#canalRestaurantCarousel"
                  data-bs-slide-to="3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#canalRestaurantCarousel"
                  data-bs-slide-to="4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/Image/cnlRes1.jpg"
                    className="d-block w-100"
                    alt="Canal Restaurant View"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/cnlRes2.jpg"
                    className="d-block w-100"
                    alt="Canal Restaurant Food"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/cnlRes3.jpg"
                    className="d-block w-100"
                    alt="Canal Restaurant Interior"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/cnlRes4.jpg"
                    className="d-block w-100"
                    alt="Canal Restaurant Food"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/cnlRes5.jpg"
                    className="d-block w-100"
                    alt="Canal Restaurant Interior"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#canalRestaurantCarousel"
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
                data-bs-target="#canalRestaurantCarousel"
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
          <div className="restaurant-info">
            <h2>CANAL RESTAURANT</h2>
            <p>
              Experience the fusion of traditional Thai flavors with modern
              culinary techniques at our Canal Restaurant. Overlooking the
              serene Banglamphu Canal, this elegant dining venue offers a
              peaceful retreat from the bustling city.
            </p>

            <div className="restaurant-details">
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    Breakfast: 6:30 AM - 10:30 AM
                    <br />
                    Lunch: 11:30 AM - 2:30 PM
                    <br />
                    Dinner: 6:00 PM - 10:30 PM
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-utensils"></i>
                <div>
                  <h4>Cuisine</h4>
                  <p>Thai Fusion, International</p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-certificate"></i>
                <div>
                  <h4>Special Features</h4>
                  <p>Halal Certified, Canal View, Indoor & Outdoor Seating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-restaurant">
        <div className="restaurant-content reversed">
          <div className="restaurant-slider">
            <div
              id="saraRestaurantCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#saraRestaurantCarousel"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#saraRestaurantCarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#saraRestaurantCarousel"
                  data-bs-slide-to="2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#saraRestaurantCarousel"
                  data-bs-slide-to="3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#saraRestaurantCarousel"
                  data-bs-slide-to="4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/Image/saraRes1.jpg"
                    className="d-block w-100"
                    alt="Sara Restaurant Ambiance"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/saraRes2.jpg"
                    className="d-block w-100"
                    alt="Sara Restaurant Dishes"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/saraRes3.jpg"
                    className="d-block w-100"
                    alt="Sara Restaurant Seating"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/saraRes4.jpg"
                    className="d-block w-100"
                    alt="Sara Restaurant Dishes"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Image/saraRes5.jpg"
                    className="d-block w-100"
                    alt="Sara Restaurant Seating"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#saraRestaurantCarousel"
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
                data-bs-target="#saraRestaurantCarousel"
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
          <div className="restaurant-info">
            <h2>SARA RESTAURANT</h2>
            <p>
              Sara Restaurant offers an authentic Middle Eastern culinary
              journey in the heart of Bangkok. Our dedicated chefs prepare
              halal-certified dishes using traditional techniques and the finest
              imported ingredients.
            </p>

            <div className="restaurant-details">
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    Lunch: 12:00 PM - 3:00 PM
                    <br />
                    Dinner: 6:00 PM - 11:00 PM
                    <br />
                    Weekends: 12:00 PM - 11:00 PM
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-utensils"></i>
                <div>
                  <h4>Cuisine</h4>
                  <p>Middle Eastern, Mediterranean, Halal</p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-certificate"></i>
                <div>
                  <h4>Special Features</h4>
                  <p>Halal Certified, Private Dining Areas, Rooftop Seating</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="special-offers">
      <div className="special-offers-container">
        <h2>SPECIAL DINING OFFERS</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <div className="offer-image">
              <img src="/Image/Breakfast-Buffet.jpg" alt="Breakfast Buffet" />
            </div>
            <div className="offer-content">
              <h3>Breakfast Buffet</h3>
              <p>Start your day with our extensive international breakfast buffet featuring both Western and Asian favorites.</p>
              <p className="offer-price">THB 650 net per person</p>
              {/* <a href="#" className="btn-book-now">Book Now</a> */}
            </div>
          </div>

          <div className="offer-card">
            <div className="offer-image">
              <img src="/Image/afternoon-tea.jpg" alt="Afternoon Tea" />
            </div>
            <div className="offer-content">
              <h3>Canal Afternoon Tea</h3>
              <p>Enjoy a relaxing afternoon with our selection of fine teas and delectable treats while overlooking the canal.</p>
              <p className="offer-price">THB 850 net for two persons</p>
              {/* <a href="#" className="btn-book-now">Book Now</a> */}
            </div>
          </div>

          <div className="offer-card">
            <div className="offer-image">
              <img src="/Image/middle-eastern-feast.jpg" alt="Middle Eastern Feast" />
            </div>
            <div className="offer-content">
              <h3>Middle Eastern Feast</h3>
              <p>Experience a lavish sharing-style dinner at Sara Restaurant with authentic Middle Eastern specialties.</p>
              <p className="offer-price">THB 1,200 net per person</p>
              {/* <a href="#" className="btn-book-now">Book Now</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}

export default Restaurant;
