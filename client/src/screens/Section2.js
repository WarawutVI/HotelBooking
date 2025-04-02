import React from 'react';
import "../css/section2.css"

const Section2 = () => {
  const banners = [
    {
      imgSrc: "https://northwoodoffice-assets.imgix.net/goBallantyne/images/heroes/NORTHITALIA156-2.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-debug=&fp-x=0.4993&fp-y=0.7915&fp-z=1&h=1080&ixlib=php-3.1.0&q=80&v=1718293452&w=1920",
      altText: "Restaurant",
      caption: "Fine Dining"
    },
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0605/0136/0804/files/Modern_meeting_room_with_advanced_technology.jpg?v=1703751846",
      altText: "Meeting Room",
      caption: "Conference Room"
    },
    {
      imgSrc: "https://media.cnn.com/api/v1/images/stellar/prod/160502155618-terranea-vista-pool.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
      altText: "Pool",
      caption: "Luxury Pool"
    },
    {
      imgSrc: "https://cache.marriott.com/content/dam/marriott-renditions/SYXEB/syxeb-spa-5353-hor-wide.jpg",
      altText: "Spa",
      caption: "Spa & Wellness"
    }
  ];

  return (
    <section className="section2">
      <table>
        <tbody>
          <tr>
            {banners.slice(0, 2).map((banner, index) => (
              <td className="banner" key={index}>
                <a href="#">
                  <img src={banner.imgSrc} alt={banner.altText} />
                  <div className="banner-caption">
                    <h5>{banner.caption}</h5>
                  </div>
                </a>
              </td>
            ))}
            <td className="banner-slide" rowSpan="2">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? 'active' : ''}
                    />
                  ))}
                </div>
                <div className="carousel-inner">
                  {["Pristine Beaches", "Special Events", "Relaxation"].map((title, idx) => (
                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                      <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000"
                        className="d-block w-100"
                        alt={title}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{title}</h5>
                        <p>{idx === 0 ? "Just minutes away from our hotel, enjoy the sun and sand." : idx === 1 ? "Perfect location for weddings and celebrations." : "Unwind and recharge in our beautiful surroundings."}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            {banners.slice(2).map((banner, index) => (
              <td className="banner" key={index}>
                <a href="#">
                  <img src={banner.imgSrc} alt={banner.altText} />
                  <div className="banner-caption">
                    <h5>{banner.caption}</h5>
                  </div>
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Section2;
