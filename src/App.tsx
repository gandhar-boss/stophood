import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import CategoriesPage from './pages/CategoriesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ProfilePage from './pages/ProfilePage';
import { DonationProvider } from './context/DonationContext';

function App() {
  return (
    <Router>
      <DonationProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/donate" element={<DonationPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DonationProvider>
    </Router>
  );
}

export default App;