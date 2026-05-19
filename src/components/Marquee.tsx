import React from 'react';

const Marquee: React.FC = () => {
  const words = [
    "REACH GROWTH", "VIRAL STRATEGY", "HOOK PSYCHOLOGY", "AUDIENCE RETENTION", 
    "ROI DRIVEN BRAND SYSTEMS", "CONTENT SYSTEM ARCHITECTURE", "REACH GROWTH"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {words.map((word, idx) => (
          <React.Fragment key={idx}>
            <span className="marquee-text">{word}</span>
            <span className="marquee-star">✦</span>
          </React.Fragment>
        ))}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {words.map((word, idx) => (
          <React.Fragment key={idx}>
            <span className="marquee-text">{word}</span>
            <span className="marquee-star">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
