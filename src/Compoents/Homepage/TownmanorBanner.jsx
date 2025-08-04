import React, { useEffect, useRef } from 'react';

const TownmanorBanner = () => {
    const imageContainerRef = useRef(null);
    const gridOverlayRef = useRef(null);

    // --- Animation logic (untouched) ---
    useEffect(() => {
      const beforeImageUrl = '/old.png';
      const afterImageUrl = 'https://s3.ap-south-1.amazonaws.com/townamnor.ai/owner-images/1752838065543-image-1.png';
      const gridRows = 10;
      const gridCols = 10;
      const animationStartDelay = 1500;
      const staggerDelay = 35;

      const imageContainer = imageContainerRef.current;
      if (!imageContainer) return;

      const gridOverlay = document.createElement('div');
      gridOverlay.className = 'townmanor-premium-rental-grid-overlay';
      gridOverlayRef.current = gridOverlay;

      const fragment = document.createDocumentFragment();

      for (let i = 0; i < gridRows * gridCols; i++) {
        const tile = document.createElement('div');
        tile.className = 'townmanor-premium-rental-grid-tile';

        const col = i % gridCols;
        const row = Math.floor(i / gridCols);

        const bgPosX = (col / (gridCols - 1)) * 100;
        const bgPosY = (row / (gridRows - 1)) * 100;

        tile.style.backgroundImage = `url('${beforeImageUrl}')`;
        tile.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;

        fragment.appendChild(tile);
      }

      gridOverlay.appendChild(fragment);
      imageContainer.appendChild(gridOverlay);

      const animationTimer = setTimeout(() => {
        imageContainer.style.backgroundImage = `url('${afterImageUrl}')`;

        const tiles = gridOverlay.querySelectorAll('.townmanor-premium-rental-grid-tile');
        const shuffledIndices = Array.from(Array(tiles.length).keys()).sort(() => Math.random() - 0.5);

        shuffledIndices.forEach((index, i) => {
          const tile = tiles[index];
          tile.style.transitionDelay = `${i * staggerDelay}ms`;
          tile.style.opacity = '0';
        });

        const totalAnimationTime = (tiles.length * staggerDelay) + 800;
        setTimeout(() => {
          if (gridOverlay && gridOverlay.parentNode) {
            gridOverlay.remove();
          }
        }, totalAnimationTime);
      }, animationStartDelay);

      return () => {
        clearTimeout(animationTimer);
        if (gridOverlayRef.current && gridOverlayRef.current.parentNode) {
          gridOverlayRef.current.remove();
        }
      };
    }, []);

    return (
      <>
        <style>{`
          .townmanor-premium-rental-bg {
            background: #f7f9fb;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', sans-serif;
          }
          .townmanor-premium-rental-banner-main {
            display: flex;
            background: #fff;
            border-radius: 0.75rem;
            box-shadow: 0 2px 24px 0 rgba(0,0,0,0.06);
            max-width: 1200px;
            width: 100%;
            min-height: 600px;
            overflow: hidden;
          }
          .townmanor-premium-rental-left {
            flex: 1 1 0;
            padding: 64px 48px 64px 64px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #f7f9fb;
            position: relative;
          }
          .townmanor-premium-rental-divider {
            width: 1px;
            background: #e5e7eb;
            margin: 0 0;
          }
          .townmanor-premium-rental-right {
            flex: 1 1 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f7f9fb;
            padding: 48px;
          }
          .townmanor-premium-rental-image-transition-container {
            width: 420px;
            height: 420px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
            background-size: cover;
            background-position: center;
            position: relative;
          }
          .townmanor-premium-rental-grid-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: repeat(10, 1fr);
            pointer-events: none;
          }
          .townmanor-premium-rental-grid-tile {
            background-size: 1000% 1000%;
            opacity: 1;
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          /* --- Typography --- */
          .townmanor-premium-rental-subheading {
            color: #6b8fd6;
            font-size: 0.95rem;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
          }
          .townmanor-premium-rental-heading {
            font-size: 2.7rem;
            font-weight: 400;
            color: #222b3a;
            line-height: 1.15;
            margin-bottom: 2rem;
          }
          .townmanor-premium-rental-heading .highlight {
            color: #3973d6;
            font-weight: 500;
          }
          .townmanor-premium-rental-feature-list {
            margin-bottom: 2.5rem;
          }
          .townmanor-premium-rental-feature-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 1.2rem;
            font-size: 1.08rem;
            color: #3a4256;
          }
          .townmanor-premium-rental-feature-icon {
            background: #e6efff;
            color: #3973d6;
            border-radius: 50%;
            width: 2.2rem;
            height: 2.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            margin-top: 2px;
          }
          /* --- Buttons --- */
          .townmanor-premium-rental-btn-row {
            display: flex;
            gap: 1.2rem;
            margin-top: 2.5rem;
          }
          .townmanor-premium-rental-btn-primary {
            background: #3973d6;
            color: #fff;
            font-weight: 500;
            font-size: 1.08rem;
            padding: 0.9rem 2.2rem;
            border-radius: 0.6rem;
            border: none;
            cursor: pointer;
            transition: background 0.2s;
            box-shadow: 0 2px 8px 0 rgba(57,115,214,0.08);
          }
          .townmanor-premium-rental-btn-primary:hover {
            background: #265bb2;
          }
          .townmanor-premium-rental-btn-secondary {
            background: #fff;
            color: #222b3a;
            font-weight: 500;
            font-size: 1.08rem;
            padding: 0.9rem 2.2rem;
            border-radius: 0.6rem;
            border: 1.5px solid #e5e7eb;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            transition: background 0.2s, border 0.2s;
          }
          .townmanor-premium-rental-btn-secondary:hover {
            background: #f3f6fa;
            border-color: #cbd5e1;
          }
          .townmanor-premium-rental-btn-secondary .icon {
            font-size: 1.1rem;
          }
          @media (max-width: 1100px) {
            .townmanor-premium-rental-banner-main {
              flex-direction: column;
              min-height: unset;
            }
            .townmanor-premium-rental-right {
              padding: 32px;
            }
            .townmanor-premium-rental-image-transition-container {
              width: 100%;
              max-width: 400px;
              height: 320px;
            }
          }
          @media (max-width: 800px) {
            .townmanor-premium-rental-banner-main {
              flex-direction: column;
              min-height: unset;
            }
            .townmanor-premium-rental-left {
              padding: 32px 16px 32px 16px;
            }
            .townmanor-premium-rental-right {
              padding: 16px;
            }
            .townmanor-premium-rental-image-transition-container {
              width: 100%;
              max-width: 320px;
              height: 220px;
            }
          }
        `}</style>
        <div className="townmanor-premium-rental-bg">
          <div className="townmanor-premium-rental-banner-main">
            {/* Left */}
            <div className="townmanor-premium-rental-left">
              <div className="townmanor-premium-rental-subheading">
                PREMIUM PROPERTY SOLUTIONS
              </div>
              <div className="townmanor-premium-rental-heading">
                Elevate Your Property into a <span className="highlight">Premium Rental</span> with Townmanor
              </div>
              <div className="townmanor-premium-rental-feature-list">
                <div className="townmanor-premium-rental-feature-item">
                  <span className="townmanor-premium-rental-feature-icon">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <rect width="20" height="20" rx="4" fill="#e6efff"/>
                      <path d="M10 5.5l5 4.5v5a1 1 0 01-1 1h-2v-3H8v3H6a1 1 0 01-1-1v-5l5-4.5z" fill="#3973d6"/>
                    </svg>
                  </span>
                  <span>
                    Partner with us to design smart, stylish living spaces that exceed expectations.
                  </span>
                </div>
                <div className="townmanor-premium-rental-feature-item">
                  <span className="townmanor-premium-rental-feature-icon">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <rect width="20" height="20" rx="4" fill="#e6efff"/>
                      <path d="M10 5.5l5 4.5v5a1 1 0 01-1 1h-2v-3H8v3H6a1 1 0 01-1-1v-5l5-4.5z" fill="#3973d6"/>
                    </svg>
                  </span>
                  <span>
                    From transformation to tenant experience, we handle everything—seamlessly, together.
                  </span>
                </div>
              </div>
              <div className="townmanor-premium-rental-btn-row">
                <button className="townmanor-premium-rental-btn-primary">
                  Know More
                </button>
                <button className="townmanor-premium-rental-btn-secondary">
                  <span className="icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                      <circle cx="9" cy="9" r="8" stroke="#3973d6" strokeWidth="1.5"/>
                      <polygon points="7,6 13,9 7,12" fill="#3973d6"/>
                    </svg>
                  </span>
                  Watch Demo
                </button>
              </div>
            </div>
            {/* Divider */}
            <div className="townmanor-premium-rental-divider" />
            {/* Right */}
            <div className="townmanor-premium-rental-right">
              <div
                ref={imageContainerRef}
                className="townmanor-premium-rental-image-transition-container"
              >
                {/* Grid overlay handled by JS */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default TownmanorBanner;

