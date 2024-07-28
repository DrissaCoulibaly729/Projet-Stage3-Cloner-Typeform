import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainSection from './pages/MainSection';
import SignUpPage from './pages/SignUpPage';
import SignUpPageEmail from './pages/SignUpPageEmail';
import Dashboard from './pages/Dashboard';
import './index.css';
import LoginPage from './pages/LoginPage';
import AddContent from './pages/AddContent';
import Workspace from './pages/Workspace';
import FormContent from './pages/FormContent';
import AuthCallback from './pages/AuthCallback';
import Preview from './pages/Preview';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signupwithmail" element={<SignUpPageEmail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/form" element={<AddContent/>} />
          <Route path="/workspace" element={<Workspace/>} />
          <Route path="/formContent" element={<FormContent/>} />
          <Route path="/auth/callback" element={<AuthCallback/>} />
          <Route path="/preview" element={<Preview/>} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
