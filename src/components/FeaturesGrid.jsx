import React from 'react';
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

  const keyFeatures = [
    {
      title: "Advanced Hallucination Defense System",
      description: "Multi-layered verification prevents false information generation. Less than 2% hallucination rate with continuous monitoring and correction.",
      highlight: "Hallucination-Proof AI"
    },
    {
      title: "Zero-Knowledge Privacy Architecture",
      description: "End-to-end encrypted conversations with zero-knowledge proofs. We cannot see, store, or access your data - ever.",
      highlight: "True Privacy"
    },
    {
      title: "Jailbreak Immunization & Prompt Shielding",
      description: "Advanced prompt injection detection and recursive exploit prevention. Multiple layers of protection against manipulation attempts.",
      highlight: "Manipulation-Proof"
    },
    {
      title: "Local-First Deployment",
      description: "Complete local processing with no cloud dependencies. Your data never leaves your device, ensuring absolute privacy and security.",
      highlight: "100% Local"
    },
    {
      title: "Truth-to-Earn Token Economics",
      description: "Reward system that incentivizes genuine mental growth and resilience rather than dependency or harmful patterns.",
      highlight: "Growth Rewards"
    },
    {
      title: "Account Abstraction Security",
      description: "Smart contract-based wallet system with automated security protocols and flexible payment options.",
      highlight: "Secure Payments"
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
        
        <div className="features-grid">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-highlight">{feature.highlight}</div>
              </div>
            </div>
          ))}
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
