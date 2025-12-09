import React, { useEffect, useRef } from 'react';
import { animateValue } from '../utils/helpers';

interface StatItemProps {
    number: number;
    label: string;
    suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = '' }) => {
    const statRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = statRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !currentRef.classList.contains('counted')) {
                    // Use the utility function to animate the number
                    animateValue(currentRef, 0, number, 1400, suffix);
                    currentRef.classList.add('counted'); // Mark as counted
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [number, suffix]);

    return (
        <div className="stat-item">
            {/* Initial content can be empty or '0', will be updated by JS */}
            <div className="stat-number" ref={statRef}>0{suffix}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="container1">
                <div className="stats-grid">
                    <StatItem number={50} label="Projects Completed" suffix="+" />
                    <StatItem number={30} label="Happy Clients" suffix="+" />
                    <StatItem number={5} label="Years Experience" suffix="+" />
                    <StatItem number={100} label="Dedication" suffix="%" />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
