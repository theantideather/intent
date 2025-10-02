import React from 'react';
import { Features } from './blocks/features-8';

const FeaturesGrid = () => {
  return (
    <div className="features-grid-container">
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
    </div>
  );
};

export default FeaturesGrid;
