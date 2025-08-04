import React from "react";
import "./HowWeWorkReplica.css";

const steps = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Search Food",
    desc: "Search Food Available of website",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 10h8M8 14h6" />
      </svg>
    ),
    title: "Select Order",
    desc: "Select your order and fill your cart.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 12h18M9 16l3 3 3-3" />
      </svg>
    ),
    title: "Take food",
    desc: "Restaurant send a delivery boy to you with your favorite food",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="10" width="16" height="8" rx="4" />
        <circle cx="8" cy="16" r="1" />
        <circle cx="16" cy="16" r="1" />
      </svg>
    ),
    title: "Enjoy Food",
    desc: "Receive your order and eat it anywhere.",
  },
];

const HowWeWorkReplica = () => (
  <div className="howweworkreplica-container">
    <h2 className="howweworkreplica-title">
      HOW WE <br /> WORK?
    </h2>
    <div className="howweworkreplica-steps">
      {steps.map((step, idx) => (
        <div className="howweworkreplica-step" key={idx}>
          <div className="howweworkreplica-step-iconwrap">
            {step.icon}
          </div>
          <div className="howweworkreplica-step-number">
            {String(idx + 1).padStart(2, "0")}
          </div>
          <div className="howweworkreplica-step-content">
            <div className="howweworkreplica-step-title">
              {step.title}
            </div>
            <div className="howweworkreplica-step-desc">
              {step.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HowWeWorkReplica;