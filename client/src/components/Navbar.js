import React, { useEffect } from "react";
import '../css/Navbar.css'; // Import the custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login"; 
  }

  const resetToDefaultLanguage = () => {
    const googleTranslateInstance = window.google.translate.TranslateElement.getInstance();
    if (googleTranslateInstance) {
      googleTranslateInstance.setEnabled(false); // Disable translation
    }
  };

  // Define googleTranslateElementInit before using it
  window.googleTranslateElementInit = function () {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false // Prevent auto display of the translation dropdown
    }, 'google_translate_element');

    setTimeout(() => {
      const navbar = document.querySelector('header.navbar');
      if (navbar) {
        navbar.style.zIndex = "1030";
      }
    }, 1000);
  };

  useEffect(() => {
    // Define googleTranslateElementInit before using it
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, "google_translate_element");
  
      setTimeout(() => {
        const navbar = document.querySelector("header.navbar");
        if (navbar) {
          navbar.style.zIndex = "1030";
        }
      }, 1000);
    };
  
    // Assign to window object
    window.googleTranslateElementInit = googleTranslateElementInit;
  
    if (!window.google) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      googleTranslateElementInit();
    }
  
    return () => {
      const existingScript = document.querySelector(
        'script[src="//translate.google.com/translate_a/element.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
  

  return (
    <div>
      <header className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/home">LOGO</a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="translation-controls">
            <div id="google_translate_element"></div>
            <button className="reset-language-btn" onClick={resetToDefaultLanguage}>English</button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/rooms" role="button" aria-expanded="false">
                  Rooms
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/rooms/Superiorclassicroom">Superior Classic Room</a></li>
                  <li><a className="dropdown-item" href="/rooms/Deluxecanalroom">Deluxe Canal Room</a></li>
                  <li><a className="dropdown-item" href="/rooms/Granddeluxeroom">Grand Deluxe Room</a></li>
                  <li><a className="dropdown-item" href="/rooms/Diplomatroom">Diplomat Room</a></li>
                  <li><a className="dropdown-item" href="/rooms/Nouvoroom">Nouvo Suites</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
                  Service & Facilities
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/restaurant">Restaurants</a></li>
                  <li><a className="dropdown-item" href="facilities-services/swimming-pool.html">Swimming Pools</a></li>
                  <li><a className="dropdown-item" href="/guestservice">Guest Services</a></li>
                </ul>
              </li>
            </ul>
            <div className="login-container">
              {user ? (
                <div className="login-item">
                  <h6 className="user-name" style={{ marginRight: "20px", marginTop: "8px" }}>{user.name}</h6>
                  <button className="logout-btn" onClick={logout}>Logout</button>
                </div>
              ) : (
                <button className="login-btn" onClick={() => window.location.href="/login"}>Login</button>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
