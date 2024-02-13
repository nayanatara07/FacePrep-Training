// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoxComponent from './BoxComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoxComponent />} />
        {/* Add more routes for specific days if needed */}
      </Routes>
    </Router>
  );
}

export default App;
