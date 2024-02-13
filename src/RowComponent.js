// RowComponent.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RowComponent.css'; // Import CSS file for styling

function RowComponent({ day }) {
  const [isClicked, setIsClicked] = useState(false);
  const [programs, setPrograms] = useState([]);

  // Define program data in JSON format for each day
  const programData = {
    Day1: ['Classwork Programs', 'Practice Programs'], // Example programs for Day1
    Day2: ['Classwork Programs', 'Practice Programs'], // Example programs for Day2
    Day3: ['Classwork Programs', 'Practice Programs'],
    Day4: ['Classwork Programs', 'Practice Programs'],
    Day5: ['Classwork Programs', 'Practice Programs'],
    // Add program data for other days similarly
  };

  // Function to handle click on a day
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the isClicked state
    setPrograms(programData[day] || []); // Set programs for the clicked day
  };

  return (
    <div className="row" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2 className="day-text">{day}</h2>
      {isClicked && (
        <div className="buttons-container">
          {programs.map((program, index) => (
            <Link key={index} to={`/${day}/${program}`}>
              <button className="program-button">{program}</button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RowComponent;




