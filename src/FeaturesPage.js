import React from 'react';
import './FeaturesPage.css';

function FeaturesPage({ onBack }) {
  const features = [
    {
      title: "Delusions With Care",
      description: "Gentle reality anchoring without harsh confrontation"
    },
    {
      title: "Minimal Hallucinations", 
      description: "Truth-focused responses with source verification"
    },
    {
      title: "Dream to Pay / Truth to Earn",
      description: "Economic incentives aligned with psychological wellbeing"
    },
    {
      title: "Zero-Knowledge Privacy",
      description: "Cryptographic protection for all conversations"
    },
    {
      title: "Cryptographic Guardrails",
      description: "Mathematical guarantees for emotional safety"
    },
    {
      title: "Emotional Boundaries",
      description: "Clear limits that protect without isolating"
    },
    {
      title: "Consent in Connection",
      description: "Always asking before diving deep"
    },
    {
      title: "Memory With Mercy",
      description: "Remembering without retaliation"
    },
    {
      title: "Presence Over Performance",
      description: "Being there matters more than being clever"
    },
    {
      title: "Clarity Without Harshness",
      description: "Truth delivered with compassion"
    },
    {
      title: "Real Emotion, Not Simulation",
      description: "Authentic responses trained on human experiences"
    },
    {
      title: "Safe Space Sanctuary",
      description: "A digital environment that nurtures growth"
    },
    {
      title: "Wallet-Based Secure Login",
      description: "Your identity, your control"
    },
    {
      title: "Aligned Tokenomics",
      description: "Economics that reward psychological health"
    },
    {
      title: "Dependency Detection",
      description: "Recognizing and gently addressing unhealthy patterns"
    },
    {
      title: "Gentle Reality Anchoring",
      description: "Keeping you grounded without being controlling"
    }
  ];

  return (
    <div className="features-page">
      <div className="features-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <h1 className="features-title">The Intent Features</h1>
        <p className="features-subtitle">
          Sixteen principles that make The Intent different from any AI you've experienced
        </p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="features-footer">
        <p className="features-quote">
          "We didn't build The Intent because we trusted systems.<br/>
          We built it because we chose to trust each other anyway."
        </p>
      </div>
    </div>
  );
}

export default FeaturesPage;
