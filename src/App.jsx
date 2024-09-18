import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddArea from './components/AddArea';
import Areas from './components/Areas';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import VirtualTour from './pages/VirtualTour';
import Cultural from './pages/Cultural';
import Mountains from './pages/Mountains';
import Pilgrimage from './pages/Pilgrimage';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-area" element={<AddArea />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/mountains" element={<Mountains />} />
        <Route path="/VirtualTour" element={<VirtualTour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pilgrimage" element={<Pilgrimage />} />
        <Route path="/cultural" element={<Cultural />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
