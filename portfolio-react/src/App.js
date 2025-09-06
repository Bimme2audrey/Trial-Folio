import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      <SectionDivider type="zigzag" backgroundColor="var(--bg-secondary)" />
      <About />
      
      <SectionDivider type="wave" backgroundColor="var(--bg-primary)" />
      <Education />
      
      <SectionDivider type="curve" backgroundColor="var(--bg-secondary)" />
      <Skills />
      
      <SectionDivider type="triangle" backgroundColor="var(--bg-primary)" />
      <Portfolio />
      
      <SectionDivider type="zigzag" backgroundColor="var(--bg-secondary)" />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
