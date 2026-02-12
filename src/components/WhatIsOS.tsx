import React, { useEffect, useRef } from 'react';
import './WhatIsOS.css';

const layers = [
    { id: 'user', title: 'User', icon: '👤', description: 'Interacts with the system through input devices.' },
    { id: 'apps', title: 'Applications', icon: '📱', description: 'Web browsers, text editors, games, etc.' },
    { id: 'os', title: 'Operating System', icon: '⚙️', description: 'The software that manages hardware and software resources.' },
    { id: 'hardware', title: 'Hardware', icon: '🔌', description: 'CPU, RAM, Storage, and other physical components.' }
];

const WhatIsOS: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.2 });

        const items = document.querySelectorAll('.layer-item');
        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="what-is-os" className="section-padding layers-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What is an Operating System?</h2>
                    <p className="section-subtitle">A layered architecture bridging the gap between users and physical hardware.</p>
                    <div className="intro-text" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <p>
                            In computers, the operating system is the system that manages the computer's resources and acts as an intermediary
                            between the user and the computer's hardware components. An operating system is a collection of programs responsible
                            for managing the CPU, memory, controlling input and output devices, running applications, and providing a secure environment for them.
                        </p>
                    </div>
                </div>

                <div className="layers-container" ref={scrollRef}>
                    {layers.map((layer, index) => (
                        <div key={layer.id} className="layer-item" style={{ transitionDelay: `${index * 0.2}s` }}>
                            <div className="layer-icon">{layer.icon}</div>
                            <div className="layer-card glass-effect">
                                <h3>{layer.title}</h3>
                                <p>{layer.description}</p>
                            </div>
                            {index < layers.length - 1 && (
                                <div className="layer-connector">
                                    <div className="connector-line"></div>
                                    <div className="connector-arrow">⬇</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIsOS;
