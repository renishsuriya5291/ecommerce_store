// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FHome from './Pages/FreeLancer/Home';
import CHome from './Pages/Client/Home';
import FAbout from './Pages/FreeLancer/About';
import CAbout from './Pages/Client/About';
import FContact from './Pages/FreeLancer/Contact';
import CContact from './Pages/Client/Contact';
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  const role = useSelector((state) => state.auth.role); // Access role from Redux store

  return (
    <Router>
      <NavBar role={role} />
      <Routes>
        <Route path="/freelancer/home" element={
          <ProtectedRoute>
            <FHome />
          </ProtectedRoute>
        } />
        <Route path="/freelancer/about" element={
          <ProtectedRoute>
            <FAbout />
          </ProtectedRoute>
        } />
        <Route path="/freelancer/contact" element={
          <ProtectedRoute>
            <FContact />
          </ProtectedRoute>
        } />
        <Route path="/client/home" element={
          <ProtectedRoute>
            <CHome />
          </ProtectedRoute>
        } />
        <Route path="/client/about" element={
          <ProtectedRoute>
            <CAbout />
          </ProtectedRoute>
        } />
        <Route path="/client/contact" element={
          <ProtectedRoute>
            <CContact />
          </ProtectedRoute>
        } />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer role={role} />
    </Router>
  );
}

export default App;