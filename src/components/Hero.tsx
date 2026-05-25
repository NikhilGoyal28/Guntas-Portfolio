import React from 'react';
import { ArrowRight, Sparkles, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import ThreeDCanvas from './ThreeDCanvas';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow"></div>

      <div className="container hero-grid">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          style={{ width: '100%' }}
        >
          {/* Trust Badge / Credentials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0.6rem 1.4rem',
              border: '1px solid rgba(191, 149, 63, 0.3)',
              background: 'rgba(191, 149, 63, 0.04)',
              borderRadius: '50px',
              color: '#fff',
              fontWeight: 700,
              letterSpacing: '1.5px',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              fontSize: 'clamp(0.68rem, 2vw, 0.78rem)',
              fontFamily: 'Outfit',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)'
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>HubSpot Certified ✦ 73% avg organic reach growth</span>
          </motion.div>

          {/* Primary Punchy Copy */}
          <h1 style={{ fontSize: 'clamp(2.3rem, 6.5vw, 4.6rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1.05 }}>
            YOUR CONTENT <br />
            GETS LOST. <br />
            <span className="text-gradient">MINE GETS SAVED & SHARED.</span>
          </h1>

          {/* Benefit-driven Subtext */}
          <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', color: '#ccc', marginBottom: '2.5rem', maxWidth: '580px', lineHeight: 1.65, fontFamily: 'Inter' }}>
            Most brands post hoping for virality. I build high-retention content systems based on psychology and hook architecture that took one client from dormant to <strong>5,000+ engaged users in 60 days</strong>. No guesses, just ROI.
          </p>

          {/* Visual trust markers in the Hero */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }} className="hero-trust-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={16} style={{ color: 'var(--gold-primary)' }} />
              <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 600, fontFamily: 'Outfit' }}>
                Average Reach Growth: <strong style={{ color: '#fff' }}>+137%</strong>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} style={{ color: 'var(--gold-primary)' }} />
              <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 600, fontFamily: 'Outfit' }}>
                Engagement Surge: <strong style={{ color: '#fff' }}>+84%</strong>
              </span>
            </div>
          </div>

          <div className="btn-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <MagneticButton href="#contact" className="btn-primary">
              Book a Strategy Call <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#results" className="btn-outline">
              Inspect Case Studies
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Graphic: Overlapping 3D Holographic Canvas and Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1.3 }}
          className="hero-graphic-container"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
        >
          {/* Interactive 3D Wireframe Spherical Canvas with Responsive Height Wrapper */}
          <div className="hero-canvas-wrapper" style={{ width: '100%', height: 'clamp(280px, 45vh, 480px)', zIndex: 1 }}>
            <ThreeDCanvas />
          </div>

          {/* Clean Floating Avatar card in the center */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hero-avatar-wrapper"
            style={{
              position: 'absolute',
              width: 'clamp(140px, 35vw, 210px)',
              height: 'clamp(140px, 35vw, 210px)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--gold-primary)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(191,149,63,0.25)',
              zIndex: 2,
              pointerEvents: 'auto'
            }}
          >
            <img
              src="/data/My-img.jpeg"
              alt="Guntas Monga"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </motion.div>
        </motion.div>

      </div>

      <style>
        {`
          .hero-section {
            padding-top: 8rem;
          }
          @media (max-width: 1024px) {
            .hero-section {
              padding-top: 6rem;
              padding-bottom: 4rem;
            }
            .hero-badge {
              margin-bottom: 1.5rem !important;
            }
            .hero-trust-row {
              justify-content: center;
              margin-bottom: 2rem !important;
            }
          }
          @media (max-width: 480px) {
            .hero-section {
              padding-top: 5.5rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
