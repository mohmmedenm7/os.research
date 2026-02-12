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
                <h2 className="section-title">The Big Three</h2>
                <p className="section-subtitle">Comparison of major Operating Systems and their use cases.</p>

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
                                <div className="expand-hint">{activeOS === os.name ? 'Collapse' : 'Learn more'}</div>
                            </div>

                            <div className="os-details">
                                <div className="detail-item">
                                    <strong>Family:</strong> {os.family}
                                </div>
                                <div className="detail-item">
                                    <strong>Kernel:</strong> {os.kernel}
                                </div>
                                <div className="detail-item">
                                    <strong>Architecture:</strong> {os.architecture}
                                </div>
                                <div className="detail-item">
                                    <strong>Languages:</strong> {os.languages}
                                </div>
                                <div className="detail-item">
                                    <strong>Market Share:</strong> {os.marketShare}
                                </div>
                                <div className="detail-item">
                                    <strong>Best for:</strong> {os.usage}
                                </div>
                                <div className="os-pros">
                                    <strong>Key Strengths:</strong>
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
