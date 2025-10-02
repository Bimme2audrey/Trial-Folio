import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SectionDivider type="zigzag" backgroundColor="var(--bg-secondary)" />
              <About />
              <SectionDivider type="wave" backgroundColor="var(--bg-primary)" />
              <Skills />
              <SectionDivider type="curve" backgroundColor="var(--bg-secondary)" />
              <Education />
              <SectionDivider type="triangle" backgroundColor="var(--bg-primary)" />
              <Portfolio />
              <SectionDivider type="zigzag" backgroundColor="var(--bg-secondary)" />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
