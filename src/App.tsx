import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BackendProjects from './components/BackendProjects';
import FullStackProjects from './components/FullStackProjects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
        <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backend" element={<BackendProjects />} />
          <Route path="/fullstack" element={<FullStackProjects />} />
        </Routes>
        <ContactForm />
        <Footer />
      </div>
    </BrowserRouter>
  );
}