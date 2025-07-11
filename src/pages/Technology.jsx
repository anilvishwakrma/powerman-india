import React, { useEffect } from 'react';
import './techCategories.css';
import CustomBanner from '../Component/custombaneer';
import KeysToSuccess from '../Component/KeysToSuccess';
import InnovationStories from '../Component/InnovationStories';
import TeamAndInfrastructure from '../Component/TeamAndInfrastructure';
import INNER_BANNER from '../assets/imases/ineer_baneer.jpg'
import ServiceRequestBanner from '../Component/ServiceRequestBanner';

const categoriesData = [
    {
        id: 1,
        name: "Compressors",
        description: "Explore our wide range of high-performance air compressors, designed for various industrial and commercial applications, ensuring efficiency and reliability.",
        icon: "https://picsum.photos/200/300?random=1",
        link: "/products/compressors"
    },
    {
        id: 2,
        name: "Air Dryer",
        description: "Ensure the longevity and efficiency of your pneumatic tools with our advanced air dryers, removing moisture and contaminants effectively.",
        icon: "https://picsum.photos/200/300?random=2",
        link: "/products/air-dryer"
    },
    {
        id: 3,
        name: "Vehicle Washing System",
        description: "Discover state-of-the-art vehicle washing systems, offering superior cleaning solutions for automotive workshops and service centers.",
        icon: "https://picsum.photos/200/300?random=3",
        link: "/products/vehicle-washing"
    },
    {
        id: 4,
        name: "Wheel Align Equipments",
        description: "Achieve precise wheel alignment with our cutting-edge equipment, essential for vehicle stability and tire longevity.",
        icon: "https://picsum.photos/200/300?random=4",
        link: "/products/wheel-align"
    },
    {
        id: 5,
        name: "Lifting And Tools Equipments",
        description: "From hydraulic lifts to essential hand tools, our range of lifting and tool equipment ensures safety and efficiency in every task.",
        icon: "https://picsum.photos/200/300?random=5",
        link: "/products/lifting-tools"
    },
    {
        id: 6,
        name: "Body Shop Equipments",
        description: "Equip your body shop with the best tools for repair and restoration, ensuring high-quality finishes and efficient operations.",
        icon: "https://picsum.photos/200/300?random=6",
        link: "/products/body-shop"
    },
    {
        id: 7,
        name: "Cleaning Equipments",
        description: "Maintain a pristine environment with our industrial-grade cleaning equipment, designed for powerful and effective cleaning.",
        icon: "https://picsum.photos/200/300?random=7",
        link: "/products/cleaning-equipments"
    },
    {
        id: 8,
        name: "Industrial Motors And Cables",
        description: "Power your operations with our robust industrial motors and durable cables, built for reliability and high performance.",
        icon: "https://picsum.photos/200/300?random=8",
        link: "/products/industrial-motors"
    }
];

const Technology = () => {

    const researchSection = {
        img: "https://picsum.photos/200/300",
        heading: "RESEARCH & INNOVATION AT Powermanindia",
        subheading: "Innovation is a continuous journey towards product excellence.",
        text: `In keeping with its commitment to be “Always Better”, Powermanindia is committed to developing technology breakthroughs that will transform the conventional boundaries of compressor technology with a relentless focus on performance and energy efficiency.`
    };



    return (
        <>
            <CustomBanner
                imageUrl={INNER_BANNER}
                heading='TECHNOLOGY FOR INNOVATORS'
                text='Powermanindia constant endeavor is to accelerate technological advancements for exponential progress through its key elements'
                links={
                    [
                        { label: 'Home', path: '/' },
                        { label: 'Technology' }
                    ]
                }
            />
            <KeysToSuccess />
            <section className="tech-solutions-section">
                <div className="tech-container">
                    <h2 className="tech-section-heading" data-aos="fade-down">
                        EXPLORE OUR ADVANCED TECHNOLOGIES
                    </h2>
                    <div className="tech-grid-layout">
                        {categoriesData.map((category, index) => (
                            <div
                                className="tech-solution-card"
                                key={category.id}
                                data-aos="fade-up"
                                data-aos-delay={100 * index}
                                data-aos-duration="800"
                            >
                                <div className="tech-icon-wrapper">
                                    <img src={category.icon} alt={category.name} />
                                </div>
                                <h3 className="tech-solution-title">{category.name}</h3>
                                <p className="tech-solution-description">{category.description}</p>
                                <a href={category.link} className="tech-learn-more-link">DISCOVER MORE +</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <TeamAndInfrastructure />

            <section className="research-innovation-section">
                <div className="research-innovation-container">
                    <div className="research-innovation-img">
                        <img src={researchSection.img} alt="Research & Innovation" />
                    </div>
                    <div className="research-innovation-content">
                        <h2>{researchSection.heading}</h2>
                        <p className="subheading">{researchSection.subheading}</p>
                        <p>{researchSection.text}</p>
                    </div>
                </div>
            </section>

            {/* <ServiceRequestBanner
                bgImage="../assets/imases/ineer_baneer.jpg"
                headingTop="DRIVING THE FUTURE OF"
                headingMain="TECHNOLOGY & INNOVATION"
            /> */}
            <ServiceRequestBanner
                bgImage={INNER_BANNER}
                headingMain="TECHNOLOGY & INNOVATION "
                description="Explore our cutting-edge tech solutions designed to power industries, enhance connectivity, and accelerate digital transformation."
                buttonLabel="APPLY NOW"
                buttonLink="/Career"

            />

        </>
    );
};

export default Technology;
