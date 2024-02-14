import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RowComponent.css'; 

function RowComponent({ day }) {
  const [isClicked, setIsClicked] = useState(false);

 
  const links = {
    Day1: [
      { label: 'Classwork Programs', link: 'https://brave-temple-b28.notion.site/DAY-1-Class-Work-Programs-551e196b41e5420da1ffe51754646e3b' },
      { label: 'Practice Programs', link: '/day1/practice' }
      
    ],
    Day2: [
      { label: 'Classwork Programs', link: '/day2/classwork' },
      { label: 'Practice Programs', link: '/day2/practice' }
      
    ],
    Day3: [
      { label: 'Classwork Programs', link: '/day3/classwork' },
      { label: 'Practice Programs', link: '/day3/practice' }
      
    ],
    Day4: [
      { label: 'Classwork Programs', link: '/day4/classwork' },
      { label: 'Practice Programs', link: '/day4/practice' }
      
    ],
    Day5: [
      { label: 'Classwork Programs', link: '/day5/classwork' },
      { label: 'Practice Programs', link: '/day5/practice' }
      
    ],
  };

 
  const handleClick = () => {
    setIsClicked(!isClicked); 
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
