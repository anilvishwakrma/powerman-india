import React, { useState } from 'react';

const FloatingVideoAd = ({ videoUrl, isYouTube = true, width = 250, height = 170 }) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className='add_video_section'
            style={{
                position: 'fixed',
                bottom: 20,
                left: 20,
                width: width,
                height: height,
                zIndex: 1000,
                backgroundColor: '#000',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: '0 0 12px rgba(0,0,0,0.3)'
            }}
        >
            <button
                onClick={() => setVisible(false)}
                style={{
                    position: 'absolute',
                    top: 4,
                    right: 6,
                    zIndex: 1001,
                    background: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    lineHeight: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                ×
            </button>

            {isYouTube ? (
                <iframe
                    src={`${videoUrl}?autoplay=1&mute=0&loop=1&playlist=${getVideoId(videoUrl)}`}
                    title="Video Ad"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    width="100%"
                    height="100%"
                />
            ) : (
                <video
                    src={videoUrl}
                    autoPlay
                    controls
                    loop
                    muted={false}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            )}
        </div>
    );
};

// Extract video ID for YouTube looping (YouTube requires ?loop=1&playlist=VIDEO_ID)
function getVideoId(url) {
    try {
        const id = new URL(url).pathname.split("/").pop();
        return id;
    } catch (e) {
        return "";
    }
}

export default FloatingVideoAd;
