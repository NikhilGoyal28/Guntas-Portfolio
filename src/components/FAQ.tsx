import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Award } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long before I see measurable results?",
      answer: "Most clients see positive metric spikes (reach/shares) in the first 30 days. Core compounding authority (follower growth, lead conversion) typically solidifies between days 60 to 90. One of our recent fintech clients, Money Matters, achieved direct interaction with 5,000+ users in their first 60 days using our custom hook framework."
    },
    {
      question: "What if your hook system doesn't work for my niche?",
      answer: "We don't rely on random viral trends. We build data-driven systems centered around industry-specific psychological drivers: pain points, desires, and curiosities. By running A/B format testing (e.g., reels vs carousels, which showed 25-40% higher engagement for Trend Mela), we align the content directly with what your specific high-value prospects want to save and share."
    },
    {
      question: "Do you handle all platforms or specialize exclusively in Instagram?",
      answer: "While our core tactical mastery and frameworks are designed for Instagram's sophisticated algorithm, the visual pacing principles, high-retention copywriting, and AIDA layout wireframes translate beautifully to TikTok, YouTube Shorts, and LinkedIn. We prioritize the channels where your highest-ticket prospects actually spend their active digital time."
    },
    {
      question: "Can you collaborate with my existing content writers and editors?",
      answer: "Yes. We offer a 'Content Strategy Audit' package which acts as a complete visual and hook blueprint for your in-house team to execute. For full-service clients, we handle everything from ideation to scheduling, integrating seamlessly with your business operations so you can focus entirely on your product."
    },
    {
      question: "What are your core pricing packages and terms?",
      answer: "We run three strategic tiers: Strategy Audit (fixed price, 2 weeks), Monthly Growth Retainer (ongoing management, minimum 3-month commitment), and Campaign Strategy & Launch (custom project-based pricing). Exact investment levels depend on channel scope, posting frequency, and customization requirements."
    },
    {
      question: "How do you measure and report success?",
      answer: "We look beyond vanity metrics. Success is measured by hook retention rate (capturing users in the first 3 seconds), shareability (amplified organic growth), saves (high-value authority signals), and direct-message leads. We track weekly Insights and provide a comprehensive monthly performance scorecard with A/B analysis and ROI calculations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="reveal" style={{ background: 'radial-gradient(100% 50% at 50% 50%, rgba(255,255,255,0.003) 0%, rgba(0,0,0,0) 100%)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 800 }}>OBJECTION HANDLING</span>
          <h3 style={{ fontSize: '3rem', fontFamily: 'Outfit', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
            FREQUENTLY <span className="text-gradient">ASKED.</span>
          </h3>
          <p style={{ color: '#888', fontSize: '1.05rem', marginTop: '0.5rem', fontFamily: 'Inter' }}>
            Get direct answers about timelines, deliverables, ROI, and collaboration strategies.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ 
                  padding: '1.8rem 2.2rem', 
                  borderRadius: '16px', 
                  cursor: 'pointer',
                  border: isOpen ? '1px solid rgba(191,149,63,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isOpen ? '0 10px 30px rgba(191,149,63,0.03)' : '0 10px 20px rgba(0,0,0,0.3)',
                  background: isOpen ? 'rgba(191,149,63,0.01)' : 'rgba(255,255,255,0.01)',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => toggleFAQ(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <HelpCircle size={20} style={{ color: isOpen ? 'var(--gold-primary)' : '#666', flexShrink: 0, transition: 'color 0.3s ease' }} />
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', fontFamily: 'Outfit', letterSpacing: '-0.3px' }}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: isOpen ? 'var(--gold-primary)' : '#666' }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 15 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '15px' }}>
                        <p style={{ color: '#aaa', fontSize: '0.98rem', lineHeight: 1.6, fontFamily: 'Inter' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Mini HubSpot trust card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '4rem',
          padding: '1.5rem 2rem',
          background: 'rgba(255,255,255,0.01)',
          border: '1px solid rgba(255,255,255,0.03)',
          borderRadius: '100px',
          width: 'fit-content',
          margin: '4rem auto 0 auto'
        }}>
          <Award size={18} style={{ color: 'var(--gold-primary)' }} />
          <span style={{ color: '#777', fontSize: '0.85rem', fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
            HubSpot Certified Digital Marketing Strategist ✦ Professional Standards
          </span>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
