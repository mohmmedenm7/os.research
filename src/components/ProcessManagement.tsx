import React, { useState, useEffect } from 'react';
import './ProcessManagement.css';

interface Process {
    id: number;
    name: string;
    status: 'active' | 'waiting' | 'ready';
    progress: number;
}

const ProcessManagement: React.FC = () => {
    const [processes, setProcesses] = useState<Process[]>([
        { id: 1, name: 'Browser.exe', status: 'waiting', progress: 45 },
        { id: 2, name: 'SystemIdle', status: 'active', progress: 100 },
        { id: 3, name: 'Editor.ts', status: 'ready', progress: 12 },
        { id: 4, name: 'Compiler.v8', status: 'waiting', progress: 88 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProcesses(prev => prev.map(p => {
                if (p.status === 'active') {
                    // Keep active cycling or shift
                    return p;
                }
                return p;
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const rotateProcess = () => {
        setProcesses(prev => {
            const next = [...prev];
            const activeIdx = next.findIndex(p => p.status === 'active');
            next[activeIdx].status = 'waiting';
            const nextIdx = (activeIdx + 1) % next.length;
            next[nextIdx].status = 'active';
            return next;
        });
    };

    return (
        <section id="processes" className="section-padding process-section">
            <div className="container">
                <div className="process-grid">
                    <div className="process-info reveal">
                        <h2 className="section-title text-left">Process Management</h2>
                        <p className="section-subtitle text-left">
                            The OS decides which process gets the CPU's attention. This is called Scheduling.
                        </p>
                        <div className="scheduler-card glass-effect">
                            <h3>CPU Scheduler</h3>
                            <p>Current Algorithm: <strong>Round Robin</strong></p>
                            <button className="btn-small" onClick={rotateProcess}>Next Time Slice</button>
                        </div>
                    </div>

                    <div className="process-viz">
                        <div className="cpu-core glass-effect">
                            <div className="core-label">CPU CORE 0</div>
                            <div className="active-process">
                                {processes.find(p => p.status === 'active')?.name}
                            </div>
                            <div className="pulse-circle"></div>
                        </div>

                        <div className="process-queue">
                            <div className="queue-label">Ready Queue</div>
                            <div className="queue-items">
                                {processes.filter(p => p.status !== 'active').map(p => (
                                    <div key={p.id} className="queue-item glass-effect">
                                        <span className="p-name">{p.name}</span>
                                        <span className={`p-status ${p.status}`}>{p.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessManagement;
