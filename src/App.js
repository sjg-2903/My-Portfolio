import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
