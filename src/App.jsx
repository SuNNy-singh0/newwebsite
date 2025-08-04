import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Compoents/Homepage/Home';
import Navbar from './Compoents/Homepage/Navbar';

function App() {
  return (
    
    <Routes>
      
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
