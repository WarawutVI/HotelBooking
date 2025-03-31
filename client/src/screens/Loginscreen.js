import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import '../css/LoginScreen.css'; // Make sure to import your CSS file

function Loginscreen() {
  const [emaill, setEmaill] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const user = { emaill, password };

    try {
      const { data } = await axios.post("http://localhost:5000/api/users/login", user);
      
      console.log("Login Successful:", data);
      localStorage.setItem("currentUser", JSON.stringify(data)); // Store user in localStorage
      alert("Login successful");
      if (data.isAdmin) { 
        window.location.href = "/admin"; // Redirect to the admin panel if the user is an admin
      } else {
        window.location.href = "/home"; // Redirect to home page for regular users
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid emaill or password. Please try again.");
    }
  }

  return (
    <div className="boxcrad">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>Login</h1>
          <input
            type="email" // Corrected type to "email"
            className="form-control mt-3"
            placeholder="Emaill"
            value={emaill}
            onChange={(e) => setEmaill(e.target.value)}
          />
          <input
            type="password" 
            className="form-control mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary mt-3" onClick={login}>
            Login
          </button>
          <Link to="/register" className="btn btn-secondary mt-3" style={{marginLeft:"10px"}}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
