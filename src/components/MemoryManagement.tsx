import React, { useState, useEffect } from 'react';
import './MemoryManagement.css';

interface MemoryBlock {
    id: number;
    size: number;
    status: 'free' | 'allocated' | 'reserved';
    process?: string;
}

const MemoryManagement: React.FC = () => {
    const [blocks, setBlocks] = useState<MemoryBlock[]>([]);

    useEffect(() => {
        // Initialize 16 blocks of RAM
        const initialBlocks: MemoryBlock[] = Array.from({ length: 16 }, (_, i) => ({
            id: i,
            size: 64,
            status: i < 3 ? 'reserved' : (i < 8 && Math.random() > 0.5 ? 'allocated' : 'free'),
            process: i < 3 ? 'Kernel' : (i < 8 ? 'App.exe' : undefined)
        }));
        setBlocks(initialBlocks);
    }, []);

    const allocateMemory = () => {
        setBlocks(prev => {
            const next = [...prev];
            const freeIdx = next.findIndex(b => b.status === 'free');
            if (freeIdx !== -1) {
                next[freeIdx] = { ...next[freeIdx], status: 'allocated', process: 'NewProcess' };
            }
            return next;
        });
    };

    const deallocateMemory = () => {
        setBlocks(prev => {
            const next = [...prev];
            const allocatedIdx = [...next].reverse().findIndex(b => b.status === 'allocated' && b.process !== 'Kernel');
            if (allocatedIdx !== -1) {
                const actualIdx = next.length - 1 - allocatedIdx;
                next[actualIdx] = { ...next[actualIdx], status: 'free', process: undefined };
            }
            return next;
        });
    };

    return (
        <section id="memory" className="section-padding memory-section">
            <div className="container">
                <h2 className="section-title">Memory Management</h2>
                <p className="section-subtitle">Real-time RAM visualization of Allocation and Deallocation.</p>

                <div className="memory-controls">
                    <button className="btn-action allocate" onClick={allocateMemory}>Allocate 64MB</button>
                    <button className="btn-action deallocate" onClick={deallocateMemory}>Free Memory</button>
                </div>

                <div className="ram-grid glass-effect">
                    {blocks.map(block => (
                        <div
                            key={block.id}
                            className={`ram-block ${block.status}`}
                            title={`${block.status}: ${block.process || 'None'}`}
                        >
                            <div className="block-inner">
                                <span className="block-id">{block.id}</span>
                                {block.process && <span className="block-label">{block.process}</span>}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="memory-legend">
                    <div className="legend-item"><span className="dot reserved"></span> Reserved (Kernel)</div>
                    <div className="legend-item"><span className="dot allocated"></span> Allocated</div>
                    <div className="legend-item"><span className="dot free"></span> Free</div>
                </div>
            </div>
        </section>
    );
};

export default MemoryManagement;
