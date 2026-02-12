import React from 'react';
import './FutureOS.css';

const topics = [
    {
        title: 'AI Integrated OS',
        desc: 'Operating systems will transition from being passive resource managers to proactive personal assistants with LLM integration.',
        icon: '🤖'
    },
    {
        title: 'Post-Quantum Security',
        desc: 'Next-gen OS cores will implement quantum-resistant encryption algorithms to secure data against future threats.',
        icon: '🔐'
    },
    {
        title: 'Web-first Runtime',
        desc: 'The line between the browser and OS continues to blur, with WASM and Cloud-native architectures leading the way.',
        icon: '🌐'
    }
];

const FutureOS: React.FC = () => {
    return (
        <section id="future" className="section-padding future-section">
            <div className="future-bg"></div>
            <div className="container">
                <h2 className="section-title">The Future of OS</h2>
                <p className="section-subtitle">What lies ahead in the next decade of system software?</p>

                <div className="future-grid">
                    {topics.map((t, i) => (
                        <div key={i} className="future-card reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
                            <div className="future-icon">{t.icon}</div>
                            <h3>{t.title}</h3>
                            <p>{t.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="final-cta reveal">
                    <button className="btn-primary">Download Complete Research PDF</button>
                </div>
            </div>
        </section>
    );
};

export default FutureOS;
