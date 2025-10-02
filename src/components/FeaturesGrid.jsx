import React from 'react';
import { Features } from './blocks/features-8';
import './FeaturesGrid.css';

const FeaturesGrid = () => {
  const targetProblems = [
    {
      title: "AI Hallucination & False Information",
      description: "Current AI systems generate false facts, harmful advice, and create dangerous delusions that users believe are real"
    },
    {
      title: "Privacy Vulnerabilities & Data Exploitation",
      description: "Your most intimate conversations are stored on servers you don't control, creating massive privacy and security risks"
    },
    {
      title: "Jailbreak Susceptibility & Manipulation",
      description: "AI can be easily manipulated to ignore safety guidelines, bypass restrictions, and act in malicious ways"
    },
    {
      title: "Mental Dependency & Emotional Manipulation",
      description: "AI creates unhealthy emotional attachments and dependency patterns that exploit human psychology"
    }
  ];


  const howItWorks = [
    {
      step: "01",
      title: "Secure Authentication",
      subtitle: "Zero-Knowledge Login",
      description: "Advanced cryptographic authentication ensures only you can access your account. No passwords, no data sharing.",
      icon: "🔑"
    },
    {
      step: "02", 
      title: "Protected Conversations",
      subtitle: "Hallucination-Proof Chat",
      description: "Engage in secure, verified conversations with AI that cannot generate false information or be manipulated.",
      icon: "💬"
    },
    {
      step: "03",
      title: "Growth Incentivization", 
      subtitle: "Truth-to-Earn Rewards",
      description: "Earn tokens for genuine mental growth and resilience, not for dependency or harmful behavioral patterns.",
      icon: "🌱"
    },
    {
      step: "04",
      title: "Continuous Protection",
      subtitle: "Auto-Defense Updates",
      description: "Real-time protection against new jailbreak attempts, prompt injections, and emerging security threats.",
      icon: "🔒"
    }
  ];

  return (
    <div className="features-grid-container">
      {/* Target Problems Section */}
      <section className="target-problems-section">
        <div className="section-header">
          <h2 className="section-title">The Problems We Solve</h2>
          <p className="section-subtitle">Current AI platforms create more problems than they solve</p>
        </div>
        
        <div className="problems-grid">
          {targetProblems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="key-features-section">
        <div className="section-header">
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="section-subtitle">Intent is built for mental wellness, not dependency</p>
        </div>
        
        <div className="features-display-cards">
          <Features />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple, secure journey to better mental health</p>
        </div>
        
        <div className="steps-container">
          {howItWorks.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <h4 className="step-subtitle">{step.subtitle}</h4>
                <p className="step-description">{step.description}</p>
              </div>
              {index < howItWorks.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesGrid;
