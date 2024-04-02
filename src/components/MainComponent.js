import React, { useState } from 'react';
import BoxComponent from './BoxComponent';
import CodeDisplay from './CodeDisplay';
import { FaGithub, FaLinkedin, FaUser, FaUserGraduate, FaYoutube } from 'react-icons/fa';
import '../styles/MainComponent.css';

const codeForTest1 = `#include <stdio.h>

int count_vowels(char *str) {
    int count = 0;
    while (*str) {
        switch (*str) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                count++;
                break;
            default:
                break;
        }
        str++;
    }
    return count;
}

int main() {
    char input_string[100];
    
    // Input
   
    scanf("%s", input_string);
    
    // Count vowels
    int num_vowels = count_vowels(input_string);
    
    // Output
    printf("Number of vowels: %d\n", num_vowels);
    
    return 0;
}`;

const codeForTest2 = `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
	int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int maxSum = arr[0];
    int currentSum = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            currentSum += arr[i]; 
        } else {
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
            currentSum = arr[i];
        }
    }
    if (currentSum > maxSum) {
        maxSum = currentSum;
    }
    printf("%d\n", maxSum);

    return 0;
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
  const [showContactForm, setShowContactForm] = useState(false);

  const handleButtonClick = (code) => {
    if (displayCode === code) {
      setDisplayCode(null);
    } else {
      setDisplayCode(code);
    }
  };

  const handleContactButtonClick = () => {
    setShowContactForm(!showContactForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setShowContactForm(false);

    event.target.reset();
  };

  return (
    <div className="main-container">
      <div className="flex-container">
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
      </div>

      <div className="contact-form-container">
        {showContactForm && (
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>

      <div className="navigation-menu">
        <button className="contact-button" onClick={handleContactButtonClick}>Contact</button>
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
          <a href="https://www.youtube.com/@FACEPrep" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
            <FaYoutube /> Resources
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;







