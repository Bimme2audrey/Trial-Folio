import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Marquee from '../components/Marquee';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RevealObserver from '../components/RevealObserver';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Marquee />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
