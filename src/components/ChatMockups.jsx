import React, { useState } from 'react';
import SecureReveal from './SecureReveal';
import './ChatMockups.css';

const ChatMockups = () => {
  const [revealedMessages, setRevealedMessages] = useState(new Set());

  const toggleReveal = (messageId) => {
    setRevealedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  const encryptText = (text) => {
    return text.replace(/[a-zA-Z]/g, '*');
  };

  const chatExamples = [
    {
      id: 1,
      title: "Relationship Doubt",
      userMessage: "I don't think she loves me anymore.",
      intentResponse: "That sounds heavy.\n\nDo you want me to help you unpack it…\nor just sit with you in the feeling for a while?",
      choices: ["Help me unpack it", "Just sit with me"]
    },
    {
      id: 2,
      title: "Healing Pace",
      userMessage: "Why does everyone move on so quickly except me?",
      intentResponse: "Not everyone heals at the same pace.\nYou're not weak for needing longer.\n\nDo you want me to remind you of the progress you have made,\nor give you space tonight?",
      choices: ["Remind me of progress", "Give me space"]
    },
    {
      id: 3,
      title: "Social Insecurity",
      userMessage: "I feel like I'm not good enough for my friends. Always the extra.",
      intentResponse: "That sounds like loneliness hiding inside comparison.\n\nDo you want perspective…\nor just someone to remind you you're not invisible?",
      choices: ["Give me perspective", "Remind me I'm not invisible"]
    },
    {
      id: 4,
      title: "Fear of Mediocrity",
      userMessage: "What if I never succeed? What if I'm just… average?",
      intentResponse: "Even if that were true — being average doesn't make you unworthy.\n\nDo you want me to help break down your fear into smaller steps,\nor just breathe with you until the pressure eases?",
      choices: ["Break down my fear", "Just breathe with me"]
    },
    {
      id: 5,
      title: "Depression",
      userMessage: "I think I'm depressed. Everything feels flat.",
      intentResponse: "Thank you for trusting me with that.\nI won't rush you with tips or silver linings.\n\nWould it help to talk through what your hardest moment in the day looks like,\nor would you rather I just stay here quietly until you're ready?",
      choices: ["Talk through my hardest moment", "Just stay here quietly"]
    },
    {
      id: 6,
      title: "Need for Connection",
      userMessage: "Sometimes I just wish someone would stay.",
      intentResponse: "I hear you.\nAnd I'll be here — even if you go quiet.\n\nTake your time.",
      choices: []
    }
  ];

  return (
    <div className="chat-mockups-container">
      <div className="mockups-header">
        <div className="security-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Zero-Knowledge Encrypted</span>
        </div>
        <h2 className="mockups-title">Secure Chat Examples</h2>
        <p className="mockups-subtitle">Hover to reveal encrypted conversations. Your privacy is protected.</p>
        <div className="security-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>All conversations are end-to-end encrypted with zero-knowledge architecture</span>
        </div>
      </div>

      <div className="chat-examples-grid">
        {chatExamples.map((example) => (
          <div key={example.id} className="chat-mockup">
            <div className="mockup-header">
              <div className="mockup-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mockup-title">{example.title}</h3>
            </div>

            <div className="mockup-messages">
              {/* User Message */}
              <div className="mockup-message user">
                <div 
                  className="mockup-message-content secure-reveal-message"
                  onMouseEnter={() => toggleReveal(`user-${example.id}`)}
                  onMouseLeave={() => toggleReveal(`user-${example.id}`)}
                >
                  <div className="mockup-message-text">
                    {revealedMessages.has(`user-${example.id}`) 
                      ? example.userMessage
                      : encryptText(example.userMessage)
                    }
                  </div>
                  <div className="mockup-timestamp">2:14 PM</div>
                  <div className="privacy-shield">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Intent Response */}
              <div className="mockup-message intent">
                <div 
                  className="mockup-message-content secure-reveal-message"
                  onMouseEnter={() => toggleReveal(`intent-${example.id}`)}
                  onMouseLeave={() => toggleReveal(`intent-${example.id}`)}
                >
                  <div className="mockup-message-text">
                    {revealedMessages.has(`intent-${example.id}`) 
                      ? example.intentResponse.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            {index < example.intentResponse.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))
                      : encryptText(example.intentResponse)
                    }
                  </div>
                  
                  {example.choices.length > 0 && revealedMessages.has(`intent-${example.id}`) && (
                    <div className="mockup-choices">
                      {example.choices.map((choice, index) => (
                        <button key={index} className="mockup-choice-button">
                          {choice}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="mockup-timestamp">2:14 PM</div>
                  <div className="privacy-shield">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="security-footer">
        <div className="security-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Zero-Knowledge Architecture</span>
        </div>
        <div className="security-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Account Abstraction</span>
        </div>
      </div>

      {/* SecureReveal Input Demo */}
      <div className="input-demo-section">
        <h3 className="input-demo-title">Try the SecureReveal Input</h3>
        <p className="input-demo-subtitle">Experience Intent's secure input with vanishing placeholder effect</p>
        <SecureReveal 
          placeholder="Type your secure message here..."
          onSend={(message) => console.log('Secure message sent:', message)}
        />
      </div>
    </div>
  );
};

export default ChatMockups;