import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white flex-column">
            <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="display-3 fw-bold text-center mb-4"
            >
                🚧 Coming Soon 🚧
            </motion.h1>

            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="lead text-center"
            >
                This page is currently under construction.<br />
                We’re working hard to bring it to you soon!
            </motion.p>
        </div>
    );
};

export default ComingSoon;
