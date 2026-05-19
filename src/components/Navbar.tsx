import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaderActive, setIsLoaderActive] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Metrics", href: "#metrics" },
    { label: "Services", href: "#services" },
    { label: "System", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "Vault", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  // Real-Time Scroll Spy to track active viewport sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset for precision triggers

      for (const link of links) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cinematic progressive "lazy loading" progress bar on click
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    setIsLoaderActive(true);
    setLoadingProgress(15);

    // Dynamic charging animation
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 20;
      });
    }, 40);

    setTimeout(() => {
      clearInterval(interval);
      setLoadingProgress(100);

      // Smooth scroll target using exposed Lenis instance if available
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(targetElement, { 
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // match premium ease curve
          offset: -80 // prevent header from overlaying title
        });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(id);

      setTimeout(() => {
        setIsLoaderActive(false);
        setLoadingProgress(0);
      }, 250);
    }, 350);
  };

  return (
    <>
      {/* High-Tech Cinematic Lazy Loading Top Indicator Bar */}
      {isLoaderActive && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '3px',
            width: `${loadingProgress}%`,
            background: 'linear-gradient(90deg, var(--gold-primary) 0%, var(--accent-gold-light) 50%, var(--gold-primary) 100%)',
            boxShadow: '0 0 15px rgba(191, 149, 63, 0.9), 0 0 5px rgba(191, 149, 63, 0.6)',
            zIndex: 9999999,
            transition: 'width 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        />
      )}

      {/* Header Container */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        style={{
          position: 'fixed',
          top: '20px',
          left: 0,
          right: 0,
          margin: '0 auto',
          zIndex: 999,
          width: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none'
        }}
      >
        {/* Centered Unified Glass Capsule */}
        <div 
          className="navbar-capsule"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(5, 5, 5, 0.75)',
            backdropFilter: 'blur(20px)',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)',
            pointerEvents: 'auto'
          }}
        >
          {/* Brand / Logo Indicator */}
          <div 
            className="navbar-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              paddingLeft: '0.5rem'
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
            <span style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>
              GUNTAS MONGA
            </span>
          </div>

          {/* Vertical Separator */}
          <div className="navbar-divider" style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.15)' }} />

          {/* Desktop & Mobile Responsive Links */}
          <div 
            className="navbar-links"
            style={{
              display: 'flex',
              gap: '0.3rem',
              alignItems: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            {links.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#000' : '#aaa',
                    fontFamily: 'Outfit',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '100px',
                    background: isActive ? 'linear-gradient(135deg, var(--accent-gold-light) 0%, var(--accent-gold) 100%)' : 'transparent',
                    boxShadow: isActive ? '0 4px 12px rgba(191, 149, 63, 0.35)' : 'none'
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#aaa';
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </motion.header>

      <style>
        {`
          /* Responsive Scrollable Tab Bar on Mobile Viewports */
          @media (max-width: 768px) {
            .navbar-logo {
              display: none !important;
            }
            .navbar-divider {
              display: none !important;
            }
            .navbar-capsule {
              padding: 0.4rem 0.6rem !important;
              max-width: 95vw !important;
              gap: 0 !important;
            }
            .navbar-links {
              overflow-x: auto !important;
              scrollbar-width: none !important; /* Firefox */
              width: 100% !important;
              max-width: 92vw !important;
              padding: 0 0.2rem !important;
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
            }
            .navbar-links::-webkit-scrollbar {
              display: none !important; /* Safari and Chrome */
            }
            .navbar-links a {
              padding: 0.4rem 0.7rem !important;
              font-size: 0.78rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
