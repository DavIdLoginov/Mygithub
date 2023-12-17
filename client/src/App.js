import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './organisms/Header';
import OtherUserPage from './pages/OtherUser';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(token);
  }, []);

  return (
    <BrowserRouter>
        <div>
          <Header />
          <Routes>
            {!isAuthenticated ? (
              <Route path="/" element={<Auth />} />
            ) : (
              <Route path="/" element={<Navigate to="/profile" />} />
            )}
            <Route path="/profile" element={<Profile />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/other-users" element={<OtherUserPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
