import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your React pages from EachCompany folder
import Login from './components/views/login';
import ManageCompany from './components/views/ManageCompany';
import AddCompany from './components/views/AddCompany';
import Dashboard from './components/views/EachCompany/Dashboard';
import UnidentifiedEvents from './components/views/EachCompany/UnidentifiedEvents';
import DOT from './components/views/EachCompany/Dot';
import AddDriver from './components/views/EachCompany/Dot/AddDriver';
import CompanyManagement from './components/views/EachCompany/CompanyManagement';
import DeviceManagement from './components/views/EachCompany/DeviceManagement';
import AddDevice from './components/views/EachCompany/Devices/AddDevices';
// Add more as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ManageCompany" element={<ManageCompany />} />
        <Route path="/AddCompany" element={<AddCompany />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashboard/:id/UnidentifiedEvents" element={<UnidentifiedEvents />} />
        <Route path="/dashboard/:id/DOT" element={<DOT />} />
        <Route path="/dashboard/:id/DOT/AddDriver" element={<AddDriver />} />
        <Route path="/dashboard/:id/CompanyManagement" element={<CompanyManagement />} />
        <Route path="/dashboard/:id/DeviceManagement" element={<DeviceManagement />} />
        <Route path="/dashboard/:id/Devices/AddDevices" element={<AddDevice />} />
      </Routes>
    </Router>
  );
}

export default App;
