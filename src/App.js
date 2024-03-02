import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import logo from './assets/logo.png';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <a href="https://www.faceprep.in" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <MainComponent /> {/* Render MainComponent instead of BoxComponent */}
      </div>
    </Router>
  );
}

export default App;
