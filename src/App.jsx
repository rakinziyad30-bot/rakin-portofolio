import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <Navbar onCvNotice={showToast} />

      <main>
        <Hero onCvNotice={showToast} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* Brutalist Notification Toast for CV / Resume Action */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            style={{
              position: 'fixed',
              bottom: '1.5rem',
              right: '1.5rem',
              zIndex: 2500,
              maxWidth: '380px',
              backgroundColor: 'var(--color-charcoal)',
              color: 'var(--color-ivory)',
              border: '2px solid var(--color-olive)',
              boxShadow: '6px 6px 0px var(--color-olive)',
              padding: '0.9rem 1.15rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              lineHeight: 1.45,
            }}
          >
            <div style={{ color: 'var(--color-olive)', fontWeight: 700, marginBottom: '0.25rem' }}>
              [SYSTEM NOTICE]
            </div>
            <div>{toastMessage}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
