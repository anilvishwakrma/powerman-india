import React from "react";
import "./TeamAndInfrastructure.css"; // Create this CSS file for styling

const TeamAndInfrastructure = () => (
    <div>
        {/* OUR TEAM Section */}
        <section className="section-container">
            <h2 className="section-title">OUR TEAM</h2>
            <div className="section-row">
                <div className="section-col section-col-text">
                    <h3 className="section-subtitle">OUR TECHNOLOGY TEAM</h3>
                    <p>
                        Our technology division is spearheaded by a team of proficient engineers and specialists who are experts in diverse subsystem domains and have niche technical skills. We work in an environment that encourages collaboration and creative problem-solving.
                    </p>
                </div>
                <div className="section-col section-col-img">
                    <img
                        src="https://fastly.picsum.photos/id/1003/400/300.jpg?hmac=ZZl-tJjPBSVtmWTzID6Mm2yqxh373qCf69n6IACLILw"
                        alt="Our Technology Team"
                        className="section-image"
                    />
                </div>
            </div>
        </section>

        {/* INFRASTRUCTURE Section */}
        <section className="section-container">
            <h2 className="section-title">INFRASTRUCTURE</h2>
            <div className="section-row">
                <div className="section-col section-col-video">
                    <iframe
                        src="https://www.youtube.com/embed/t2B031TyFyU?autoplay=1&mute=1"
                        title="Infrastructure Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        loop
                    ></iframe>
                </div>
                <div className="section-col section-col-text">
                    <h3 className="section-subtitle">BEST-IN-CLASS INFRASTRUCTURE</h3>
                    <p>
                        To power a portfolio of over 400 products, powermanindia has state-of-the-art manufacturing facilities in India, Italy and the USA. With in-house technology, powermanindia air compressors are engineered to deliver maximum uptime and reliability at low total cost of ownership.
                    </p>
                    <strong>To know more, watch the video</strong>
                </div>
            </div>
        </section>
    </div>
);

export default TeamAndInfrastructure;