import React from 'react';
import './ChatMockups.css';

const ChatMockups = ({ onBack }) => {
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
      choices: ["Break it down", "Just breathe with me"]
    },
    {
      id: 5,
      title: "Depression",
      userMessage: "I think I'm depressed. Everything feels flat.",
      intentResponse: "Thank you for trusting me with that.\nI won't rush you with tips or silver linings.\n\nWould it help to talk through what your hardest moment in the day looks like,\nor would you rather I just stay here quietly until you're ready?",
      choices: ["Talk through it", "Stay quietly"]
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
      {onBack && (
        <button className="mockups-back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Intent
        </button>
      )}
      
      <div className="mockups-header">
        <h2 className="mockups-title">How Intent Listens</h2>
        <p className="mockups-subtitle">Real conversations with our emotionally-aligned AI</p>
      </div>

      <div className="chat-examples-grid">
        {chatExamples.map((example) => (
          <div key={example.id} className="chat-mockup">
            <div className="mockup-header">
              <div className="mockup-logo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="mockup-title">{example.title}</span>
            </div>

            <div className="mockup-chat">
              {/* User Message */}
              <div className="mockup-message user">
                <div className="mockup-message-content">
                  <div className="mockup-message-text">{example.userMessage}</div>
                  <div className="mockup-timestamp">2:14 PM</div>
                </div>
              </div>

              {/* Intent Response */}
              <div className="mockup-message intent">
                <div className="mockup-message-content">
                  <div className="mockup-message-text">
                    {example.intentResponse.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < example.intentResponse.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  {example.choices.length > 0 && (
                    <div className="mockup-choices">
                      {example.choices.map((choice, index) => (
                        <button key={index} className="mockup-choice-button">
                          {choice}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="mockup-timestamp">2:14 PM</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mockups-footer">
        <p className="mockups-description">
          Intent doesn't rush to fix or solve. It listens, understands, and offers choices.
          <br />
          <strong>Presence over performance.</strong>
        </p>
      </div>
    </div>
  );
};

export default ChatMockups;
