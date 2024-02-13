import React from 'react';
import RowComponent from './RowComponent';
import './BoxComponent.css'; 

function BoxComponent() {
  const days = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'];

  return (
    <div className="center-box">
      <div className="box">
        {days.map((day, index) => (
          <RowComponent key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default BoxComponent;