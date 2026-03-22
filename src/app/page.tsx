'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';

export default function Home() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}
