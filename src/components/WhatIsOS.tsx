import React, { useEffect, useRef } from 'react';
import './WhatIsOS.css';

const layers = [
    { id: 'user', title: 'المستخدم', icon: '👤', description: 'يتفاعل مع النظام من خلال أجهزة الإدخال.' },
    { id: 'apps', title: 'التطبيقات', icon: '📱', description: 'متصفحات الويب، محررات النصوص، الألعاب، وغيرها.' },
    { id: 'os', title: 'نظام التشغيل', icon: '⚙️', description: 'البرنامج الذي يدير موارد الأجهزة والبرمجيات.' },
    { id: 'hardware', title: 'العتاد', icon: '🔌', description: 'المعالج، الذاكرة، التخزين، والمكونات المادية الأخرى.' }
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
                    <h2 className="section-title">ما هو نظام التشغيل؟</h2>
                    <p className="section-subtitle">معمارية طبقية تربط بين المستخدمين والعتاد المادي.</p>
                    <div className="intro-text" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'right', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <p>
                            في أجهزة الكمبيوتر، نظام التشغيل هو النظام الذي يدير موارد الكمبيوتر ويعمل كوسيط
                            بين المستخدم ومكونات أجهزة الكمبيوتر. نظام التشغيل هو مجموعة من البرامج المسؤولة
                            عن إدارة المعالج والذاكرة والتحكم في أجهزة الإدخال والإخراج وتشغيل التطبيقات وتوفير بيئة آمنة لها.
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
