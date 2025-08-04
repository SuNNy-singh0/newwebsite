
import React from "react";
import "./StayMemories.css";

const StayMemories = () => (
  <div className="staymem-container">
    <h2 className="staymem-title">
      Turn Simple Stays into <br />
      <span className="staymem-highlight">Lasting Moments</span>
    </h2>
    <p className="staymem-subtitle">
      Stay with us, and make memories that linger long after checkout
    </p>
    <div className="staymem-cards">
      <div className="staymem-card">
        <img
          src="https://s3.ap-south-1.amazonaws.com/townamnor.ai/owner-images/1753351125907-download%20%289%29.png"
          alt="Couple on mountain"
          className="staymem-img"
        />
      </div>
      <div className="staymem-card midcard">
        <img
          src="https://s3.ap-south-1.amazonaws.com/townamnor.ai/owner-images/1753350537828-download%20%287%29.png"
          alt="Woman by lake"
          className="staymem-img"
        />
      </div>
      <div className="staymem-card">
        <img
          src="https://s3.ap-south-1.amazonaws.com/townamnor.ai/owner-images/1752838065543-image-1.png"
          alt="Girl in autumn"
          className="staymem-img"
        />
      </div>
    </div>
    {/* <div className="staymem-stats">
      <div className="staymem-stat">
        <span className="staymem-icon">🏙️</span>
        <span className="staymem-statnum">15+</span>
        <span className="staymem-statlabel">Cities</span>
      </div>
      <div className="staymem-stat">
        <span className="staymem-icon">🏠</span>
        <span className="staymem-statnum">450+</span>
        <span className="staymem-statlabel">Residence</span>
      </div>
      <div className="staymem-stat">
        <span className="staymem-icon">🛏️</span>
        <span className="staymem-statnum">40000+</span>
        <span className="staymem-statlabel">Rooms</span>
      </div>
    </div> */}
  </div>
);

export default StayMemories;