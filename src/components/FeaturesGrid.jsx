import React from 'react';
import './FeaturesGrid.css';

const FeaturesGrid = () => {
  const targetProblems = [
    {
      icon: "🧠",
      title: "AI Psychosis & Mental Dependency",
      description: "Current AI creates unhealthy emotional attachments and dependency patterns"
    },
    {
      icon: "🔓",
      title: "Privacy Breaches",
      description: "Your most intimate conversations stored on servers you don't control"
    },
    {
      icon: "🎭",
      title: "Hallucinations",
      description: "AI makes up facts, gives harmful advice, and creates false memories"
    },
    {
      icon: "⚡",
      title: "Jailbreaks & Recursive Exploits",
      description: "AI can be manipulated to ignore safety guidelines and act maliciously"
    }
  ];

  const keyFeatures = [
    {
      icon: "🔐",
      title: "End-to-End Encrypted, Zero-Knowledge Login",
      description: "Only you can access your chats. We can't see, store, or share your conversations.",
      highlight: "Your secrets stay secret"
    },
    {
      icon: "💝",
      title: "Specialized Emotionally-Aligned AI",
      description: "Less than 2% hallucination rate. Trained specifically for emotional support and mental wellness.",
      highlight: "<2% hallucination rate"
    },
    {
      icon: "🛡️",
      title: "Automated Jailbreak Immunization",
      description: "Built-in prompt shields and recursion protection prevent manipulation attempts.",
      highlight: "Auto-protection enabled"
    },
    {
      icon: "💰",
      title: "Truth to Earn & Dream to Pay",
      description: "Token economics that reward real growth and mental resilience, not dependency.",
      highlight: "Earn for growth"
    },
    {
      icon: "🏠",
      title: "Local Deployment",
      description: "No cloud, no leaks. All data stays on your device. Complete privacy control.",
      highlight: "100% local"
    },
    {
      icon: "💳",
      title: "Account Abstraction Wallets",
      description: "Flexible, secure payments with smart contract automation for seamless transactions.",
      highlight: "Smart payments"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Authenticate",
      subtitle: "zkLogin/Wallet",
      description: "Never share your secrets. Zero-knowledge authentication ensures only you can access your account.",
      icon: "🔑"
    },
    {
      step: "02", 
      title: "Chat",
      subtitle: "Intimate & Encrypted",
      description: "Have deep, meaningful conversations with AI that understands emotions and provides genuine support.",
      icon: "💬"
    },
    {
      step: "03",
      title: "Incentivization", 
      subtitle: "Earn for Growth",
      description: "Get rewarded with tokens for real mental growth, not for dependency or unhealthy patterns.",
      icon: "🌱"
    },
    {
      step: "04",
      title: "Protected",
      subtitle: "Auto-Updates",
      description: "Continuously updated guard against emerging threats, jailbreaks, and new attack vectors.",
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
          <div className="feature-emojis">9️⃣4️⃣0️⃣5️⃣6️⃣5️⃣9️⃣9️⃣2️⃣4️⃣</div>
        </div>
        
        <div className="features-grid">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
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
