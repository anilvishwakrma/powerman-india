import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ServiceRequestModal from "./ServiceRequestModal";

const ServiceRequestBanner = ({
    bgImage,
    headingTop,
    headingMain,
    description,
    buttonLabel,
    buttonLink
}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            className="bInner_baneer_foot"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px 0",
                position: "relative",
                minHeight: 320,
                width: "100%",
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw",
            }}
        >
            <Container>
                <div style={{ maxWidth: 700 }}>
                    <h2 style={{ color: "#fff", fontWeight: 300, fontSize: 32, marginBottom: 0, letterSpacing: 2, }}>
                        {headingTop}
                    </h2>
                    <h1 style={{ color: "#fff", fontWeight: 700, fontSize: 40, margin: "0 0 18px 0", letterSpacing: 2, textTransform: 'uppercase' }}>
                        {headingMain}
                    </h1>
                    <p style={{ color: "#fff", fontSize: 18, marginBottom: 28 }}>
                        {description}
                    </p>
                    {buttonLabel && (
                        <button
                            onClick={() => setShowModal(true)}
                            style={{
                                background: "#da251d",
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: 18,
                                padding: "10px 22px",
                                borderRadius: 2,
                                textDecoration: "none",
                                display: "inline-block",
                                letterSpacing: 1,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            {buttonLabel}
                        </button>
                    )}




                </div>
                <ServiceRequestModal show={showModal} handleClose={() => setShowModal(false)} />
            </Container>
        </div>
    );
};

export default ServiceRequestBanner;
