// src/components/CookieConsent.jsx
import React, { useEffect, useState } from "react";
// import "./CookieConsent.css";

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("powerman-cookie-consent");
        if (!consent) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("powerman-cookie-consent", "accepted");
        setVisible(false);
    };

    const handleCancel = () => {
        localStorage.setItem("powerman-cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <p>
                <strong>PowerMan India</strong> uses cookies to enhance your experience.
                By clicking “Accept”, you agree to the use of cookies.
            </p>
            <div className="cookie-actions">
                <button className="accept" onClick={handleAccept}>Accept</button>
                <button className="cancel" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default CookieConsent;
