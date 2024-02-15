// MainComponent.js
import React from 'react';
import BoxComponent from './BoxComponent';
import '../styles/MainComponent.css';

function MainComponent() {
  return (
    <div className="main-container">
      <div className="box-container">
        <BoxComponent />
      </div>
      <div className="test-buttons-container">
        <button className="test-button">Test1</button>
        <button className="test-button">Test2</button>
        <button className="test-button">Test3</button>
        <button className="test-button">Test4</button>
        <button className="test-button">Test5</button>
      </div>
    </div>
  );
}

export default MainComponent;

