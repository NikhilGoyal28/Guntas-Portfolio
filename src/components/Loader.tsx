import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#030303',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px' }}>
            {/* Title */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1rem', letterSpacing: '3px', color: 'var(--accent-gold)' }}>
                GUNTAS MONGA
              </span>
              <span style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '3rem', color: '#fff', lineHeight: 1 }}>
                {Math.min(progress, 100)}%
              </span>
            </div>

            {/* Progress Bar Container */}
            <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
              <motion.div 
                style={{ 
                  height: '100%', 
                  background: 'var(--accent-gold)', 
                  width: `${progress}%`,
                  boxShadow: '0 0 10px var(--accent-gold)'
                }} 
              />
            </div>

            <div style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem', fontFamily: 'Outfit', letterSpacing: '1px', textTransform: 'uppercase' }}>
              ENGINEERING DIGITAL ATTENTION...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
