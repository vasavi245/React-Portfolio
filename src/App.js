import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
  return (
   <Router>
      <Header /> 
      <About />
      <hr className="break" />
      <Portfolio />
    </Router>
  );
}

export default App;
