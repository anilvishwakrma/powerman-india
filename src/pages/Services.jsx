import React, { useEffect, useState } from 'react';
import CustomBanner from '../Component/custombaneer';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FiSettings } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { MdPriorityHigh } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import ServiceNetwork from '../Component/ServiceNetwork';
import ServiceRequestBanner from '../Component/ServiceRequestBanner';
import INNER_BANNER from '../assets/imases/ineer_baneer.jpg'
import ServiceRequestModal from '../Component/ServiceRequestModal';
import bgImg from '../assets/imases/ineer_baneer.jpg'
import Slider from 'react-slick';

const features = [
    {
        icon: <FiSettings color="#000" />,
        title: 'ENERGY & MAINTENANCE COST SAVING'
    },
    {
        icon: <BiTimeFive color="#000" />,
        title: 'HIGHEST UPTIME'
    },
    {
        icon: <MdPriorityHigh color="#000" />,
        title: 'PRIORITY SERVICE'
    },
    {
        icon: <AiFillSafetyCertificate color="#000" />,
        title: 'HIGHEST RELIABILITY'
    }
];


const FeatureSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1024,
            FeatureSlider: { slidesToShow: 3 }
        },
        {
            breakpoint: 768,
            FeatureSlider: { slidesToShow: 2 }
        },
        {
            breakpoint: 480,
            FeatureSlider: { slidesToShow: 1 }
        }
    ]
};

const services = [
    {
        title: 'COMPRESSOR HEALTH CHECK',
        description:
            'Besides saving you from expensive repairs and unplanned downtime, our periodic health checks also ensure higher efficiency and output.',
        imgUrl: 'https://picsum.photos/600/400?random=1',
        cta: 'KNOW MORE',
        dark: true,
    },
    {
        title: 'AIR AUDIT',
        description:
            'Our Air Audit is a highly specialised service that enables users to identify ways to improve the performance and energy savings of your system.',
        imgUrl: 'https://picsum.photos/600/400?random=2',
        cta: 'KNOW MORE',
        dark: false,
    },
];

const overlayCards = [
    {
        title: "Annual Maintenance Contract",
        img: "https://picsum.photos/200/300?random=11",
        desc: [
            "Comprehensive compressor care.",
            "Preventive maintenance for long life.",
            "Priority support & peace of mind."
        ]
    },
    {
        title: "On-Demand Repair",
        img: "https://picsum.photos/200/300?random=12",
        desc: [
            "Quick fix for breakdowns.",
            "Genuine parts, expert service.",
            "Restore performance instantly."
        ]
    },
    {
        title: "Performance Upgrade",
        img: "https://picsum.photos/200/300?random=13",
        desc: [
            "Boost compressor efficiency.",
            "Modernize with latest tech.",
            "Save energy, reduce costs."
        ]
    }
];

const Services = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <CustomBanner
                imageUrl={INNER_BANNER}
                heading={'AIR COMPRESSOR SERVICE'}
                text={'powermanindia annual maintenance contracts (AMC) are a great way to safeguard your compressor against untimely and costly repairs and ensure that your compressor runs with maximum efficiency'}
                links={[
                    { label: 'Home', path: '/' },
                    { label: 'Service', path: '/service' }
                ]}
            />

            <section className="py-5 bg-light" data-aos="fade-up">
                <Container>
                    <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        className="text-uppercase text-muted"
                        data-aos="fade-up"
                    >
                        WITH AN AMC
                    </Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        fontWeight="bold"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        YOU CAN BE ASSURED OF
                    </Typography>

                    {/* <Row className="mt-5">
                        {features.map((feature, index) => (
                            <Col
                                md={3}
                                sm={6}
                                xs={12}
                                className="text-center mb-4"
                                key={index}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className='service_width_icons_svg' style={{ marginBottom: '1rem' }}>
                                        {feature.icon}
                                    </div>
                                    <Typography variant="subtitle1" fontWeight="600">
                                        {feature.title}
                                    </Typography>
                                </motion.div>
                            </Col>
                        ))}
                    </Row> */}

                    <Slider {...FeatureSlider} className='mt-5'>
                        {features?.map((feature, index) => (
                            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center px-3"
                                >
                                    <div className='service_width_icons_svg mb-3'>
                                        {feature.icon}
                                    </div>
                                    <Typography variant="subtitle1" fontWeight="600">
                                        {feature.title}
                                    </Typography>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>

            <Container fluid className="py-5 px-md-5">
                <Row>
                    {services.map((service, idx) => (
                        <Col
                            md={6}
                            key={idx}
                            className="mb-4"
                            data-aos="fade-up"
                            data-aos-delay={idx * 200}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.3, duration: 0.6 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                                    backgroundColor: service.dark ? '#000' : '#f8f9fa',
                                    color: service.dark ? '#fff' : '#000',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    height: '100%',
                                }}
                            >
                                <img
                                    src={service.imgUrl}
                                    alt={service.title}
                                    style={{
                                        width: '50%',
                                        objectFit: 'cover',
                                        height: '100%',
                                    }}
                                />
                                <div className="p-4 d-flex flex-column justify-content-center" style={{ width: '50%' }}>
                                    <h3 className="fw-bold">{service.title}</h3>
                                    <p className="my-3">{service.description}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn btn-link fw-bold"
                                        style={{ color: '#ff0000', paddingLeft: 0 }}
                                    >
                                        {service.cta}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="py-5">
                <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    className="text-uppercase text-muted"
                    data-aos="fade-up"
                >
                    CHOOSE WHAT WORKS BEST
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    fontWeight="bold"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    FOR YOUR COMPRESSOR
                </Typography>



                <Row className="justify-content-center ">
                    {overlayCards.map((card, idx) => (
                        <Col md={4} sm={6} xs={12} className="d-flex justify-content-center mb-4" key={idx}>
                            <div className="custom-img-overlay-container">
                                <img src={card.img} alt={card.title} />
                                <div className="custom-img-overlay">
                                    <div>
                                        <h3>{card.title}</h3>
                                        <span style={{ fontWeight: 400 }}>
                                            {card.desc.map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}<br />
                                                </React.Fragment>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="py-5">
                <ServiceNetwork />
            </Container>

            <ServiceRequestBanner
                bgImage={bgImg}
                headingTop="INTERESTED IN OUR"
                headingMain="SERVICES & PARTS?"
                description="If you are interested in our extensive range of services and parts, click below."
                buttonLabel="SERVICE REQUEST"
                onClick={() => setShowModal(true)} // 👈 Button click handler
            />

            <ServiceRequestModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            />
        </>
    );
};

export default Services;
