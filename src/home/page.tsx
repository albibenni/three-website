import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Tech from './components/Tech.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import StarsCanvas from './components/canvas/StarsCanvas.tsx';
import Navbar from './components/Navbar.tsx';
import { staggerContainer } from './utils/motion.ts';
import { styles } from '../styles.ts';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      {/*<SectionWrapper>*/}
      <motion.section
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </motion.section>

      {/*</SectionWrapper>*/}
    </div>
  );
}
