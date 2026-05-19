import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import GlobalCanvasBackground from './components/GlobalCanvasBackground';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import ProjectsGallery from './components/ProjectsGallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Premium GSAP Reveal scroll triggers
    const sections = gsap.utils.toArray('.reveal') as HTMLElement[];
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });

    // Dynamic glass-panel mouse glow tracker
    const handleMouseMove = (e: MouseEvent) => {
      const panels = document.querySelectorAll('.glass-panel');
      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (panel as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (panel as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Cursor />
      <GlobalCanvasBackground />
      
      <div className="noise-overlay" />
      
      <div className="ambient-bg">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
      </div>
      
      <div className="app-container">
        <Hero />
        <Marquee />
        
        <div id="metrics" className="reveal">
          <Stats />
        </div>

        <div id="experience" className="reveal">
          <Experience />
        </div>

        <div id="services" className="reveal">
          <Services />
        </div>

        <div id="process" className="reveal">
          <Process />
        </div>

        <div id="results" className="reveal">
          <Results />
        </div>

        <ProjectsGallery />

        <div id="faq" className="reveal">
          <FAQ />
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
