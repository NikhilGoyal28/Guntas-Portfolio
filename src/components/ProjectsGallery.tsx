import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Flame, BarChart2, Share2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface Project {
  type: string;
  src: string;
  label: string;
  hook: string;
  views: string;
  retention: string;
  shares: string;
  strategy: string;
}

const ProjectsGallery: React.FC = () => {
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      type: 'video',
      src: '/data/Projects/video-1.mp4',
      label: 'High-Retention Video Hooks',
      hook: 'The Negative Frame hook used to filter high-intent prospects.',
      views: '1.4M+',
      retention: '68%',
      shares: '34K',
      strategy: 'Visual contrast and rapid 3-second scene splicing to reset the attention span.'
    },
    {
      type: 'image',
      src: '/data/Projects/img-1.jpeg',
      label: 'Premium Brand Aesthetics',
      hook: 'Luxury minimal styling with gold gradient ambient lighting.',
      views: '950K+',
      retention: '72%',
      shares: '12K',
      strategy: 'Clean editorial grid typography mapping to high-ticket buyer psychographics.'
    },
    {
      type: 'video',
      src: '/data/Projects/video-2.mp4',
      label: 'Visual Pacing Strategy',
      hook: 'Sound design pacing aligned to dynamic graphic micro-reveals.',
      views: '2.1M+',
      retention: '64%',
      shares: '85K',
      strategy: 'Auditory and visual pacing sync, ensuring less than 0.8s of static screen time.'
    },
    {
      type: 'image',
      src: '/data/Projects/img-2.jpeg',
      label: 'Carousel Design Framework',
      hook: 'AIDA formula carousel pacing that forces the user to swipe.',
      views: '620K+',
      retention: '84%',
      shares: '18K',
      strategy: 'High-contrast graphic templates designed to optimize platform swipe-through-rate.'
    },
    {
      type: 'image',
      src: '/data/Projects/img-3.jpeg',
      label: 'Luxury Brand Consulting',
      hook: 'Minimal typographic styling designed for prestige brands.',
      views: '800K+',
      retention: '78%',
      shares: '9K',
      strategy: 'Eliminating standard template noise to project unmatched high-ticket authority.'
    },
    {
      type: 'video',
      src: '/data/Projects/video-3.mp4',
      label: 'Engagement Amplification',
      hook: 'Auditory patterns and loop logic to trigger multiple watch-throughs.',
      views: '3.4M+',
      retention: '81%',
      shares: '140K',
      strategy: 'Seamless looping transitions that hook the viewer into watching twice without noticing.'
    }
  ];

  return (
    <section id="projects" className="reveal" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        {/* Title Block */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 700 }}>PREMIUM WORK GALLERY</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-1.5px', marginTop: '0.5rem' }}>
            THE <span className="text-gradient">VAULT.</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', fontFamily: 'Outfit', maxWidth: '600px', margin: '0 auto' }}>
            Content systems designed for retention, conversion, and scalable brand growth.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="masonry-grid">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="masonry-item glass-panel"
              style={{ padding: '0.6rem', cursor: 'pointer', overflow: 'hidden' }}
              whileHover={{ y: -8, borderColor: 'rgba(191, 149, 63, 0.4)' }}
              onClick={() => setSelectedProj(proj)}
            >
              <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                {proj.type === 'video' ? (
                  <video
                    src={proj.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                ) : (
                  <img
                    src={proj.src}
                    alt={proj.label}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                )}

                {/* Desktop Hover Overlay: showing title, strategy, and views achieved on hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(3,3,3,0.95) 0%, rgba(3,3,3,0.4) 60%, rgba(3,3,3,0.15) 100%)',
                  opacity: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem',
                  transition: 'opacity 0.35s cubic-bezier(0.25, 1, 0.5, 1)'
                }} className="overlay-hover">

                  <div style={{ transform: 'translateY(15px)', transition: 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)' }} className="overlay-content-slide">
                    <span style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {proj.views} VIEWS ✦ {proj.retention} RETENTION
                    </span>
                    <h4 style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginTop: '0.3rem', marginBottom: '0.6rem' }}>
                      {proj.label}
                    </h4>
                    <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: 1.4, marginBottom: '1.2rem', fontFamily: 'Inter' }}>
                      <strong>Strategy:</strong> {proj.strategy}
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 700, borderBottom: '1px solid var(--gold-primary)', paddingBottom: '2px' }}>
                      <Play size={12} fill="#fff" /> INSPECT STRATEGY DECK
                    </div>
                  </div>
                </div>

                {/* Touch Device Adaptive Static Layout (Visible on Mobile/Tablets, Hidden on Desktops) */}
                <div className="mobile-project-details" style={{ display: 'none', padding: '1.2rem 0.6rem 0.6rem 0.6rem' }}>
                  <span style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {proj.views} VIEWS ✦ {proj.retention} RETENTION
                  </span>
                  <h4 style={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
                    {proj.label}
                  </h4>
                  <p style={{ color: '#bbb', fontSize: '0.82rem', lineHeight: 1.4, fontFamily: 'Inter', marginBottom: '1rem' }}>
                    {proj.strategy}
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fff', fontSize: '0.8rem', fontWeight: 700, borderBottom: '1px solid var(--gold-primary)', paddingBottom: '2px' }}>
                    <Play size={10} fill="#fff" /> INSPECT STRATEGY
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategy Inspection Lightbox Modal rendered inside React Portal for peak z-index isolation */}
      {typeof document !== 'undefined' && selectedProj && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProj(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999999999,
              background: 'rgba(3, 3, 3, 0.98)',
              backdropFilter: 'blur(25px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'clamp(1rem, 3vw, 2rem)'
            }}
          >
            {/*circular Close Button */}
            <button
              onClick={() => setSelectedProj(null)}
              className="modal-close-btn"
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 9999999999,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease'
              }}
              title="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-grid-container"
              style={{
                width: '100%',
                maxWidth: '1100px',
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 50px 100px rgba(0,0,0,0.9), 0 0 50px rgba(191,149,63,0.1)',
                position: 'relative',
                maxHeight: '90vh',
                zIndex: 999999999,
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr'
              }}
            >
              {/* Left Side: Creative Asset Preview */}
              <div style={{ background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'clamp(0.6rem, 2vw, 1.5rem)', position: 'relative', overflow: 'hidden' }}>
                {selectedProj.type === 'video' ? (
                  <video
                    src={selectedProj.src}
                    controls
                    autoPlay
                    loop
                    playsInline
                    style={{ width: '100%', maxHeight: '600px', borderRadius: '12px', display: 'block', objectFit: 'contain' }}
                  />
                ) : (
                  <img
                    src={selectedProj.src}
                    alt={selectedProj.label}
                    style={{ width: '100%', maxHeight: '600px', objectFit: 'contain', borderRadius: '12px', display: 'block' }}
                  />
                )}
              </div>

              {/* Right Side: Strategy Breakdown Panel */}
              <div
                className="modal-strategy-panel"
                style={{
                  padding: 'clamp(1.5rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflowY: 'auto'
                }}
              >
                <div>
                  <span style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    STRATEGY BLUEPRINT
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: 'Outfit', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1 }}>
                    {selectedProj.label}
                  </h3>

                  {/* Hook Psychology Card */}
                  <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '12px', marginBottom: '1.8rem', background: 'rgba(255,255,255,0.01)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>
                      <Flame size={16} /> THE HOOK psychology
                    </div>
                    <p style={{ color: '#ccc', fontSize: 'clamp(0.85rem, 3vw, 0.95rem)', lineHeight: 1.5 }}>
                      "{selectedProj.hook}"
                    </p>
                  </div>

                  {/* Execution Strategy */}
                  <div style={{ marginBottom: '1.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>
                      <BarChart2 size={16} /> METRIC BLUEPRINT
                    </div>
                    <p style={{ color: '#aaa', fontSize: 'clamp(0.85rem, 3vw, 0.95rem)', lineHeight: 1.6 }}>
                      {selectedProj.strategy}
                    </p>
                  </div>
                </div>

                {/* Key Performance Indicators */}
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Outfit' }}>{selectedProj.views}</div>
                      <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600, marginTop: '2px' }}>VIEWS</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)', fontWeight: 800, color: 'var(--gold-primary)', fontFamily: 'Outfit' }}>{selectedProj.retention}</div>
                      <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600, marginTop: '2px' }}>RETENTION</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Outfit' }}>{selectedProj.shares}</div>
                      <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600, marginTop: '2px' }}>SHARES</div>
                    </div>
                  </div>

                  {/* Connect Call To Action */}
                  <MagneticButton
                    href="#contact"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setSelectedProj(null)}
                  >
                    Discuss This Strategy <Share2 size={16} />
                  </MagneticButton>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

      <style>
        {`
          .masonry-item:hover .overlay-hover { opacity: 1 !important; }
          .masonry-item:hover .overlay-content-slide { transform: translateY(0) !important; }

          @media (max-width: 900px) {
            .modal-grid-container {
              grid-template-columns: 1fr !important;
              max-height: 92vh !important;
              overflow-y: auto !important;
            }
            .modal-strategy-panel {
              overflow-y: visible !important;
            }
            .modal-close-btn {
              top: 1rem !important;
              right: 1rem !important;
              width: 38px !important;
              height: 38px !important;
            }
          }

          @media (max-width: 768px) {
            .overlay-hover {
              display: none !important;
            }
            .mobile-project-details {
              display: block !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsGallery;
