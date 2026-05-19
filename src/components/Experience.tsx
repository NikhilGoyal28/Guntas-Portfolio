import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Learning Strategist",
      company: "Money Matters",
      period: "Jan 2026 – Present",
      points: [
        "Crafted tailored content designed for target audiences, driving direct interaction from 5,000+ users during campaign peak.",
        "Analyzed Instagram Insights to optimize content, driving a 20% increase in follower growth via data-driven decisions.",
        "Orchestrated offline/online communication strategies achieving a 25% surge in audience interaction."
      ]
    },
    {
      role: "Social Media Manager",
      company: "Trend Mela",
      period: "Jul 2025 – Feb 2026",
      points: [
        "Managed Instagram Content Strategy, publishing 65+ posts (Reels, Carousels, Static).",
        "Generated 15K–20K views/post using hook writing, trend research & content optimization.",
        "Engineered A/B testing on content formats leading to 25%-40% higher engagement on carousels."
      ]
    }
  ];

  return (
    <section className="reveal" id="experience" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="experience-layout-grid">
          
          <div className="experience-sticky-title" style={{ height: 'fit-content' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', letterSpacing: '-1.5px', lineHeight: 1 }}>
              THE <br /><span className="text-gradient">JOURNEY.</span>
            </h2>
            <p style={{ color: '#aaa', fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', fontFamily: 'Outfit' }}>
              A track record of building and scaling attention for leading brands.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-gold)' }} />
                
                <div className="experience-header">
                  <div>
                    <h3 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'Outfit', lineHeight: 1.1 }}>{exp.role}</h3>
                    <h4 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', color: 'var(--accent-gold)', fontWeight: 600 }}>{exp.company}</h4>
                  </div>
                  <div className="experience-period">
                    {exp.period}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {exp.points.map((point, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', color: '#ccc', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: 1.6 }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px', flexShrink: 0, boxShadow: '0 0 10px var(--accent-gold)' }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>
        {`
          .experience-layout-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
          }
          .experience-sticky-title {
            position: sticky;
            top: 100px;
          }
          .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 2rem;
            gap: 1.5rem;
          }
          .experience-period {
            border: 1px solid rgba(212, 175, 55, 0.3);
            padding: 0.5rem 1.5rem;
            borderRadius: 50px;
            color: var(--accent-gold);
            fontWeight: 600;
            font-family: 'Outfit';
            white-space: nowrap;
          }

          @media (max-width: 1024px) {
            .experience-layout-grid {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            .experience-sticky-title {
              position: static;
              text-align: center;
              margin-bottom: 1rem;
            }
          }

          @media (max-width: 640px) {
            .experience-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.8rem;
            }
            .experience-period {
              padding: 0.4rem 1.2rem;
              font-size: 0.85rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Experience;
