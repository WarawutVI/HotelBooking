import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Hotel</a>
        <div class ="box-op">
        <a className="nav-link active"style={{ color: "gray" }}aria-current="page"href="#"> Home</a>
        <a class="nav-link" href="/loging">Option1</a>
        <a class="nav-link" href="/loging">Option1</a>
        </div>
      
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
             
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  Registr
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/loging">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
