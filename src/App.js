import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoxComponent from './BoxComponent';
import logo from './logo.png'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        {}
        <a href="https://www.faceprep.in/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <Routes>
          <Route path="/" element={<BoxComponent />} />
          {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
