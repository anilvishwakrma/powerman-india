import React from 'react';

const extractVideoId = (url) => {
    const match = url.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
    );
    return match ? match[1] : null;
};

const CustomVideo = ({
    videoUrl = 'https://www.youtube.com/watch?v=Ineyo7s27lo',
    title = '',
    linkText = '',
    linkHref = '',
    downloadUrl = '', // Optional
}) => {
    const videoId = extractVideoId(videoUrl);
    if (!videoId) return <p>Invalid  URL</p>;

    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

    return (
        <div className='custom_video_baneer_compny' style={styles.videoWrapper}>
            <div style={styles.videoOverlay}>
                <h2 style={styles.heading}>{title}</h2>
                <a href={linkHref} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    {linkText}
                </a>
                {downloadUrl && (
                    <a
                        href={downloadUrl}
                        download
                        style={{ ...styles.link, marginTop: '10px', display: 'inline-block' }}
                    >
                        Download Video
                    </a>
                )}
            </div>

            <iframe
                width="100%"
                // height="100%"
                src={embedUrl}
                title="Custom Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={styles.iframe}
            ></iframe>
        </div>
    );
};

const styles = {
    videoWrapper: {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    videoOverlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 2,
        color: 'white',
        textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    link: {
        color: '#00f0ff',
        textDecoration: 'underline',
        fontWeight: 'bold',
    },
};

export default CustomVideo;
