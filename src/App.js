import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainSection from './pages/MainSection';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import './index.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
