import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home2.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="floating-shapes">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>

      <div className="left-side glass-card animate-fade-up">
        <h1>IWB Technologies</h1>
        <p>Transforming e-waste into opportunity across Southern Africa.</p>
        <div className="cta-buttons">
          <Link to="/login" className="btn-primary glow">
            Sign In
          </Link>
          <Link to="/signup" className="btn-secondary glow">
            Register
          </Link>
        </div>
      </div>

      <div className="right-side animate-slide-in">
        <img
          src="/images/Logo (2).png"
          alt="logo"
          className="floating-img"
        />
      </div>
    </div>
  );
};

export default LandingPage;