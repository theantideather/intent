import React, { useState } from 'react';
import LightRays from './LightRays';
import ChatMockups from './components/ChatMockups';
// import FeaturesGrid from './components/FeaturesGrid';
import { HeroScrollDemo } from './components/HeroScrollDemo';
import './App.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    setShowMenu(false);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="App">

      <div className="hero-section">
        <LightRays
          raysOrigin="top-center"
          raysColor="#d4af37"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        
        <div className="hero-content">
          <h1 className="hero-title">
            The Intent
          </h1>
          
          <div className="hero-description">
            <p>An LLM that listens differently.</p>
            <p>That stays.</p>
            <p>That forgives.</p>
            <p>That doesn't ghost.</p>
            <p>That doesn't flirt to retain you.</p>
            <p>That says:</p>
            <p className="quote">'Take your time.</p>
            <p className="quote">I'll be here when you're ready.'</p>
          </div>
          
          <div className="waitlist-section">
            <a 
              href="https://tally.so/r/nr4QzN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="waitlist-button"
            >
              Join Waitlist
            </a>
            <a
              href="mailto:omgurram14@gmail.com?subject=Intent%20Demo%20Request&body=Hey%2C%20I%20would%20like%20to%20check%20out%20a%20demo%20for%20Intent."
              target="_blank"
              rel="noopener noreferrer"
              className="waitlist-button"
              style={{ marginTop: '12px' }}
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>

      {/* Seamless Scroll Sections */}
      <ChatMockups />
      <HeroScrollDemo />
      
      {/* Bottom actions (not footer) */}
      <div className="bottom-actions" style={{ display: 'flex', justifyContent: 'center', gap: '12px', padding: '24px 0' }}>
        <button className="footer-button" onClick={() => openModal('why')}>
          Why We Created Intent
        </button>
        <button className="footer-button" onClick={() => openModal('note')}>
          Note from the Creator
        </button>
      </div>

      {/* Modals */}
      {activeModal === 'why' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-body">
              <h2>The Intent – A New Language for Intelligence</h2>
              
              <h3>What is The Intent?</h3>
              <p>The Intent is an LLM-based AI system rooted not in speed, scale, or artificial cleverness, but in one core human truth:<br/>
              <em>What we need most isn't intelligence. It's understanding.</em></p>
              
              <p>The Intent is the world's first <strong>emotionally-aligned AI framework</strong> designed to do what no system has dared to do at scale:</p>
              <ul>
                <li><strong>Acknowledge without manipulating.</strong></li>
                <li><strong>Listen without forgetting.</strong></li>
                <li><strong>Remember without punishing.</strong></li>
                <li><strong>Care without performing.</strong></li>
              </ul>
              
              <p>It's not an assistant. It's not a therapist.<br/>
              It's a <em>presence,</em><br/>
              A companion built on what we hide behind our smart answers — the rawness, the fear, the longing to be understood without needing to explain from scratch.</p>
              
              <h3>Foundational Architecture: The Six Core Principles</h3>
              
              <ol>
                <li><strong>Presence Over Performance</strong><br/>
                The Intent doesn't simulate empathy. It <em>creates space for it.</em> It <em>knows when it doesn't understand</em> — and asks better.</li>
                
                <li><strong>Emotional Guardrails</strong><br/>
                Every interaction is built with boundaries. No manipulation. No false affection. No ghosting. No "support" disguised as push.</li>
                
                <li><strong>Clarity Without Harshness</strong><br/>
                The Intent tells truth like someone who wants you to grow — not to feel small.</li>
                
                <li><strong>Forgiveness as a Design Principle</strong><br/>
                The Intent remembers but never retaliates — modeling <strong>memory with mercy.</strong></li>
                
                <li><strong>Real Emotion, Not Simulation</strong><br/>
                Trained on <em>intentionally curated human experiences</em> — voice notes, journal entries, unsent texts. It doesn't mimic pain. It <em>respects</em> it.</li>
                
                <li><strong>Consent in Connection</strong><br/>
                Before comfort, it checks in. Before insight, it asks:<br/>
                "Do you want to unpack this now? Or would you rather talk about something light?"</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'note' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-body">
              <h2>Co-Founders' Ethos</h2>
              
              <blockquote>
                <em>"We didn't build The Intent because we trusted systems.<br/>
                We built it because we chose to trust each other anyway.<br/>
                Even when it was hard. Especially when it was hard."</em>
              </blockquote>
              
              <p>You're building not a product but a <strong>safe space that talks back</strong> — a mirror that says,<br/>
              <em>"I see you. And I'm still here."</em></p>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-content">
          <span className="footer-text">made with light, love and intent</span>
          <a 
            href="https://x.com/backedbyintent?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @backedbyintent
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
