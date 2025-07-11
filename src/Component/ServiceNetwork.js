import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCategoies } from "../redux/actions/action-creator";
import INDIAMAP from "../assets/imases/map-with-dot-vector.jpg"

const cities = [
    " MADHYA PRDESH", "MAHARASHTRA ", "CHHATTISGARH ", "RAJASTHAN", "UTTAR PRADESH", "UTARAKHAND", "DELHI", "GUJARAT",
];

const ServiceNetwork = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { categorylist = [], subcategorylist = [] } = useSelector(state => state.common);

    useEffect(() => {
        dispatch(getCategoies());
    }, [dispatch]);

    const [activeCity, setActiveCity] = useState("");

    return (
        <Container className="py-5">
            <div className="text-center mb-2" style={{ letterSpacing: 2, color: "#888", fontWeight: 500, fontSize: 15 }}>
                OUR SERVICE NETWORK
            </div>
            <h2 className="text-center mb-2" style={{ fontWeight: 700, letterSpacing: 2 }}>
                ACROSS INDIA
            </h2>
            <div className="text-center mb-4" style={{ fontWeight: 600, color: "#222", fontSize: 16 }}>
                {/* CHOOSE YOUR NEAREST LOCATION */}
            </div>
            <hr style={{ width: "100%", margin: "0 0 30px 0" }} />

            <div className="service-network-locations mb-4">
                {cities.map((item, index) => {
                    const trimmedItem = item.trim(); // Remove extra spaces
                    return (
                        <span
                            key={index}
                            onClick={() => setActiveCity(trimmedItem)} // Assuming you have useState
                            className={activeCity === trimmedItem ? "active" : ""}
                            style={{
                                margin: "0 12px",
                                fontWeight: activeCity === trimmedItem ? 700 : 400,
                                borderBottom: activeCity === trimmedItem ? "2px solid #da251d" : "none",
                                color: activeCity === trimmedItem ? "#222" : "#888",
                                cursor: "pointer",
                                fontSize: "20px",
                                letterSpacing: "1px",
                                textTransform: "uppercase"
                            }}
                        >
                            {trimmedItem}
                        </span>
                    );
                })}

            </div>

            <Row className="align-items-center">
                <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src={INDIAMAP}
                        alt="India Service Map"
                        style={{ width: "100%", maxWidth: 350 }}
                    />
                </Col>
                <Col md={6} className="text-center text-md-start">
                    <div className="mb-4">
                        <span style={{ fontSize: 48, fontWeight: 700, color: "#222" }}>100+</span>
                        <span style={{ display: "block", fontWeight: 600, fontSize: 20, color: "#222" }}>DEALERS & Powermanindia SERVICE CENTRES</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 48, fontWeight: 700, color: "#222" }}>600+</span>
                        <span style={{ display: "block", fontWeight: 600, fontSize: 20, color: "#222" }}>Powermanindia TRAINED SERVICE TECHNICIANS</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceNetwork;