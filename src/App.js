import React from 'react';
import './App.css';
import { Global } from "@emotion/react";
import { Globalstyles } from './styles/globalStyles';
import { Routes, Route, Link } from "react-router-dom";
import MyProfile from "./pages/MyProfile";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Global styles={Globalstyles} />
      <h1>Dette er starten på Movie Buddy...!</h1>
      <Link to="/userinfo">Profile</Link>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userid" element={<MyProfile />} />
      </Routes>


    </div>
  );
}

export default App;
