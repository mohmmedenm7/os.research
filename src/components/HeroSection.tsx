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
                    أنظمة التشغيل
                </h1>
                <p className="hero-subtitle reveal active">
                    بحث شامل في معمارية أنظمة التشغيل، معمارية الحاسوب، وهندسة البرمجيات.
                    <br /><small style={{ opacity: 0.7, fontSize: '0.9rem' }}>المجموعة 9: أحمد الصاوي • محمد أبوبكر • محمد عيسى</small>
                </p>

                <div className="hero-actions reveal active">
                    <button className="btn-primary" onClick={onEnter}>
                        ادخل إلى النظام
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
                <span>مرر للأسفل للاستكشاف</span>
            </div>
        </section>
    );
};

export default HeroSection;
