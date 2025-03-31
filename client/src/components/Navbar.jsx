import React from "react";
import '../css/Narbar.css'
function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login"; // Redirect to login after logout
  }
window.addEventListener("scroll", function () {
    var header = document.querySelector("header.navbar");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
   });

  return (
    <div>
      <header class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand me-auto" href="index.html">LOGO</a> 

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="translation-controls">
                <div id="google_translate_element"></div>
                <button class="reset-language-btn" onclick="resetToDefaultLanguage()">English</button>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/room" role="button" aria-expanded="false">
                            Rooms
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Superior Classic Room</a></li>
                            <li><a class="dropdown-item" href="#">Deluxe Canal Room</a></li>
                            <li><a class="dropdown-item" href="#">Grand Deluxe Room</a></li>
                            <li><a class="dropdown-item" href="#">Diplomat Room</a></li>
                            <li><a class="dropdown-item" href="#">Nouvo Suites</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="service.html" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Service & Facilities
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="facilities-services/restaurants.html">Restaurants</a>
                            </li>
                            <li><a class="dropdown-item" href="facilities-services/swimming-pool.html">Swimming
                                    Pools</a></li>
                            <li><a class="dropdown-item" href="facilities-services/guest-services.html">Guest
                                    Services</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Meetings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Location</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <div class="login-container ms-3">
                    <button class="login-btn"><a href="/login">Login</a></button> 
                </div>
            </div>
        </div>
    </header>
    </div>
  );
}

export default Navbar;
