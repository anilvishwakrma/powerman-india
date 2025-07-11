import React, { useState } from 'react';
import './footer.css';
import logo from '../../assets/imases/logo.jpg';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaPinterestP,
    FaRegStar
} from 'react-icons/fa';
import { MdCall, MdOutlineLibraryBooks, MdOutlineMail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { Modal } from 'react-bootstrap';
import RatingPage from '../Rating';
import ServiceRequestModal from '../ServiceRequestModal';

const products = [
    'Compressor', 'Air Dryer', 'Vehicle Washing System',
    'Wheel Align Equipments', 'Lifting And Tools Equipments',
    'Body Shop Equipments', 'Cleaning Equipments', 'Industrial Motors And Cables'
];

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Company' },
    { href: '/services', label: 'Technology' },
    { href: '/contact', label: 'Career' },
    { href: '/contact', label: 'Service' },
    { href: '/contact', label: 'Feedback' },
    { href: '/contact', label: 'Contact us' },
];

const Footer = () => {
    const [showModalRating, setShowModalRating] = useState(false);
    const [showModal, setShowModal] = useState(false);


    return (
        <footer className="footer">
            <div className="footer-container">
                <div className='footer_logo_new'>
                    <img src={logo} alt="logo" className="footer-logo" />
                </div>

                <div className="footer-grid">
                    {/* Description */}
                    <div className="footer-block" style={{ paddingRight: 20 }}>
                        {/* <h4>DESCRIPTION</h4> */}
                        {/* <p>
                            POWER MAN is your trusted partner in high-quality tools & machinery with superior service.
                        </p> */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>

                    {/* Address */}
                    <div className="footer-block ADDRESS_ffooter">
                        <h4>ADDRESS</h4>
                        <p><FaMapMarkerAlt className="footer-icon red" /> Tulsi Nagar, Indore, Madhya Pradesh, India</p>
                        <p><FaPhoneAlt className="footer-icon red" /> +91 9827010271</p>
                        <p><FaEnvelope className="footer-icon red" />powermanindiaofficial@gmail.com</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-block ">
                        <h4>QUICK LINKS</h4>
                        {quickLinks.map((link, idx) => (
                            <p key={idx}>
                                <a href={link.href}>{link.label}</a>
                            </p>
                        ))}
                    </div>

                    {/* Products */}
                    <div className="footer-block">
                        <h4>PRODUCTS</h4>
                        {products.map((prod, idx) => (
                            <p key={idx}>{prod}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaPinterestP /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><MdCall /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
                <p>© 2025 Powerman India. All rights reserved.</p>
            </div>
            <div className="fix_social_icons" style={{ display: 'none' }}>
                <a
                    className="fix_social_icon_item whatsapp"
                    href="https://wa.me/919826910271?text=Hi%20PowerMan%20India%2C%20I'm%20interested%20in%20your%20air%20compressor."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                    <span className="tooltip">Whatsapp</span>
                </a>

                <div
                    className="fix_social_icon_item email"
                    onClick={() => setShowModalRating(true)}
                    style={{ cursor: "pointer" }}
                >
                    <FaRegStar />
                    <span className="tooltip">Rating</span>
                </div>

                <div
                    className="fix_social_icon_item inquiry"
                    onClick={() => setShowModal(true)}
                    style={{ cursor: "pointer" }}
                >
                    <MdOutlineLibraryBooks />
                    <span className="tooltip">Inquiry</span>
                </div>
            </div>


            <div className='left_fix_icons_cal'>
                {/* WhatsApp Item */}
                <a
                    href="https://wa.me/919826910271"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='left_fix_icons_cal_items'
                >
                    <FaWhatsapp style={{ color: '#25D366' }} />
                    <span>Whatsapp</span>
                </a>

                {/* Rating Item */}
                <div
                    className='left_fix_icons_cal_items'
                    onClick={() => setShowModalRating(true)}
                >
                    <FaRegStar style={{ color: '#FFD700' }} />
                    <span>Rating</span>
                </div>

                {/* Inquiry Item */}
                <div
                    className='left_fix_icons_cal_items'
                    onClick={() => setShowModal(true)}
                >
                    <MdOutlineLibraryBooks style={{ color: '#007bff' }} />
                    <span>Inquiry</span>
                </div>
            </div>






            <Modal
                show={showModalRating}
                onHide={() => setShowModalRating(false)}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ratings & Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RatingPage />
                </Modal.Body>
            </Modal>
            <ServiceRequestModal show={showModal} handleClose={() => setShowModal(false)} />
        </footer>
    );
};

export default Footer;
