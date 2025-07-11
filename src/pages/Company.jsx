import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaIndustry, FaCogs, FaHandsHelping, FaTachometerAlt, FaPlay } from 'react-icons/fa';
import CustomBanner from '../Component/custombaneer';
import CustomVideo from '../Component/CustomVideo';
import CustomSlickSlider from '../Component/CustomSlickSlider';
import slidesData from '../LocalDate/slidesData';
import MapaelWorldMap from '../Component/MapaelWorldMap';
import ServiceRequestBanner from '../Component/ServiceRequestBanner';
import VideoModal from '../Component/VideoModal';
import BGIMG from '../assets/imases/about-manufacturing.jpg';
import FancyboxVideoGallery from '../Component/VideoGallery';
import INNER_BANNER from '../assets/imases/ineer_baneer.jpg'

const Company = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <CustomVideo
                videoUrl="https://www.youtube.com/watch?v=Ineyo7s27lo"
            // title="Explore the Future of Tech"
            // linkText="Watch More"
            // linkHref="https://tech.example.com"
            // downloadUrl="https://yourserver.com/videos/future.mp4" // optional
            />

            {/* About Us Section */}
            <Container className="py-5">
                <Row>
                    <Col md={6} data-aos="fade-right">
                        <img src="https://picsum.photos/600/400" alt="About PowermanIndia" className="img-fluid rounded shadow" />
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <h2>About PowermanIndia</h2>
                        <p>
                            PowermanIndia specializes in high-performance air compressor solutions, offering innovative products and maintenance services designed to keep your operations running smoothly.
                        </p>
                        <p>
                            With years of expertise in industrial solutions, we ensure energy-efficient, reliable, and cost-effective air compressor systems tailored to your needs.
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <CustomSlickSlider slidesData={slidesData} />
            </Container>

            {/* Features Section */}
            <Container className="py-5 bg-light" style={{ display: 'none' }}>
                <h2 className="text-center mb-4" data-aos="fade-up">Why Choose Us</h2>
                <Row className="text-center">
                    <Col md={3} className="mb-4" data-aos="zoom-in">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaIndustry size={50} className="text-primary mb-2" />
                            <h5>Industrial Grade</h5>
                            <p>Designed for demanding environments with peak efficiency.</p>
                        </motion.div>
                    </Col>
                    <Col md={3} className="mb-4" data-aos="zoom-in" data-aos-delay="100">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaCogs size={50} className="text-success mb-2" />
                            <h5>Precision Engineering</h5>
                            <p>Advanced components ensure top-notch performance.</p>
                        </motion.div>
                    </Col>
                    <Col md={3} className="mb-4" data-aos="zoom-in" data-aos-delay="200">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaHandsHelping size={50} className="text-warning mb-2" />
                            <h5>Reliable Support</h5>
                            <p>Our experts are available for consultation and service.</p>
                        </motion.div>
                    </Col>
                    <Col md={3} className="mb-4" data-aos="zoom-in" data-aos-delay="300">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaTachometerAlt size={50} className="text-danger mb-2" />
                            <h5>Maximum Uptime</h5>
                            <p>Compressor health and performance monitoring built-in.</p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/* Deming Award Moments Section */}
            <Container className="award_to_company hidden" style={{ marginTop: 100 }} >
                <Row className="text-center mb-4">
                    <Col data-aos="fade-up">
                        <h6 className="text-uppercase text-muted">ALWAYS BETTER. FOR YOU</h6>
                        <h2 className="fw-bold">DEMING AWARD MOMENTS</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
                            Our focus on institutionalizing TQM across the organization, has resulted in the development of so many unique practices
                            that arm us with a competitive advantage while we continually work towards accomplishing our global growth goals.
                            We would also take this opportunity to commend our employees for their continual support and focus on building
                            excellence in TQM, across the organization.
                        </p>
                    </Col>
                </Row>

                <Row className="g-3 hidden">
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} xs={6} md={3} data-aos="flip-left" data-aos-delay={index * 100}>
                            <div className="shadow-sm rounded overflow-hidden">
                                <img
                                    src={`https://picsum.photos/seed/${index + 1}/300/200`}
                                    alt={`Award ${index + 1}`}
                                    className="img-fluid w-100"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className='map_and_gallrey_section hidden'>
                <MapaelWorldMap />
                <FancyboxVideoGallery />
            </div>

            <ServiceRequestBanner
                bgImage={INNER_BANNER}
                headingMain="powermanindia "
                description="Commitment Reliability Innovation – powermanindia ranks high among the world's fastest-growing fluid management solution providers with a wide global powermanindia offers Pumps, Motors, Valves, IoT Drives & Controllers, Pipes, Wires & Cables, and Solar Pumping Systems."
                buttonLabel="APPLY NOW"
                buttonLink="/Career"

            />

        </>
    );
};

export default Company;
