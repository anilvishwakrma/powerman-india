import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollValue = (scrollTop / docHeight) * 100;
        setScrollPercent(scrollValue);
        setVisible(scrollTop > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const radius = 20;
    const circumference = 2 * Math.PI * radius;

    return (
        <div
            className={`scroll-progress-container ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            title="Scroll to Top"
        >
            <svg className="progress-ring" width="50" height="50">
                <circle
                    className="ring-bg"
                    cx="25"
                    cy="25"
                    r={radius}
                    strokeWidth="4"
                />
                <circle
                    className="ring-progress"
                    cx="25"
                    cy="25"
                    r={radius}
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={(1 - scrollPercent / 100) * circumference}
                />
            </svg>
            <div className="arrow-up">↑</div>
        </div>
    );
};

export default ScrollToTopButton;
