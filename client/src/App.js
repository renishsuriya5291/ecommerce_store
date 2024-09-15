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
import NavBar from './Components/NavBar'; // Default Navbar for all pages except /
import NavBarLanding from './Components/NavBar_landing'; // Separate Navbar for home page
import Footer from './Components/Footer';
import Register from './Pages/Register';
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PageTransitionWrapper from './Components/PageTransitionWrapper'; // Import the new component

function App() {
  const role = useSelector((state) => state.auth.role);

  return (
    <Router>
      <Routes>
        {/* Home Route with NavBarLanding */}
        <Route path="/" element={
          <>
            <NavBarLanding />
            <PageTransitionWrapper>
              <Home />
            </PageTransitionWrapper>
          </>
        } />

        {/* Other routes with the default NavBar */}
        <Route path="/signin" element={
          <>
            <NavBarLanding />
            <PageTransitionWrapper>
              <Login />
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/signup" element={
          <>
            <NavBarLanding />
            <PageTransitionWrapper>
              <Register />
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/about" element={
          <>
            <NavBarLanding />
            <PageTransitionWrapper>
              <About />
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/contact" element={
          <>
            <NavBarLanding />
            <PageTransitionWrapper>
              <Contact />
            </PageTransitionWrapper>
          </>
        } />

        {/* Protected Freelancer and Client routes */}
        <Route path="/freelancer/home" element={
          <>
            <NavBar role={role} />
            <PageTransitionWrapper>
              <ProtectedRoute>
                <FHome />
              </ProtectedRoute>
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/freelancer/about" element={
          <>
            <NavBar role={role} />
            <PageTransitionWrapper>
              <ProtectedRoute>
                <FAbout />
              </ProtectedRoute>
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/freelancer/contact" element={
          <>
            <NavBar role={role} />
            <PageTransitionWrapper>
              <ProtectedRoute>
                <FContact />
              </ProtectedRoute>
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/client/home" element={
          <>
            <NavBar role={role} />
            <PageTransitionWrapper>
              <ProtectedRoute>
                <CHome />
              </ProtectedRoute>
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/client/about" element={
          <>
            <NavBar role={role} />
            <PageTransitionWrapper>
              <ProtectedRoute>
                <CAbout />
              </ProtectedRoute>
            </PageTransitionWrapper>
          </>
        } />

        <Route path="/client/contact" element={
          <>
            <NavBar role={role} />
            <PageTransitionWrapper>
              <ProtectedRoute>
                <CContact />
              </ProtectedRoute>
            </PageTransitionWrapper>
          </>
        } />

        {/* Catch-all route for 404 pages */}
        <Route path="*" element={
          <>
            <NavBar role={role} />
            <PageTransitionWrapper>
              <NotFound />
            </PageTransitionWrapper>
          </>
        } />
      </Routes>

      {/* Footer appears across all pages */}
      <Footer role={role} />
    </Router>
  );
}

export default App;
