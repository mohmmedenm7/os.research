import { useEffect, useState } from 'react';
import './BootScreen.css';

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen = ({ onBootComplete }: BootScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const bootSteps = [
    'Initializing system...',
    'Loading kernel modules...',
    'Mounting file systems...',
    'Starting system services...',
    'Initializing hardware...',
    'Loading user interface...',
    'System ready!'
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Boot messages
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= bootSteps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            onBootComplete();
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onBootComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-content">
        <div className="boot-logo">
          <div className="boot-icon">⚙️</div>
          <h1 className="boot-title">OS KERNEL</h1>
        </div>

        <div className="boot-messages">
          {bootSteps.slice(0, currentStep + 1).map((step, index) => (
            <div 
              key={index} 
              className={`boot-message ${index === currentStep ? 'active' : ''}`}
            >
              <span className="boot-prompt">$</span> {step}
              {index === currentStep && <span className="cursor">_</span>}
            </div>
          ))}
        </div>

        <div className="boot-progress-container">
          <div className="boot-progress-bar">
            <div 
              className="boot-progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="boot-progress-text">{progress}%</div>
        </div>

        <div className="boot-footer">
          <p>Operating Systems Research Platform v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
