import React from 'react';
import './FutureOS.css';

const topics = [
    {
        title: 'نظام تشغيل متكامل مع الذكاء الاصطناعي',
        desc: 'ستنتقل أنظمة التشغيل من مديري موارد سلبيين إلى مساعدين شخصيين نشطين مع تكامل نماذج اللغة الكبيرة.',
        icon: '🤖'
    },
    {
        title: 'أمان ما بعد الكم',
        desc: 'ستنفذ أنوية أنظمة التشغيل الجيل القادم خوارزميات تشفير مقاومة للكم لتأمين البيانات ضد التهديدات المستقبلية.',
        icon: '🔐'
    },
    {
        title: 'بيئة تشغيل ويب أولاً',
        desc: 'يستمر الخط بين المتصفح ونظام التشغيل في الاختفاء، مع WASM والمعماريات السحابية في الطليعة.',
        icon: '🌐'
    }
];

const FutureOS: React.FC = () => {
    return (
        <section id="future" className="section-padding future-section">
            <div className="future-bg"></div>
            <div className="container">
                <h2 className="section-title">مستقبل أنظمة التشغيل</h2>
                <p className="section-subtitle">ماذا ينتظرنا في العقد القادم من برمجيات النظام؟</p>

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
                    <button className="btn-primary">تحميل بحث كامل PDF</button>
                </div>
            </div>
        </section>
    );
};

export default FutureOS;
