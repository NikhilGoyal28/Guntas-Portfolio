import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Flame, PenTool, BarChart3 } from 'lucide-react';

const Strategy: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      num: "01",
      icon: <Search size={28} className="text-gold" />,
      title: "Research & Benchmarking",
      desc: "Deep competitor analysis and trend identification. I find out what works before your competitors do."
    },
    {
      num: "02",
      icon: <Flame size={28} className="text-gold" />,
      title: "Hook & Positioning",
      desc: "Applying the 3-second visual and auditory hook science to ensure maximum retention and shareability."
    },
    {
      num: "03",
      icon: <PenTool size={28} className="text-gold" />,
      title: "Precision Execution",
      desc: "Designing high-end creatives using Canva and scheduling through Meta Business Suite for optimal visibility."
    },
    {
      num: "04",
      icon: <BarChart3 size={28} className="text-gold" />,
      title: "A/B Optimization",
      desc: "Rigorous testing of formats (Reels vs Carousels) and posting times to compound engagement growth."
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section ref={ref} style={{ background: 'radial-gradient(100% 50% at 50% 50%, rgba(212,175,55,0.02) 0%, rgba(0,0,0,0) 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 700 }}>THE METHODOLOGY</span>
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1.5px', marginTop: '0.5rem' }}>
            THE <span className="text-gradient">SYSTEM.</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', fontFamily: 'Outfit', maxWidth: '600px', margin: '0 auto' }}>
            A surgical, data-backed approach to AI & Psychology-driven content execution.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
              style={{
                padding: '3rem 2rem',
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)'
              }}
              whileHover={{
                y: -10,
                borderColor: 'rgba(212, 175, 55, 0.3)',
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.05)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                  }}>
                    {step.icon}
                  </div>
                  <div style={{
                    fontFamily: 'Outfit',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'rgba(212, 175, 55, 0.15)'
                  }}>
                    {step.num}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff', fontFamily: 'Outfit', fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ color: '#aaa', lineHeight: 1.6, fontSize: '0.95rem', fontFamily: 'Inter' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
