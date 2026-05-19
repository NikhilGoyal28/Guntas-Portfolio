import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { TrendingUp, Award, Maximize2, X, AlertCircle, Calendar, Sparkles, Quote, ThumbsUp } from 'lucide-react';

interface Metric {
  label: string;
  before: string;
  after: string;
  change: string;
  icon: string;
}

interface CaseStudy {
  brand: string;
  niche: string;
  resultTitle: string;
  problem: string;
  strategy: string;
  timeline: string;
  highlights: string[];
  metrics: Metric[];
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  brand: string;
  metricHighlight?: string;
}

interface ProofImage {
  src: string;
  label: string;
}

// Custom Counter Component for Scroll-Activated Premium Count-Up Animations
const MetricCounter: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Extract numbers from strings like "+73%", "5000+", "20%", "28%"
    const numberMatch = value.match(/\d+/);
    if (!numberMatch) return;

    const target = parseInt(numberMatch[0], 10);
    const duration = 1200; // ms
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value]);

  // Render format based on input value string
  const formatValue = () => {
    if (value.includes('%')) {
      return `${value.startsWith('+') ? '+' : ''}${count}%`;
    }
    if (value.includes('+')) {
      return `${count}+`;
    }
    return count.toString();
  };

  return (
    <span ref={ref} className="text-gradient" style={{ fontWeight: 900 }}>
      {formatValue()}
    </span>
  );
};

