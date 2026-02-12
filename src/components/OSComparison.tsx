import React, { useState } from 'react';
import './OSComparison.css';

const osData = [
    {
        name: 'Windows',
        logo: '🪟',
        family: 'Hybrid Kernel (NT)',
        usage: 'Desktops, Gaming, Corporate',
        kernel: 'Hybrid',
        architecture: 'x86, x86-64',
        languages: 'C/C++, C#, Assembly',
        marketShare: '32.4%',
        pros: ['Very User Friendly', 'Software compatibility', 'Extensive hardware support'],
        color: '#0078D4'
    },
    {
        name: 'Linux',
        logo: '🐧',
        family: 'Monolithic (Modular)',
        usage: 'Servers, Embedded, Developers',
        kernel: 'Monolithic',
        architecture: 'x86, x86-64, ARM, PowerPC',
        languages: 'C, C++, Bash, Python',
        marketShare: '1.93%',
        pros: ['Open Source', 'Security (SELinux)', 'Infinite customization'],
        color: '#FCC624'
    },
    {
        name: 'macOS',
        logo: '🍎',
        family: 'Hybrid (XNU)',
        usage: 'Creative, Mobile Dev, Consumer',
        kernel: 'Hybrid (XNU)',
        architecture: '68k, PowerPC, x86-64, ARM',
        languages: 'C/C++, Swift, Objective-C',
        marketShare: '12.37%',
        pros: ['Very User Friendly', 'Ecosystem integration', 'Hardware optimization'],
        color: '#FFFFFF'
    }
];

const OSComparison: React.FC = () => {
    const [activeOS, setActiveOS] = useState<string | null>(null);

    return (
        <section id="comparison" className="section-padding comparison-section">
            <div className="container">
                <h2 className="section-title reveal">الثلاثة الكبار</h2>
                <p className="section-subtitle reveal">مقارنة أنظمة التشغيل الرئيسية وحالات استخدامها.</p>

                <div className="os-cards">
                    {osData.map(os => (
                        <div
                            key={os.name}
                            className={`os-card glass-effect ${activeOS === os.name ? 'expanded' : ''}`}
                            onClick={() => setActiveOS(activeOS === os.name ? null : os.name)}
                        >
                            <div className="os-main">
                                <div className="os-logo" style={{ color: os.color }}>{os.logo}</div>
                                <h3>{os.name}</h3>
                                <div className="expand-hint">{activeOS === os.name ? 'إغلاق' : 'معرفة المزيد'}</div>
                            </div>

                            <div className="os-details">
                                <div className="detail-item">
                                    <strong>العائلة:</strong> {os.family}
                                </div>
                                <div className="detail-item">
                                    <strong>النواة:</strong> {os.kernel}
                                </div>
                                <div className="detail-item">
                                    <strong>المعمارية:</strong> {os.architecture}
                                </div>
                                <div className="detail-item">
                                    <strong>اللغات:</strong> {os.languages}
                                </div>
                                <div className="detail-item">
                                    <strong>حصة السوق:</strong> {os.marketShare}
                                </div>
                                <div className="detail-item">
                                    <strong>الأفضل لـ:</strong> {os.usage}
                                </div>
                                <div className="os-pros">
                                    <strong>نقاط القوة:</strong>
                                    <ul>
                                        {os.pros.map(p => <li key={p}>{p}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OSComparison;
