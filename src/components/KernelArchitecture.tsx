import React from 'react';
import './KernelArchitecture.css';

const architectures = [
    {
        type: 'موحد (Monolithic)',
        description: 'جميع خدمات نظام التشغيل تعمل في مساحة النواة. تنفيذ سريع لكن فشل أي مكون قد يؤدي إلى انهيار النظام.',
        features: ['مساحة عنونة واحدة', 'أداء عالي', 'صيانة صعبة', 'Linux, Traditional Unix'],
        color: '#0078D4'
    },
    {
        type: 'ميكرو (Microkernel)',
        description: 'فقط الخدمات الأساسية في النواة. الباقي يعمل في مساحة المستخدم. أمان أعلى واستقرار أفضل.',
        features: ['نواة صغيرة', 'خدمات في مساحة المستخدم', 'تمرير الرسائل', 'Minix, QNX'],
        color: '#10B981'
    },
    {
        type: 'هجين (Hybrid)',
        description: 'يجمع بين تصميمي الموحد والميكرو. يشغل بعض الخدمات في وضع النواة للأداء، والبعض في مساحة المستخدم للاستقرار.',
        features: ['تصميم متوازن', 'أداء + أمان', 'معمارية مرنة', 'Windows NT, macOS (XNU)'],
        color: '#F59E0B'
    }
];

const KernelArchitecture: React.FC = () => {
    return (
        <section id="kernel" className="section-padding kernel-section">
            <div className="container">
                <h2 className="section-title reveal">معمارية النواة</h2>
                <p className="section-subtitle reveal">مقارنة فلسفات التصميم الأساسية لأنظمة التشغيل الحديثة.</p>

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