const Results: React.FC = () => {
  const ref = useRef(null);
  const [selectedProof, setSelectedProof] = useState<string | null>(null);

  const cases: CaseStudy[] = [
    {
      brand: "Trend Mela",
      niche: "Lifestyle & Viral Commerce",
      resultTitle: "Scaling Channel Visibility and Hook Optimization",
      problem: "Flatlining organic reach, poor carousel slide-through rates, and a failure to convert views into active buyers.",
      strategy: "We built high-retention content systems centered on A/B tested hook frameworks (Reels vs Carousels) and scheduled pacing via Meta Business Suite.",
      timeline: "8 months (Jul 2025 – Feb 2026)",
      highlights: [
        "Achieved 73% organic reach increase in 90 days",
        "Generated 15K–20K average views per post via trend research",
        "Optimized carousels leading to 25%-40% higher engagement",
        "Rigorous competitor auditing leading to 28% campaign improvement"
      ],
      metrics: [
        { label: "REACH GROWTH", before: "Baseline", after: "+73%", change: "+73%", icon: "📈" },
        { label: "ENGAGEMENT Surges", before: "Low", after: "+50%", change: "+50%", icon: "🔥" },
        { label: "CAMPAIGN EFFICIENCY", before: "Standard", after: "+28%", change: "+28%", icon: "🎯" }
      ]
    },
    {
      brand: "Money Matters",
      niche: "Fintech & Wealth Coaching",
      resultTitle: "Establishing Online-Offline Community Retention Pipelines",
      problem: "Failure to convey high-ticket authority to online remote readers, low audience slide-through rates, and fragmented offline awareness.",
      strategy: "We engineered minimal editorial grids, custom psychology loops, and unified communication strategies connecting offline workshops with Instagram.",
      timeline: "5 months (Jan 2026 – Present)",
      highlights: [
        "Direct interaction from 5,000+ users during campaign peak period",
        "Secured a 20% increase in follower growth through data insights",
        "Orchestrated a 25% surge in audience interaction via offline sync",
        "Designed personal finance curriculum to solidify authority status"
      ],
      metrics: [
        { label: "ACTIVE INTERACTIONS", before: "Zero", after: "5000+", change: "5000+", icon: "👥" },
        { label: "FOLLOWER GROWTH", before: "Flat", after: "+20%", change: "+20%", icon: "📈" },
        { label: "AUDIENCE SYNCHRONIZATION", before: "Baseline", after: "+25%", change: "+25%", icon: "🤝" }
      ]
    },
    {
      brand: "Financial Literacy Workshops",
      niche: "Educational / Event Strategy",
      resultTitle: "Prestige Authority Scaling & Curriculum Engineering",
      problem: "Difficulty creating highly interactive offline curriculums and scaling student retention from live seminars back to online communities.",
      strategy: "We built structured concept decks, AIDA student workshops, and designed interactive curriculum systems to facilitate compounding financial education.",
      timeline: "Ongoing Strategy",
      highlights: [
        "Achieved 25% target audience recall & interaction surge",
        "Constructed curriculum maps targeting budgeting, saving, and wealth strategies",
        "Increased student referral and online community onboarding ratios by 35%"
      ],
      metrics: [
        { label: "AUDIENCE RECALL", before: "10%", after: "25%", change: "25%", icon: "🎓" },
        { label: "COMMUNITY ONBOARDING", before: "Low", after: "+35%", change: "+35%", icon: "🚀" },
        { label: "OUTCOME RATE", before: "Standard", after: "100%", change: "100%", icon: "🏆" }
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Guntas completely re-engineered our Reels strategy. Engagement jumped by 50% in just 60 days. An absolute execution partner who understands psychology-driven growth.",
      author: "Pranav M.",
      role: "Founder",
      brand: "Trend Mela",
      metricHighlight: "73% Reach Increase"
    },
    {
      quote: "Working with Guntas turned our content from standard posts into a high-ticket trust machine. Outbound conversions are now regular, and follower growth is up by 20%.",
      author: "Sidharth K.",
      role: "Co-Founder",
      brand: "Money Matters",
      metricHighlight: "5,000+ Engaged Users"
    },
    {
      quote: "The visual direction Guntas built for our fitness vertical is next level. Engagement rate grew instantly, and hook drop-offs are practically gone.",
      author: "Vikram S.",
      role: "Growth Director",
      brand: "Apex Athletic",
      metricHighlight: "+25% Engagement Surge"
    }
  ];

  const proofs: ProofImage[] = [
    { src: "/data/Achievements/WhatsApp Image 2026-05-11 at 11.20.49.jpeg", label: "Instagram Analytics Spikes" },
    { src: "/data/Achievements/WhatsApp Image 2026-05-11 at 11.20.49 (1).jpeg", label: "Audience Engagement Proof" },
    { src: "/data/Achievements/WhatsApp Image 2026-05-11 at 11.20.50.jpeg", label: "Viral Trend Insights" },
    { src: "/data/Achievements/WhatsApp Image 2026-05-11 at 11.20.50 (1).jpeg", label: "Client Validation Message" }
  ];

  return (
    <section id="results" ref={ref} style={{ background: 'radial-gradient(100% 50% at 50% 50%, rgba(255,255,255,0.005) 0%, rgba(0,0,0,0) 100%)' }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 700 }}>PROVEN ROI & SOCIAL PROOF</span>
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1.5px', marginTop: '0.5rem' }}>
            CLIENT <span className="text-gradient">RESULTS.</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', fontFamily: 'Outfit', maxWidth: '600px', margin: '0 auto' }}>
            Empirical evidence, verified analytics, and direct growth transformations.
          </p>
        </div>

        {/* Case Studies Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginBottom: '8rem' }}>
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}
            >
              
              {/* Top Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                    <span style={{ fontFamily: 'Outfit', fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>{c.brand}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', border: '1px solid var(--gold-primary)', padding: '0.2rem 0.8rem', borderRadius: '50px', fontWeight: 700, fontFamily: 'Outfit', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={10} /> {c.timeline}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '2rem', fontFamily: 'Outfit', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                    {c.resultTitle}
                  </h3>
                  <p style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', fontWeight: 700, marginTop: '0.4rem', fontFamily: 'Outfit', letterSpacing: '0.5px' }}>
                    NICHE: {c.niche.toUpperCase()}
                  </p>
                </div>
                
                {/* Dynamic Metric Display with Count-Ups */}
                <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                  {c.metrics.map((m, mIdx) => (
                    <div key={mIdx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem 1.6rem', textAlign: 'center', minWidth: '130px' }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', fontFamily: 'Outfit' }}>
                        <MetricCounter value={m.after} />
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#666', fontWeight: 800, marginTop: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Transformation Problem vs Strategy */}
              <div className="transformation-grid">
                <div>
                  <h4 style={{ fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 800, color: 'var(--gold-primary)', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '1px' }}>
                    <AlertCircle size={15} /> The Bottleneck / Challenge
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, fontFamily: 'Inter' }}>
                    {c.problem}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '1px' }}>
                    <TrendingUp size={15} /> The Strategy Executed
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, fontFamily: 'Inter' }}>
                    {c.strategy}
                  </p>
                </div>
              </div>

              {/* Highlights & Specific Outcomes */}
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.02)', padding: '2rem' }}>
                <span style={{ color: 'var(--gold-primary)', fontFamily: 'Outfit', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '1.2rem' }}>
                  KEY CAMPAIGN MILESTONES:
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  {c.highlights.map((hl, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <Sparkles size={14} style={{ color: 'var(--gold-primary)', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#ccc', fontSize: '0.92rem', lineHeight: 1.4, fontFamily: 'Inter' }}>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Real Testimonial Grid (Adding Hard Trust Social Proof) */}
        <div style={{ marginBottom: '8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 800 }}>TESTIMONIALS</span>
            <h3 style={{ fontSize: '3rem', fontFamily: 'Outfit', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
              WHAT PARTNERS SAY.
            </h3>
            <p style={{ color: '#888', fontSize: '1.05rem', marginTop: '0.5rem', fontFamily: 'Inter' }}>
              Direct quotes and validation from remote brand founders and managers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {testimonials.map((t, tIdx) => (
              <motion.div
                key={tIdx}
                className="glass-panel"
                style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', position: 'relative' }}
                whileHover={{ y: -6, borderColor: 'rgba(191,149,63,0.3)' }}
              >
                <div style={{ position: 'absolute', top: '25px', right: '25px', opacity: 0.05, color: '#fff' }}>
                  <Quote size={50} />
                </div>

                <div>
                  {t.metricHighlight && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.78rem', color: 'var(--gold-primary)', fontWeight: 800, fontFamily: 'Outfit', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.8rem' }}>
                      <ThumbsUp size={10} />
                      {t.metricHighlight}
                    </div>
                  )}

                  <p style={{ color: '#ccc', fontSize: '0.98rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '2.5rem', fontFamily: 'Inter' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(191, 149, 63, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', fontWeight: 800, fontSize: '0.9rem', border: '1px solid rgba(191,149,63,0.2)', fontFamily: 'Outfit' }}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h5 style={{ fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{t.author}</h5>
                    <p style={{ fontSize: '0.75rem', color: '#666', fontWeight: 600 }}>{t.role}, <span style={{ color: 'var(--gold-primary)' }}>{t.brand}</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verified Screenshot Proof Section */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 800 }}>VERIFIED METRICS BOARD</span>
            <h3 style={{ fontSize: '3rem', fontFamily: 'Outfit', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
              ANALYTICS & CLIENT PROOF.
            </h3>
            <p style={{ color: '#888', fontSize: '1.05rem', fontFamily: 'Inter', marginTop: '0.5rem' }}>
              Unedited platform captures, campaign growth graphs, and real-time client feedback. Click to expand.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {proofs.map((proof, pIdx) => (
              <motion.div
                key={pIdx}
                className="glass-panel"
                style={{ padding: '0.5rem', cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
                whileHover={{ y: -8, borderColor: 'rgba(191, 149, 63, 0.4)' }}
                onClick={() => setSelectedProof(proof.src)}
              >
                <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '360px', border: '1px solid rgba(255,255,255,0.03)' }}>
                  <img 
                    src={proof.src} 
                    alt={proof.label} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', opacity: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'opacity 0.3s ease' }} className="proof-hover">
                    <Maximize2 size={24} style={{ color: '#fff' }} />
                  </div>
                </div>
                <div style={{ padding: '1rem 0.5rem 0.5rem 0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={16} style={{ color: 'var(--gold-primary)' }} />
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, fontFamily: 'Outfit' }}>{proof.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox for screenshots rendered inside React Portal to bypass DOM stacking context traps */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProof && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProof(null)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 999999999, // Peak zIndex priority
                background: 'rgba(3, 3, 3, 0.98)', // Highly opaque backdrop to block any background bleeding
                backdropFilter: 'blur(20px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
              }}
            >
              {/* Accessible Screen-Fixed Circular Close Button */}
              <button
                onClick={() => setSelectedProof(null)}
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
                  zIndex: 999999999,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  transition: 'all 0.2s ease'
                }}
                className="glass-close-btn"
                title="Close"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%', zIndex: 999999999 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedProof} 
                  alt="Expanded Proof" 
                  style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 50px 100px rgba(0,0,0,0.9)' }} 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <style>
        {`
          .glass-panel:hover .proof-hover { opacity: 1 !important; }
        `}
      </style>
    </section>
  );
};

export default Results;
