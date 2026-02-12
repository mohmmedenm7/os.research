import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
    onEnter: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEnter }) => {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="hero-grid"></div>
                <div className="hero-glow"></div>
            </div>

            <div className="container hero-content">
                <div className="badge reveal active">University of Science and Technology</div>
                <h1 className="hero-title reveal active">
                    Operating Systems
                    <span className="text-gradient"> The Brain Between You and the Machine</span>
                </h1>
                <p className="hero-subtitle reveal active">
                    A comprehensive research on Operating System Architecture, Computer Architecture, and Software Engineering.
                    <br /><small style={{ opacity: 0.7, fontSize: '0.9rem' }}>Group 9: Ahmed Elsawi • Mohamed Abubaker • Mohammed Eisa</small>
                </p>

                <div className="hero-actions reveal active">
                    <button className="btn-primary" onClick={onEnter}>
                        Enter the System
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll down to explore</span>
            </div>
        </section>
    );
};

export default HeroSection;
