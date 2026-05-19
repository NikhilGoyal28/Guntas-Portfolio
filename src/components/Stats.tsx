import React, { useRef } from 'react';
import { Activity, TrendingUp, Users, Eye } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    // Set CSS variable for glow effect
    ref.current.style.setProperty('--mouse-x', `${mouseX}px`);
    ref.current.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="glass-panel"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp size={32} className="text-gold" />,
      value: "50%",
      label: "Engagement Surge",
      context: "Trend Mela Campaigns"
    },
    {
      icon: <Eye size={32} className="text-gold" />,
      value: "20K+",
      label: "Views Per Post",
      context: "Via Trend Optimization"
    },
    {
      icon: <Users size={32} className="text-gold" />,
      value: "20%",
      label: "Follower Growth",
      context: "Money Matters"
    },
    {
      icon: <Activity size={32} className="text-gold" />,
      value: "73%",
      label: "Reach Increase",
      context: "Meta Business Suite"
    }
  ];

  return (
    <section className="reveal">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px' }}>
            NUMBERS THAT <span className="text-gradient">SPEAK.</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', fontFamily: 'Outfit' }}>
            International clients demand ROI. Here are the raw metrics.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          perspective: '1000px'
        }}>
          {stats.map((stat, idx) => (
            <TiltCard key={idx}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '12px', width: 'fit-content', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'Outfit', color: '#fff', marginTop: '1rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                  {stat.value}
                </div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '0.2rem', fontFamily: 'Outfit' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#888' }}>
                    {stat.context}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
