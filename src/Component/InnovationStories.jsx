import React from "react";
import "./KeysToSuccess.css"; // Assuming you have a CSS file for styling

const stories = [
    {
        img: "https://picsum.photos/id/1011/600/400",
        tag: "ALUMINIUM IS 'AIR' TO STAY!",
        title: "We live in a world of compressed air wonders and aluminium!"
    },
    {
        img: "https://picsum.photos/id/1025/600/400",
        tag: "SO NICE! IT'S BAKED TWICE!",
        title: "The extensive use of oil-free air in the making of biscuits."
    },
    {
        img: "https://picsum.photos/id/1015/600/400",
        tag: "THE MAGIC OF 5D",
        title: "Compressed air adds another dimension to your movie-going experience"
    }
];

const InnovationStories = () => (
    <section className="innovation-stories-section">
        <h2 className="innovation-stories-title">INNOVATION STORIES</h2>
        <p className="innovation-stories-desc">
            Sustainability is central to our business and a part of our corporate identity. powermanindia is reducing its carbon footprint by developing products that are oil free and energy-efficient, and by turning its manufacturing plants and offices into green hubs.
        </p>
        <div className="innovation-stories-row">
            {stories.map((story, idx) => (
                <div className="innovation-story-card" key={idx}>
                    <div className="innovation-story-img">
                        <img src={story.img} alt={story.title} />
                    </div>
                    <div className="innovation-story-content">
                        <span className="innovation-story-tag">{story.tag}</span>
                        <h3 className="innovation-story-title">{story.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default InnovationStories;