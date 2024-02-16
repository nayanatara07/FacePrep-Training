import React, { useState } from 'react';
import BoxComponent from './BoxComponent';
import CodeDisplay from './CodeDisplay';
import { FaGithub, FaLinkedin, FaUser, FaUserGraduate } from 'react-icons/fa';
import '../styles/MainComponent.css';

const codeForTest1 = `function Test1() {
  // Add your code here
}`;

const codeForTest2 = `function Test2() {
  // Add your code here
}`;

const codeForTest3 = `function Test3() {
  // Add your code here
}`;

const codeForTest4 = `function Test4() {
  // Add your code here
}`;

const codeForTest5 = `function Test5() {
  // Add your code here
}`;

const codeForTest6 = `function Test6() {
  // Add your code here
}`;

const codeForTest7 = `function Test7() {
  // Add your code here
}`;

function MainComponent() {
  const [displayCode, setDisplayCode] = useState(null);

  const handleButtonClick = (code) => {
    if (displayCode === code) {
      setDisplayCode(null); 
    } else {
      setDisplayCode(code); 
    }
  };

  return (
    <div className="main-container">
      <div className="box-container">
        <BoxComponent />
      </div>
      <div className="test-container">
        <h3 className="test-heading">Test Codes</h3>
        <div className="test-buttons-container">
          <button className="test-button" onClick={() => handleButtonClick(codeForTest1)}>
            Test1
          </button>
          <button className="test-button" onClick={() => handleButtonClick(codeForTest2)}>
            Test2
          </button>
          <button className="test-button" onClick={() => handleButtonClick(codeForTest3)}>
            Test3
          </button>
          <button className="test-button" onClick={() => handleButtonClick(codeForTest4)}>
            Test4
          </button>
          <button className="test-button" onClick={() => handleButtonClick(codeForTest5)}>
            Test5
          </button>
          <button className="test-button" onClick={() => handleButtonClick(codeForTest6)}>
            Test6
          </button>
          <button className="test-button" onClick={() => handleButtonClick(codeForTest7)}>
            Test7
          </button>
        </div>
      </div>
      {displayCode && <CodeDisplay code={displayCode} />}
      <footer className="footer">
  <div className="footer-icons" style={{ display: 'flex' }}>
    <a href="https://github.com/nayanatara07/FacePrep-Training" target="_blank" rel="noopener noreferrer">
      <FaGithub /> GitHub
    </a>
    <a href="https://www.linkedin.com/company/faceprep/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
      <FaLinkedin /> LinkedIn
    </a>
    <a href="https://www.faceprep.in/skillzone/" target="_blank" rel="noopener noreferrer">
      <FaUserGraduate /> Skillzone
    </a>
    <a href="https://www.quizr.in/" target="_blank" rel="noopener noreferrer">
      <FaUser /> Quizr
    </a>
  </div>
</footer>
    </div>
  );
}

export default MainComponent;



