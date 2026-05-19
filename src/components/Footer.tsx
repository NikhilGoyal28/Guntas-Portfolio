import React from 'react';
import { Mail, ArrowRight, MessageCircle, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="reveal" style={{ padding: '6rem 0 3rem 0', position: 'relative', background: '#020202' }}>
      
      <div style={{ position: 'absolute', top: 0, left: '5%', right: '5%', height: '1px', background: 'rgba(255, 255, 255, 0.05)' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Brand & Intro */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'Outfit', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>
              GUNTAS <span className="text-gradient">MONGA.</span>
            </h3>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, fontFamily: 'Inter', maxWidth: '300px' }}>
              I build high-retention content systems that turn digital attention into measurable, compounding brand growth.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: 'Outfit', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: '1.5rem' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#home" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Home</a>
              <a href="#services" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Services</a>
              <a href="#results" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Case Studies</a>
              <a href="#projects" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Vault</a>
            </div>
          </div>

          {/* Column 3: Contact & Assets */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: 'Outfit', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: '1.5rem' }}>Acquisition</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="/Guntas-Resume-Final.pdf" target="_blank" rel="noreferrer" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}><FileText size={14} /> Strategy Resume Deck</a>
              <a href="mailto:guntasmonga@gmail.com" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}><Mail size={14} /> Direct Strategy Email</a>
              <a href="https://wa.me/917707967589" target="_blank" rel="noreferrer" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}><MessageCircle size={14} /> WhatsApp Audit Call</a>
            </div>
          </div>

          {/* Column 4: Channels */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: 'Outfit', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: '1.5rem' }}>Social Networks</h4>
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
              <a 
                href="https://www.linkedin.com/in/guntas-monga-613b41285" 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: '#888', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--gold-primary)'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#888'}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="https://www.instagram.com/guntasmonga" 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: '#888', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--gold-primary)'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#888'}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2.5rem' }}>
          <p style={{ color: '#666', fontSize: '0.85rem', fontFamily: 'Inter' }}>
            © {new Date().getFullYear()} Guntas Monga. Designed for attention engineering. All rights reserved.
          </p>
          <a 
            href="#contact" 
            className="text-gold" 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.9rem' }}
          >
            Start Project <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
