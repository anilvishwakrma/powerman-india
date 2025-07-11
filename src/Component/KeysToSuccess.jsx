import React from "react";
import { FaMicrochip, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";
import "./KeysToSuccess.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const keysData = [
    {
        icon: <FaMicrochip color="#000" size={90} />,
        title: "TECHNOLOGY",
        desc: "Powermanindia vision is to develop a comprehensive range of products that excels quality standards, have the lowest lifecycle costs for customers and provides innovative solutions that cater to market needs."
    },
    {
        icon: <FaLightbulb color="#000" size={90} />,
        title: "INNOVATION",
        desc: "Innovation is a continuous journey towards product excellence. Powermanindia, keeping in line with its commitment to be “Always Better” for its stakeholders, has adopted innovation as the key differentiator since the early days of its inception."
    },
    {
        icon: <FaUsers color="#000" size={90} />,
        title: "PEOPLE",
        desc: "Our technology division is spearheaded by a team of proficient engineers and specialists who are experts in diverse subsystem domains and have niche technical skills. We work in an environment that encourages collaboration and creative problem-solving."
    },
    {
        icon: <FaCogs color="#000" size={90} />,
        title: "PROCESS",
        desc: "The Powermanindia Product Management and Marketing Organisation (PMMO) stands as the core for all product design, innovation and development strategies. We seamlessly integrate and align our technology division’s product development and innovation projects with the company’s business goals for success."
    }
];



const industryList = [
    "Engineering",
    "Textiles",
    "Chemical",
    "Cement",
    "Power",
    "Defence",
    "Petroleum",
    "Coating",
    "Metallurgy",
    "Automobile",
    "Medical",
    "Aviation",
];

const KeysToSuccess = () => (
    <>

        <Container className="keys-success-section">
            <h2 className="keys-title">OUR KEYS TO SUCCESS</h2>
            <Slider
                className="keys-row"
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={4}
                slidesToScroll={1}
                responsive={[
                    {
                        breakpoint: 992,
                        settings: { slidesToShow: 2 }
                    },
                    {
                        breakpoint: 576,
                        settings: { slidesToShow: 2 }
                    }
                ]}
            >
                {keysData.map((item, idx) => (
                    <div className="keys-card text-center p-3" key={idx}>
                        <div className="icon mb-3">{item.icon}</div>
                        <h5 className="title">{item.title}</h5>
                        {/* <p className="desc">{item.desc}</p> */}
                    </div>
                ))}
            </Slider>
        </Container>


        <Container className="py-5" style={{ display: 'none' }}>
            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                {industryList.map((title, index) => (
                    <Col key={index}>
                        <div className="text-center">
                            <img
                                src={`https://picsum.photos/300/200?random=${index + 1}`}
                                alt={title}
                                className="img-fluid rounded mb-2 image-hover-effect"
                                style={{ objectFit: "cover", width: "100%" }}
                            />

                            <h6 className="text_colr_grodaa">{title}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
);

export default KeysToSuccess;