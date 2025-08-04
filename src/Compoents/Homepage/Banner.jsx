import React from 'react'
import "./Banner.css"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import StudentsModel from './StudentsModel.jsx';
function Banner() {
  return (
    <>
    <div className="comfortstay-main-container">
      <div className="comfortstay-options-column">
        <div className="comfortstay-option-box comfortstay-option-pg">
          <img src="/pg.webp" alt="TM Stay For PG" className="comfortstay-avatar-pg" />
          <div>
            <div className="comfortstay-title-pg">TM Stay</div>
            <div className="comfortstay-desc-pg">For PG</div>
          </div>
          <div className="comfortstay-arrow">&#8594;</div>
        </div>
        <div className="comfortstay-option-box comfortstay-option-coliving">
          <img src="/coliving.webp" alt="TM Hive For Co-living" className="comfortstay-avatar-coliving" />
          <div>
            <div className="comfortstay-title-coliving">TM Hive</div>
            <div className="comfortstay-desc-coliving">For Co-living</div>
          </div>
          <div className="comfortstay-arrow">&#8594;</div>
        </div>
        <div className="comfortstay-option-box comfortstay-option-luxury">
          <img src="/luxe.webp" alt="TM Hive For Luxury apartments" className="comfortstay-avatar-luxury" />
          <div>
            <div className="comfortstay-title-luxury">TM Hive</div>
            <div className="comfortstay-desc-luxury">For Luxury apartments</div>
          </div>
          <div className="comfortstay-arrow">&#8594;</div>
        </div>
      </div>
      <div className="comfortstay-right-main">
        <div className="comfortstay-heading">
          Where Comfort Meets Non-Judgmental Hospitality.
        </div>
        <div className="comfortstay-subhead">
          Co-ed. Girls-only. Boys-only. All types of residences available.
        </div>
        <div className="searchbar-container">
      <div className="searchbar-input-wrapper">
        <div className="searchbar-left">
          <div className="searchbar-texts">
            <p className="searchbar-title">Find your stay</p>
            <input
              type="text"
              className="searchbar-input"
              placeholder="Search your location"
            />
          </div>
          <span className="searchbar-icon">🔍</span>
        </div>
        <button className="searchbar-button">Search</button>
      </div>
    </div>
       
        {/* <img
          src="/main.png"
          alt="Student"
          className="comfortstay-main-student"
        /> */}
          <Canvas camera={{ position: [1, 2, 5], fov: 35 }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <StudentsModel />
        <OrbitControls />
      </Canvas>
      </div>
    </div>
    </>
  )
}

export default Banner