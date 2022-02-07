import React from 'react';
import './App.css';
import { Global } from "@emotion/react";
import { Globalstyles } from './styles/globalStyles';
import { Routes, Route } from "react-router-dom";
import MyProfile from "./pages/MyProfile";
import Home from './pages/Home';
import Layout from './pages/Layout';
import UserInfo from './pages/UserInfo';
import NoMatch from './components/NoMatch';
import PWAPrompt from "react-ios-pwa-prompt";
import UserTest from './pages/UserTest';

import UserContextProvider from "./contexts/MyUserContext";


function App() {
  return (
    <div className="App">
      
      <Global styles={Globalstyles} />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>    
            <Route path="/" element={<Home />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path=":handle" element={<UserInfo />}/>
            <Route path="usertest" element={<UserTest />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </UserContextProvider>
      <PWAPrompt />
    </div>
  );
}

export default App;
