import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CustomBanner = ({ imageUrl, heading, text, links, loading }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // Reset imageLoaded if a new imageUrl is passed
        setImageLoaded(false);
    }, [imageUrl]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const showSkeleton = loading || !imageLoaded;

    return (
        <div className="banner-container">
            {showSkeleton && <Skeleton height={400} />}

            {!loading && (
                <>
                    <img
                        src={imageUrl}
                        alt="Banner"
                        className="banner-image"
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                        onLoad={handleImageLoad}
                    />
                    {imageLoaded && (
                        <>
                            <div className="banner-overlay" />
                            <motion.div
                                className="banner-text"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 dangerouslySetInnerHTML={{ __html: heading }} />

                                <p>{text}</p>
                                <div className="banner-links">
                                    {links?.map((link, idx) => (
                                        <Link key={idx} to={link.path}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default CustomBanner;
