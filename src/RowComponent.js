// RowComponent.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

function RowComponent({ day }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/day/${day}`);
  };

  return (
    <div className="row" onClick={handleClick}>
      {day}
    </div>
  );
}

export default RowComponent;
