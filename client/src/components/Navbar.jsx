import React from "react";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login"; // Redirect to login after logout
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Hotel</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" style={{ color: "gray" }} aria-current="page" href="/room">
                  Room
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/op1">Option1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/op2">Option2</a>
              </li>

              {user ? (
                <>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {user.name}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="userDropdown">
                      <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
