import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, Clock, Globe, Award, Calendar, CheckCircle2, ShieldAlert, AlertCircle } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'Fintech/Wealth Coaching',
    challenge: '',
    budget: '$2,000 - $5,000',
    contactMethod: 'Email',
    message: '',
    honeypot: '' // spam prevention
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.honeypot) {
      setErrorMsg('Spam detected.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    // Simulate database / API dispatch delay (1.5 seconds)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Trigger mailto client as fallback
      const subject = `Qualified Growth Audit: ${formData.name} (${formData.businessType})`;
      const body = `Hi Guntas,%0D%0A%0D%0AI saw your portfolio and would like to request a Strategic Growth Audit.%0D%0A%0D%0A--- QUALIFICATION DATA ---%0D%0ABrand Type: ${formData.businessType}%0D%0AContent Challenge: ${formData.challenge}%0D%0ABudget Range: ${formData.budget}%0D%0APreferred Contact: ${formData.contactMethod}%0D%0A%0D%0AAdditional Details:%0D%0A${formData.message}%0D%0A%0D%0AFrom,%0D%0A${formData.name}%0D%0AEmail: ${formData.email}`;
      
      window.location.href = `mailto:guntasmonga@gmail.com?subject=${subject}&body=${body}`;
    }, 1500);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917707967589?text=Hi%20Guntas,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20scaling%20strategy!', '_blank');
  };

  return (
    <section id="contact" className="reveal" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Dynamic Background Glow */}
      <div style={{ position: 'absolute', top: '50%', right: '-10%', width: '500px', height: '500px', background: 'var(--gold-primary)', filter: 'blur(200px)', opacity: 0.1, borderRadius: '50%', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>

          {/* Left Side: Big Text & Direct Links */}
          <div>
            <span style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 800 }}>ACQUISITION ENGINE</span>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-2px', lineHeight: 1, marginTop: '0.5rem' }}>
              LET'S <br />
              <span className="text-gradient">PARTNER.</span>
            </h2>
            <p style={{ color: '#aaa', fontSize: '1.2rem', fontFamily: 'Outfit', marginBottom: '3rem', maxWidth: '400px' }}>
              Let's build a content growth pipeline designed to capture premium retention and boost brand conversions.
            </p>

            {/* Strategic Information Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ccc', fontSize: '0.95rem' }}>
                <Clock size={18} style={{ color: 'var(--gold-primary)' }} />
                <span><strong>Avg Response Time:</strong> &lt; 12 Hours guaranteed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ccc', fontSize: '0.95rem' }}>
                <Globe size={18} style={{ color: 'var(--gold-primary)' }} />
                <span><strong>Timezone Alignment:</strong> Global remote (GMT+5:30)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ccc', fontSize: '0.95rem' }}>
                <Award size={18} style={{ color: 'var(--gold-primary)' }} />
                <span><strong>Collaboration model:</strong> Retainer Contracts & Strategy Audits</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
              {/* WhatsApp Button */}
              <MagneticButton
                onClick={handleWhatsApp}
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center', borderColor: '#25D366', color: '#25D366' }}
              >
                <MessageCircle size={22} />
                Start WhatsApp Strategy Chat
              </MagneticButton>

              {/* Direct Email Button */}
              <MagneticButton
                href="mailto:guntasmonga@gmail.com"
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Mail size={22} />
                guntasmonga@gmail.com
              </MagneticButton>
            </div>
          </div>

          {/* Right Side: Qualified Audit Form */}
          <div className="glass-panel" style={{ padding: '4rem 3rem', minHeight: '580px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'Outfit', fontWeight: 800 }}>Request Growth Audit</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--gold-primary)', background: 'rgba(191,149,63,0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontWeight: 700 }}>
                      <Calendar size={14} /> FREE AUDIT
                    </div>
                  </div>

                  {errorMsg && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', color: '#EF4444', marginBottom: '1.5rem', fontSize: '0.9rem', fontFamily: 'Inter' }}>
                      <ShieldAlert size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                    
                    {/* Honeypot Spam Prevention (Hidden Field) */}
                    <input 
                      type="text" 
                      name="honeypot" 
                      style={{ display: 'none' }} 
                      value={formData.honeypot} 
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} 
                    />

                    {/* Name */}
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: '100%', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.1rem', fontFamily: 'Inter', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={(e) => e.currentTarget.style.borderBottomColor = 'var(--gold-primary)'}
                        onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>

                    {/* Email */}
                    <div className="input-group">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.1rem', fontFamily: 'Inter', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={(e) => e.currentTarget.style.borderBottomColor = 'var(--gold-primary)'}
                        onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>

                    {/* Business Niche Dropdown (Qualification) */}
                    <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.8rem', color: '#666', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'Outfit', letterSpacing: '0.5px' }}>Business / Brand Niche</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem', fontFamily: 'Inter', outline: 'none', cursor: 'pointer' }}
                      >
                        <option value="Fintech/Wealth Coaching" style={{ background: '#0a0a0a', color: '#fff' }}>Fintech / Wealth Coaching</option>
                        <option value="E-commerce/Fashion Retail" style={{ background: '#0a0a0a', color: '#fff' }}>E-commerce / Fashion Retail</option>
                        <option value="High-Ticket Personal Brand" style={{ background: '#0a0a0a', color: '#fff' }}>High-Ticket Personal Brand</option>
                        <option value="SaaS / Web App Startup" style={{ background: '#0a0a0a', color: '#fff' }}>SaaS / Web App Startup</option>
                        <option value="Other High-Growth Venture" style={{ background: '#0a0a0a', color: '#fff' }}>Other High-Growth Venture</option>
                      </select>
                    </div>

                    {/* Budget Range Dropdown (Qualification) */}
                    <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.8rem', color: '#666', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'Outfit', letterSpacing: '0.5px' }}>Monthly Campaign Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem', fontFamily: 'Inter', outline: 'none', cursor: 'pointer' }}
                      >
                        <option value="Strategy Blueprint Only ($2,000)" style={{ background: '#0a0a0a', color: '#fff' }}>Strategy Blueprint Only ($2,000)</option>
                        <option value="$2,000 - $5,000" style={{ background: '#0a0a0a', color: '#fff' }}>$2,000 - $5,000 / month</option>
                        <option value="$5,000 - $10,000" style={{ background: '#0a0a0a', color: '#fff' }}>$5,000 - $10,000 / month</option>
                        <option value="$10,000+" style={{ background: '#0a0a0a', color: '#fff' }}>$10,000+ / month</option>
                      </select>
                    </div>

                    {/* Contact Preference */}
                    <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.8rem', color: '#666', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'Outfit', letterSpacing: '0.5px' }}>Preferred Contact Method</label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem', fontFamily: 'Inter', outline: 'none', cursor: 'pointer' }}
                      >
                        <option value="Email" style={{ background: '#0a0a0a', color: '#fff' }}>Email Correspondence</option>
                        <option value="WhatsApp" style={{ background: '#0a0a0a', color: '#fff' }}>WhatsApp Direct Messenger</option>
                        <option value="Zoom Meeting" style={{ background: '#0a0a0a', color: '#fff' }}>Scheduled Zoom Video Discovery</option>
                      </select>
                    </div>

                    {/* Content Challenge */}
                    <div className="input-group">
                      <textarea
                        placeholder="What is your biggest content hurdle or retention bottleneck? (e.g. low slide-through rate, sub 3-second drop-offs)"
                        required
                        rows={3}
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        style={{ width: '100%', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.05rem', fontFamily: 'Inter', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }}
                        onFocus={(e) => e.currentTarget.style.borderBottomColor = 'var(--gold-primary)'}
                        onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>

                    {/* Message Details */}
                    <div className="input-group">
                      <textarea
                        placeholder="Additional details about your brand and launch goals (Optional)"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: '100%', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.05rem', fontFamily: 'Inter', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }}
                        onFocus={(e) => e.currentTarget.style.borderBottomColor = 'var(--gold-primary)'}
                        onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>

                    <MagneticButton
                      className="btn-primary"
                      style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}
                      disabled={isLoading}
                      onClick={() => {}}
                    >
                      {isLoading ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="spinner" />
                          <span>Generating Strategy Link...</span>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>Dispatch Qualified Inquiry</span>
                          <Send size={18} />
                        </div>
                      )}
                    </MagneticButton>

                  </form>
                </motion.div>
              ) : (
                // Beautiful success state overlay with next steps & Calendly booking integration
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ textAlign: 'center', padding: '1.5rem 0' }}
                >
                  <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(191,149,63,0.08)', borderRadius: '50%', color: 'var(--gold-primary)', border: '1px solid rgba(191,149,63,0.2)', marginBottom: '1.8rem' }}>
                    <CheckCircle2 size={40} />
                  </div>
                  
                  <h3 style={{ fontSize: '2rem', fontFamily: 'Outfit', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
                    INQUIRY LOCKED IN.
                  </h3>
                  
                  <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: 1.6, fontFamily: 'Inter', marginBottom: '2.5rem', maxWidth: '420px', margin: '0 auto 2.5rem auto' }}>
                    Hi <strong>{formData.name}</strong>, your growth dossier regarding <strong>{formData.businessType}</strong> has been successfully prepared and routed! Guntas will analyze your hook hurdles and follow up via <strong>{formData.contactMethod}</strong> in under 12 hours.
                  </p>

                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.8rem', fontFamily: 'Outfit' }}>
                      <AlertCircle size={14} /> What happens next?
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#888', fontSize: '0.88rem', fontFamily: 'Inter' }}>
                      <li>1. Guntas performs a manual teardown of your social channel.</li>
                      <li>2. We compile an actionable 3-second hook solution proposal.</li>
                      <li>3. If qualified, we schedule a 15-minute Zoom call to map terms.</li>
                    </ul>
                  </div>

                  {/* High-conversion calendar booking call to action */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <MagneticButton
                      href="https://calendly.com/guntasmonga-discovery/15min"
                      target="_blank"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Calendar size={18} />
                      Secure Instant Zoom Strategy Slot
                    </MagneticButton>

                    <button 
                      onClick={() => setIsSubmitted(false)}
                      style={{ background: 'none', border: 'none', color: '#555', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', fontFamily: 'Outfit', transition: 'color 0.2s', marginTop: '0.5rem' }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#888'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#555'}
                    >
                      Edit Form / Re-submit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      <style>
        {`
          .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-top-color: #000;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            display: inline-block;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
