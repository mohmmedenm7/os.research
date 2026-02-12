import React from 'react';
import './KernelArchitecture.css';

const architectures = [
    {
        type: 'Monolithic',
        description: 'All OS services run in kernel space. Fast execution but a failure in any component may lead to system crashes.',
        features: ['Single Address Space', 'High Performance', 'Difficult Maintenance', 'Linux, Traditional Unix'],
        color: '#0078D4'
    },
    {
        type: 'Microkernel',
        description: 'Only essential services in kernel. Rest run in user space. Higher security and better system stability.',
        features: ['Minimal Core', 'User-Space Services', 'Message Passing', 'Minix, QNX'],
        color: '#10B981'
    },
    {
        type: 'Hybrid',
        description: 'Combines monolithic and microkernel designs. Runs some services in kernel mode for performance, others in user space for stability.',
        features: ['Balanced Design', 'Performance + Security', 'Flexible Architecture', 'Windows NT, macOS (XNU)'],
        color: '#F59E0B'
    }
];

const KernelArchitecture: React.FC = () => {
    return (
        <section id="kernel" className="section-padding kernel-section">
            <div className="container">
                <h2 className="section-title">Kernel Architecture</h2>
                <p className="section-subtitle">Comparing the core design philosophies of Modern OS.</p>

                <div className="kernel-grid">
                    {architectures.map((arch, index) => (
                        <div key={arch.type} className="kernel-card glass-effect reveal" style={{ transitionDelay: `${index * 0.2}s` }}>
                            <div className="arch-header">
                                <h3>{arch.type}</h3>
                                <div className="arch-icon">
                                    {arch.type === 'Monolithic' ? '📦' : arch.type === 'Microkernel' ? '🧩' : '🚀'}
                                </div>
                            </div>
                            <p className="arch-desc">{arch.description}</p>
                            <ul className="arch-features">
                                {arch.features.map(f => <li key={f}>{f}</li>)}
                            </ul>
                            <div className="arch-visual">
                                <div className={`viz-box ${arch.type.toLowerCase()}`}>
                                    <div className="k-space">Kernel</div>
                                    <div className="u-space">User</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KernelArchitecture;
