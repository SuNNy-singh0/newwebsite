import React, { useEffect, useState } from 'react';
import './Partner.css';

const GRID_SIZE = 10;

const Partner = () => {
  const [dissolve, setDissolve] = useState(false);

  useEffect(() => {
    console.log('Component mounted, starting timer...');
    const timer = setTimeout(() => {
      console.log('Setting dissolve to true!');
      setDissolve(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  console.log('Render - dissolve state:', dissolve);

  // Generate tiles
  const tiles = [];
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      const index = row * GRID_SIZE + col;
      const delay = ((row + col) / (GRID_SIZE * 2 - 2)) * 1.2;
      
      tiles.push(
        <div
          key={index}
          className={`dissolve-tile${dissolve ? ' dissolve' : ''}`}
          style={{
            // Use a solid color first to test
           
            // Then try your image
            backgroundImage: `url('/old.png')`,
            backgroundPosition: `${-col * 10}% ${-row * 10}%`,
            backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
  }

  return (
    <div className="promo-banner">
      <div className="promo-text">
        <h1>Modernize Your Property. Maximize Your Rent.</h1>
        <p>We renovate old apartments into beautiful, rentable homes.</p>
        <button>Partner With Us</button>
      </div>

      <div className="promo-animation">
        <img
          src="/tmluxe.png"
          alt="Modern Apartment"
          className="new-image-under"
        />
        <div className="dissolve-grid">
          {tiles}
        </div>
      </div>
    </div>
  );
};

export default Partner;