// Counter.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Counter = ({ target, duration = 2000, suffix = '', unit = '' }) => {
    const [count, setCount] = useState(0);

    const { number } = useSpring({
        from: { number: 0 },
        to: { number: target },
        config: { duration: duration },
        onRest: () => {
            setCount(target);
        }
    });

    useEffect(() => {
        // Reset count when target changes to re-animate if component is reused
        setCount(0);
    }, [target]);

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <animated.span className="counter-number">
                {number.to(num => Math.floor(num))}
            </animated.span>
            {suffix && <span className="counter-suffix">{suffix}</span>}
            {unit && <span className="counter-unit">{unit}</span>}
        </div>
    );
};

export default Counter;

// Don't forget to install: npm install @react-spring/web