// BookingSteps.jsx
import React from "react";
import "./BookingSteps.css";

const steps = [
  {
    title: "Select Property",
    desc: "Browse and select your preferred property from our listings.",
    icon: "🏠",
   
  },
  {
    title: "Choose Date and Enter Data",
    desc: "Pick your dates and provide your booking details securely.",
    icon: "📅",
     down:'down'
  },
  {
    title: "Upload Your Photo",
    desc: "Upload a photo for verification and a personalized experience.",
    icon: "📷",
    
  },
  {
    title: "Make Payment",
    desc: "Pay securely and receive instant booking confirmation.",
    icon: "💳",
     down:'down'
  },
];

const BookingSteps = () => (
  <div className="booking-steps-container">
    <h2 className="booking-steps-title">How it works</h2>
    <p className="booking-steps-subtitle">
      Book your stay in 4 easy steps using our seamless online process.
    </p>
    <div className="booking-steps-flow">
      {steps.map((step, idx) => (
        <div className={`booking-step ${step.down}`} key={step.title}>
          <div className="booking-step-icon">{step.icon}</div>
          <div className="booking-step-content">
            <h3 className="booking-step-title">{step.title}</h3>
            <p className="booking-step-desc">{step.desc}</p>
          </div>
          {idx < steps.length - 1 && (
            <div className="booking-step-dotted-line" />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default BookingSteps;