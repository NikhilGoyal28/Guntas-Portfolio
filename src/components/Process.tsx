import React from 'react';
import { motion } from 'framer-motion';
import { Search, Flame, PenTool, BarChart3, ArrowRight } from 'lucide-react';

interface ProcessStep {
  phase: string;
  duration: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      phase: "Phase 01",
      duration: "Week 1",
      icon: <Search size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: "Content & Psychology Audit",
      description: "Deep dive into your current performance, competitor benchmarking, and target audience psychology analysis.",
      deliverables: [
        "Competitor gap analysis",
        "Audience pain point map",
        "Historical content autopsy"
      ]
    },
    {
      phase: "Phase 02",
      duration: "Week 2",
      icon: <Flame size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: "Custom Hook & Strategy Framework",
      description: "Building the custom content playbooks, high-retention hook structures, and visual pacing blueprints custom to your brand.",
      deliverables: [
        "Custom 3-second hook library",
        "Visual pacing guidelines",
        "Content pillar & calendar model"
      ]
    },
    {
      phase: "Phase 03",
      duration: "Week 3+",
      icon: <PenTool size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: "High-End Production & Design",
      description: "Designing scroll-stopping creatives using Canva, copywriting psychology-backed hooks, and systemized scheduling via Meta Business Suite.",
      deliverables: [
        "Psychology-driven creatives & copy",
        "Meta Business Suite automation",
        "Consistency checkpoint loops"
      ]
    },
    {
      phase: "Phase 04",
      duration: "Ongoing",
      icon: <BarChart3 size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: "A/B Testing & Metric Optimization",
      description: "Rigorous performance evaluations of Reels vs Carousels and posting times against competitor benchmarks for continuous compound growth.",
      deliverables: [
        "A/B format testing logs",
        "Weekly Insights diagnosis",
        "Monthly ROI report cards"
      ]
    }
  ];

  return (
    <section id="process" className="reveal" style={{ background: 'radial-gradient(100% 50% at 50% 50%, rgba(212,175,55,0.01) 0%, rgba(0,0,0,0) 100%)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 700 }}>THE METHODOLOGY</span>
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1.5px', marginTop: '0.5rem' }}>
            THE <span className="text-gradient">SYSTEM.</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', fontFamily: 'Outfit', maxWidth: '600px', margin: '0 auto' }}>
            A surgical, four-step scientific pipeline that converts passive scrolling into active inbound inquiries.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
          
          {/* Vertical connecting line for desktop */}
          <div style={{
            position: 'absolute',
            left: '50px',
            top: '50px',
            bottom: '50px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--gold-primary) 0%, rgba(255,255,255,0.05) 100%)',
            zIndex: 0,
            opacity: 0.3
          }} className="hide-mobile" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="glass-panel process-grid"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ borderColor: 'rgba(191,149,63,0.3)', y: -4 }}
              style={{
                padding: 'clamp(1.5rem, 5vw, 3rem)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)',
                zIndex: 1
              }}
            >
              {/* Icon Holder */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                background: 'rgba(191,149,63,0.08)',
                border: '1px solid rgba(191,149,63,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
              }}>
                {step.icon}
              </div>

              {/* Title & Description */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                  <span style={{ color: 'var(--gold-primary)', fontFamily: 'Outfit', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {step.phase}
                  </span>
                  <span style={{ color: '#555', fontSize: '0.8rem', fontWeight: 800 }}>✦</span>
                  <span style={{ color: '#888', fontFamily: 'Outfit', fontWeight: 600, fontSize: '0.9rem' }}>
                    {step.duration}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', fontFamily: 'Outfit', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.98rem', lineHeight: 1.6, fontFamily: 'Inter', maxWidth: '650px' }}>
                  {step.description}
                </p>
              </div>

              {/* Deliverables / Outputs */}
              <div style={{
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.03)',
                borderRadius: '12px',
                padding: '1.8rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#fff', fontFamily: 'Outfit', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                  KEY OUTCOMES:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '0.88rem', fontFamily: 'Inter' }}>
                      <ArrowRight size={12} style={{ color: 'var(--gold-primary)' }} />
                      {del}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;
