import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your React pages from EachCompany folder
import Login from './components/views/login';
import ManageCompany from './components/views/ManageCompany';
import AddCompany from './components/views/AddCompany';
// Add more as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ManageCompany" element={<ManageCompany />} />
        <Route path="/AddCompany" element={<AddCompany />} />
        {/* Add additional routes here */}
      </Routes>
    </Router>
  );
}

export default App;
