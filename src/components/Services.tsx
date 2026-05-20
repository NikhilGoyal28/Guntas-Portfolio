import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface ServicePackage {
  name: string;
  tagline: string;
  price: string;
  timeline: string;
  forWhom: string;
  outcome: string;
  includes: string[];
  featured?: boolean;
}

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPricing, setShowPricing] = useState(true);

  const packages: ServicePackage[] = [
    {
      name: "Content Strategy Audit",
      tagline: "See exactly why your content isn't converting and how to fix it.",
      price: "$2,000",
      timeline: "2 Weeks",
      forWhom: "Brands/Founders with existing content but low conversion or flatlining view numbers.",
      outcome: "A customized playbook outlining your psychology-driven growth map that you or your team can deploy immediately.",
      includes: [
        "Complete historical content autopsy",
        "Competitor teardown & benchmarking",
        "Audience psychology & pain point map",
        "Custom 3-second hook framework playbook",
        "Visual pacing wireframes for editing",
        "1-hour strategic implementation kickoff"
      ]
    },
    {
      name: "Monthly Content Retainer",
      tagline: "The complete, hands-off content growth system engineered for brand scale.",
      price: "$3,500 - $7,500/mo",
      timeline: "Ongoing (3-Month Min)",
      forWhom: "Prestige brands, founders, and creators seeking elite positioning and inbound trust without the time investment.",
      outcome: "Hands-off high-retention post streams (averaging 15K-20K views) engineered directly to drive client conversions.",
      includes: [
        "Content ideation & scripting (20 posts/month)",
        "Premium editorial grids (Canva design)",
        "Psychological hook copywriting",
        "Meta Business Suite scheduling & pacing",
        "Weekly data insights & A/B format testing",
        "Direct Slack channels for rapid feedback"
      ],
      featured: true
    },
    {
      name: "Campaign Strategy & Launch",
      tagline: "Outsource launch anxieties. Build predictable hype that drives conversions.",
      price: "$5,000 - $15,000",
      timeline: "4 - 8 Weeks",
      forWhom: "Brands launching new products, workshops, services, or executing global rebrands.",
      outcome: "A high-visibility campaign launch structure built to capture maximum reach (+73% typical spikes).",
      includes: [
        "End-to-end launch concept & creative direction",
        "Pre-launch teasers & AIDA hook strategies",
        "Organic-paid hybrid content distribution",
        "Meta Ads Manager campaign optimization",
        "Real-time tracking of landing page clicks",
        "Comprehensive post-campaign ROI teardown"
      ]
    }
  ];

  const comparisons = [
    {
      metric: "Hook Architecture",
      others: "Hope for virality by chasing random sounds",
      guntas: "Scientific 3-second psychological framework custom to target buyers"
    },
    {
      metric: "Design Philosophy",
      others: "Messy, generic templates loaded with color noise",
      guntas: "Premium editorial grids, luxury typography, prestige positioning"
    },
    {
      metric: "Testing Framework",
      others: "Post daily at random times, no format tracking",
      guntas: "Rigorous Reels vs Carousel A/B testing (+25-40% engagement optimizations)"
    },
    {
      metric: "Reporting Focus",
      others: "Vague spreadsheets showing only vanity view counts",
      guntas: "Granular weekly Insights (hook drop-offs, saves, outbound DM conversions)"
    }
  ];

  return (
    <section id="services" ref={ref} style={{ background: 'radial-gradient(100% 50% at 50% 50%, rgba(212,175,55,0.015) 0%, rgba(0,0,0,0) 100%)', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
      
      {/* 1. Services & Packages Section */}
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 700 }}>HOW WE COLLABORATE</span>
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1.5px', marginTop: '0.5rem' }}>
            PACKAGES & <span className="text-gradient">SERVICES.</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', fontFamily: 'Outfit', maxWidth: '600px', margin: '0 auto', marginBottom: '2.5rem' }}>
            Flexible collaboration structures built for measurable ROI, prestige positioning, and absolute conversion clarity.
          </p>

          {/* Pricing Toggle Button */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.02)', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ color: !showPricing ? '#fff' : '#666', fontSize: '0.9rem', fontWeight: 700, fontFamily: 'Outfit' }}>Hide Investment Tiers</span>
            <button 
              onClick={() => setShowPricing(!showPricing)}
              style={{
                width: '50px',
                height: '26px',
                borderRadius: '100px',
                background: showPricing ? 'var(--gold-primary)' : 'rgba(255,255,255,0.1)',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0 3px',
                transition: 'background 0.3s ease'
              }}
            >
              <motion.div 
                layout 
                style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  background: '#000',
                  x: showPricing ? 24 : 0
                }} 
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span style={{ color: showPricing ? '#fff' : '#666', fontSize: '0.9rem', fontWeight: 700, fontFamily: 'Outfit' }}>Show Investment Tiers</span>
          </div>
        </div>

        {/* Packages Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8, borderColor: 'rgba(191, 149, 63, 0.4)', boxShadow: '0 20px 40px rgba(191, 149, 63, 0.05)' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(1.5rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 2.5rem)',
                background: pkg.featured ? 'linear-gradient(180deg, rgba(191,149,63,0.03) 0%, rgba(255,255,255,0.005) 100%)' : 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: pkg.featured ? '1px solid rgba(191,149,63,0.3)' : '1px solid rgba(255,255,255,0.08)',
                height: '100%',
                position: 'relative'
              }}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div style={{ 
                  position: 'absolute', 
                  top: '25px', 
                  right: '25px', 
                  background: 'linear-gradient(135deg, var(--accent-gold-light) 0%, var(--accent-gold) 100%)', 
                  color: '#000', 
                  fontSize: '0.75rem', 
                  fontWeight: 900, 
                  fontFamily: 'Outfit', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '50px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 8px 16px rgba(191,149,63,0.2)'
                }} className="featured-badge">
                  <Sparkles size={10} />
                  Most Popular
                </div>
              )}

              <div>
                <span style={{ color: 'var(--gold-primary)', fontFamily: 'Outfit', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {pkg.timeline}
                </span>

                <h3 style={{ fontSize: '1.8rem', fontFamily: 'Outfit', fontWeight: 900, color: '#fff', margin: '0.8rem 0 1rem 0', letterSpacing: '-0.5px' }}>
                  {pkg.name}
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '2.5rem', fontFamily: 'Inter', minHeight: '44px' }}>
                  {pkg.tagline}
                </p>

                {/* Pricing / Investment Display */}
                {showPricing && (
                  <div style={{ margin: '1.5rem 0 2.5rem 0', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                    <span style={{ color: '#555', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>INVESTMENT LEVEL</span>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--gold-primary)', fontFamily: 'Outfit' }}>{pkg.price}</span>
                  </div>
                )}

                {/* Target Audience & Expected Outcomes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
                  <div>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'Outfit' }}>Ideal For:</span>
                    <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.2rem', lineHeight: 1.4, fontFamily: 'Inter' }}>{pkg.forWhom}</p>
                  </div>
                  <div>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'Outfit' }}>Expected Outcome:</span>
                    <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.2rem', lineHeight: 1.4, fontFamily: 'Inter' }}>{pkg.outcome}</p>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '2rem 0' }} />

                {/* Deliverables Checklist */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {pkg.includes.map((item, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#ccc', fontSize: '0.92rem', lineHeight: 1.4, fontFamily: 'Inter' }}>
                      <Check size={14} style={{ color: 'var(--gold-primary)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button inside card */}
              <div style={{ marginTop: '3.5rem' }}>
                <MagneticButton 
                  href="#contact" 
                  className={pkg.featured ? "btn-primary" : "btn-outline"}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Acquire This Plan
                  <ArrowRight size={16} />
                </MagneticButton>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Brand Differentiation Table: Why Guntas Converts Better */}
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6rem' }}>
        
        {/* Sub Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 800 }}>COMPETITIVE SUPERIORITY</span>
          <h3 style={{ fontSize: '3rem', fontFamily: 'Outfit', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
            WHY OUR SYSTEMS <span className="text-gradient">CONVERT BETTER.</span>
          </h3>
          <p style={{ color: '#888', fontSize: '1.05rem', marginTop: '0.5rem', fontFamily: 'Inter' }}>
            How we eliminate average social media tactics and replace them with surgical, high-retention frameworks.
          </p>
        </div>

        {/* Comparison Board */}
        <div className="glass-panel" style={{ padding: '0', borderRadius: '16px' }}>
          <table className="responsive-table">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.015)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '2rem', fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 800, color: '#fff' }}>SYSTEM STRATEGY</th>
                <th style={{ padding: '2rem', fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 800, color: '#555' }}>WHAT OTHER MANAGERS DO</th>
                <th style={{ padding: '2rem', fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 800, color: 'var(--gold-primary)' }}>WHAT WE DO</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: idx === comparisons.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.04)', transition: 'background 0.3s ease' }} className="table-row-hover">
                  <td data-label="System Strategy" style={{ padding: '2rem', fontFamily: 'Outfit', fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>{row.metric}</td>
                  <td data-label="What Other Managers Do" style={{ padding: '2rem', color: '#666', fontSize: '0.92rem', lineHeight: 1.5, fontFamily: 'Inter' }}>{row.others}</td>
                  <td data-label="What We Do" style={{ padding: '2rem', color: '#ccc', fontSize: '0.92rem', lineHeight: 1.5, fontFamily: 'Inter', fontWeight: 500 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check size={14} style={{ color: 'var(--gold-primary)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{row.guntas}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <style>
            {`
              .table-row-hover:hover { background: rgba(255,255,255,0.005) !important; }
            `}
          </style>
        </div>
      </div>

    </section>
  );
};

export default Services;
