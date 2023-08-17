import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Tech from './components/Tech.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import StarsCanvas from './components/canvas/StarsCanvas.tsx';
import Navbar from './components/Navbar.tsx';
import SectionWrapper from './components/SectionWrapper.tsx';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <SectionWrapper>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </SectionWrapper>
    </div>
  );
}
