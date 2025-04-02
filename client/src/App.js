import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import SuperiorClassicRoomscreen from './screens/SuperiorClassicRoomscreen';
import Room from './components/Room'; // Import the Room component
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeluxeCalRoomscreen from './screens/DeluxeCanalRoomscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Roomscreen from './screens/Roomscreen';
import Superiorbooking from './screens/booking/Superiorbooking';
import Deluxecanalbooking from './screens/booking/Deluxecanalbooking';
import Admin from './screens/Admin';
import NOUVO from './screens/NOUVO';
import Nouvobooking from './screens/booking/Nouvobooking';
import DIPLOMAT from './screens/DIPLOMAT';
import Diplomatbooking from './screens/booking/Diplomatbooking';
import GRAND from './screens/GRAND';
import Restaurant from './screens/Restaurant';
import Grandbooking from './screens/booking/Grandbooking';
import ScrollTopButton from './components/ScrollTopButton';
import Guestservice from './screens/Guestservice';


function App() {
  const [rooms, setRooms] = useState([]); 

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollTopButton/>
        <Routes>
          {/* Home Route */}
          <Route path="/home" element={<Homescreen />} />
          <Route path="/rooms" element={<Roomscreen />} />
          {/* Route for rooms list */}
          <Route
            path="/rooms"
            element={
              <div className="container mt-5">
                <h1>Available Rooms</h1>
                {rooms.map((room, index) => (
                  <Room key={index} room={room} />
                ))}
              </div>
            }
          />

          {/* Individual Room Routes */}
          <Route path="/rooms/Superiorclassicroom" element={<SuperiorClassicRoomscreen />} />
          <Route path="/rooms/Deluxecanalroom" element={<DeluxeCalRoomscreen />} />
          <Route path="/rooms/NouvoGrandSuiteRoom" element={<NOUVO />} />
          <Route path="/rooms/Diplomatroom" element={<DIPLOMAT />} />
          
          <Route path="/rooms/GrandDeluxeroom" element={<GRAND/>} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path='/booking/superior' element={<Superiorbooking/>}/>
          <Route path='/booking/deluxecanal' element={<Deluxecanalbooking/>}/>
          <Route path='/booking/nouvo' element={<Nouvobooking/>}/>
          <Route path='/booking/diplomat' element={<Diplomatbooking/>}/>
          <Route path='/booking/grand' element={<Grandbooking/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/restaurant' element={<Restaurant/>}/>
          <Route path='/guestservice' element={<Guestservice/>}/>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
