// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import ProjectContainer from './components/pages/ProjectContainer';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/Footer';

const styles = {
  background: '#ecebe5',
  background: 'white',
  color: 'black',
  padding: 0
}

function App() {
  return (
    <Router>
      <div style={styles}>
        <Header />
          <Routes>
            <Route
              path="/reactPortfolio"
              element={<Home/>}
              />
            <Route 
              path="/"
              element={<Home/>}
            />
            <Route
              path="/about"
              element={<About/>}
              />
            <Route
              path="/portfolio"
              element={<ProjectContainer/>}
              />
            <Route
              path="/resume"
              element={<Resume/>}
              />
            <Route
              path="/contact"
              element={<Contact/>}
              />
          </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
