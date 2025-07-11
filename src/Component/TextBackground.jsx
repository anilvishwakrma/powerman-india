// TextBackground.jsx
import React from 'react';
import './TextBackground.css'; // We'll create this CSS file

const TextBackground = ({ text, imageUrl, className = '' }) => {
    return (
        <div className={`text-background-container ${className}`}>
            <span
                className="text-fill-effect"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {text}
            </span>
        </div>
    );
};

export default TextBackground;