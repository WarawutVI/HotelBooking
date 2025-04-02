import React from 'react';
import "../css/footer.css";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Hotel Award</h2>
          <div className="awards-container">
            <img src="https://images.template.net/174633/Hotel-Training-Certificate-Template-edit-online.png" alt="certificate1" />
            <img src="https://assets.visme.co/templates/banners/thumbnails/i_Hospitality-Training-Certificate_full.jpg" alt="certificate2" />
          </div>
        </div>

        <div className="footer-section">
          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Rooms</a></li>
              <li><a href="service.html">Services & Facilities</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h2>Address</h2>
          <p>
            Nouvo City Hotel (N Ventures Co., Ltd.)<br />
            2 Samsen 2, Samsen Road, Pranakorn, Banglamphu, Bangkok 10200<br />
            Tel. : +66 2 282 7500 | Fax. : +66 2 282 3345<br />
            E-mail : <a href="mailto:info@nouvocityhotel.com" style={{ color: '#f4d03f', textDecoration: 'none' }}>info@nouvocityhotel.com</a>
          </p>
          <div className="row-icon">
            <div className="icon">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios11/512/facebook-new.png" alt="facebook" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.transparentpng.com/thumb/logo-instagram/mrG45j-instagram-black-logo-free-download.png" alt="instagram" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.svgrepo.com/show/353365/youtube-with-circle.svg" alt="youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h1>Google Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8900.91753639118!2d100.0325178315665!3d13.818063965021732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fcffa1b2043d1b%3A0x18c800b2e15effc7!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lio4Li04Lil4Lib4Liy4LiB4LijIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4leC4nuC4o-C4sOC4o-C4suC4iuC4p-C4seC4h-C4quC4meC4suC4oeC4iOC4seC4meC4l-C4o-C5jOKAiw!5e0!3m2!1sth!2sth!4v1741373280056!5m2!1sth!2sth"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2025 Nouvo City Hotel. All Rights Reserved.</p>
      </div>

      {/* Scroll To Top Button */}
      <div id="scrollTopBtn" className="scroll-top-btn" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </div>

      <script src="/footer.js"></script>
    </footer>
  );
}

export default Footer;
