import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import All from './pages/All';
import Nav from './Nav';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import { createContext, useState } from 'react';


export const AppContext = createContext(); 


const App = () => {
  const [username , setUsername] = useState("njuguna");


  return (
    <div>
      <AppContext.Provider value={{ username, setUsername}}>
      <Router> 
        <Nav />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all" element={<All />} />
          <Route path="*" element={<h1> Page not found</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App