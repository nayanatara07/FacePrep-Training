// RowComponent.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RowComponent.css'; // Import CSS file for styling

function RowComponent({ day }) {
  const [isClicked, setIsClicked] = useState(false);

  // Define the links for each button
  const links = {
    Day1: [
      { label: 'Classwork Programs', link: 'https://brave-temple-b28.notion.site/DAY-1-Class-Work-Programs-551e196b41e5420da1ffe51754646e3b' },
      { label: 'Practice Programs', link: '/day1/practice' }
      // Add more links as needed for Day1
    ],
    Day2: [
      { label: 'Classwork Programs', link: '/day2/classwork' },
      { label: 'Practice Programs', link: '/day2/practice' }
      // Add more links as needed for Day2
    ],
    Day3: [
      { label: 'Classwork Programs', link: '/day3/classwork' },
      { label: 'Practice Programs', link: '/day3/practice' }
      // Add more links as needed for Day3
    ],
    Day4: [
      { label: 'Classwork Programs', link: '/day4/classwork' },
      { label: 'Practice Programs', link: '/day4/practice' }
      // Add more links as needed for Day4
    ],
    Day5: [
      { label: 'Classwork Programs', link: '/day5/classwork' },
      { label: 'Practice Programs', link: '/day5/practice' }
      // Add more links as needed for Day5
    ],
  };

  // Function to handle click on a day
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the isClicked state
  };

  return (
    <div className="row" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2 className="day-text">{day}</h2>
      {isClicked && (
        <div className="buttons-container">
          {links[day].map(({ label, link }, index) => (
            <Link key={index} to={link}>
              <button className="program-button">{label}</button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RowComponent;
