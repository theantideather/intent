import React, { useState } from 'react';
import './SecureReveal.css';

const SecureReveal = ({ placeholder = "Type your secure message...", onSend }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="secure-reveal-container">
      <form onSubmit={handleSubmit} className="secure-reveal-form">
        <div className={`secure-reveal-wrapper ${isFocused ? 'focused' : ''}`}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="secure-reveal-input"
          />
          <div className="secure-reveal-placeholder">
            {placeholder.split('').map((char, index) => (
              <span
                key={index}
                className={`placeholder-char ${inputValue.length > index ? 'vanish' : ''}`}
                style={{ '--delay': `${index * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </div>
          <button
            type="submit"
            className={`secure-reveal-send-button ${inputValue.trim() ? 'active' : ''}`}
            disabled={!inputValue.trim()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecureReveal;
