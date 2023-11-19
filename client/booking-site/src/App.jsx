import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import AirportTaxi from './componants/airportTaxi/AirportTaxi';
import Attractions from './componants/attractions/Attractions';
import CarRentals from './componants/carRentals/CarRentals';
import Flights from './componants/flights/Flights';
import Registre from './pages/registre/Registre';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hotels' element={<List />}></Route>
        <Route path='/hotels/:id' element={<Hotel />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/registre" element={<Registre />}> </Route>
        <Route path='/airporttaxi' element={<AirportTaxi />}></Route>
        <Route path='/attractions' element={<Attractions />}></Route>
        <Route path='/carrentals' element={<CarRentals />}></Route>
        <Route path='/flights' element={<Flights />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
