import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Contacts.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaEnvelopeOpenText, FaYoutube } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import CustomInput from '../Component/CustomInput';
import { contactForm } from '../redux/actions/action-creator';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import CustomBanner from '../Component/custombaneer';
import imageUrl from '../assets/imases/Contact_img.jpg';
import Button from '../Component/custombutton';

const Contacts = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [contactFrom, setcontactFrom] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })

    const validate_Function = () => {
        const {
            name = '',
            email = '',
            mobile = '',
            message = ''
        } = contactFrom;

        if (!name.trim()) return toast.error('Please enter your name');
        if (!email.trim()) return toast.error('Please enter your email');
        if (!mobile.trim()) return toast.error('Please enter your mobile number');
        if (!message.trim()) return toast.error('Please enter your message');

        API_FUNCTION();
    };

    const API_FUNCTION = () => {
        setIsLoading(true);
        const { name, email, mobile, message } = contactFrom;
        let formData = new FormData();
        formData.append('name', name || '');
        formData.append('email', email || '');
        formData.append('mobile', mobile || '');
        formData.append('message', message || '')

        dispatch(contactForm(formData)).then((response) => {
            // console.log('check res======= DATA', response);

            if (response?.status === 'success') {
                toast.success('Submitted successfully');
                setcontactFrom({ name: '', email: '', mobile: '', message: '' });
            } else {
                toast.error(response?.message || 'Submission failed');
            }
        }).catch((error) => {
            toast.error(error.message || 'Failed to submit');
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="contact-section">
            <CustomBanner
                imageUrl={imageUrl}
                heading={'CONTACT & SUPPORT'}
                text={'Help is at your fingertips! Our team of professionals are just a call or email away to help you find exactly what you need.'}
                links={[
                    { label: 'Home', path: '/' },
                    { label: 'Contact', path: '' }
                ]}
            />
            <div style={{ display: 'none' }} className="bg_contact_img position-relative">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <motion.div
                                className="contact-info-box"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="mb-4">Get in Touch</h4>

                                <p className="mb-4 d-flex">
                                    <FaMapMarkerAlt className="me-2 text-success mt-1" />
                                    <span>
                                        <strong>Address:</strong><br />
                                        123 Example Street, Business Bay,<br />
                                        Silicon City, Country 000000
                                    </span>
                                </p>

                                <p className="mb-3 d-flex">
                                    <FaEnvelope className="me-2 text-primary mt-1" />
                                    <span>
                                        <strong>Email:</strong><br />
                                        <a href="mailto:demo@gmail.com" className="d-block text-white">demo@gmail.com</a>
                                        <a href="mailto:check@gmail.com" className="d-block text-white">check@gmail.com</a>
                                    </span>
                                </p>

                                <p className="d-flex">
                                    <FaPhoneAlt className="me-2 text-warning mt-1" />
                                    <span>
                                        <strong>Call Now:</strong><br />
                                        <a href="tel:1234567890" className="d-block text-white">1234567890</a>
                                        <a href="tel:1234567890" className="d-block text-white">1234567890</a>
                                    </span>
                                </p>
                                <div className="mt-4 d-flex gap-3">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </motion.div>

                        </Col>
                        <Col md={6}>
                            <motion.div
                                className="form-blur-box"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-2xl font-semibold mb-4">Send a Message</h4>
                                <CustomInput
                                    label="Full Name"
                                    name="name"
                                    value={contactFrom.name}
                                    onChange={(val) => setcontactFrom({ ...contactFrom, name: val })}
                                    required
                                />
                                <CustomInput
                                    label="Email"
                                    name="email"
                                    value={contactFrom.email}
                                    onChange={(val) => setcontactFrom({ ...contactFrom, email: val })}
                                    required
                                />
                                <CustomInput
                                    label="Mobile Number"
                                    name="mobile"
                                    value={contactFrom.mobile}
                                    onChange={(val) => setcontactFrom({ ...contactFrom, mobile: val })}
                                    required
                                />
                                <CustomInput
                                    label="Message"
                                    name="message"
                                    value={contactFrom.message}
                                    onChange={(val) => setcontactFrom({ ...contactFrom, message: val })}
                                    required
                                />

                                <Button
                                    style={{ fontSize: 22 }}
                                    label="Submit"
                                    onClick={validate_Function}
                                />


                            </motion.div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div style={{ background: "#f4f5f7", padding: "48px 0" }}>
                <Container>
                    <Row className="mb-5">
                        <Col md={2} className="d-flex justify-content-center align-items-start">
                            <FaPhoneAlt size={48} color="#e60000" />
                        </Col>
                        <Col md={10}>
                            <div style={{ fontSize: "2rem", letterSpacing: 1, fontWeight: 400, color: "#232323" }}>
                                FOR PRODUCT RELATED ASSISTANCE
                            </div>
                            <div className="mt-2 mb-2" style={{ fontWeight: 700, fontSize: "1.5rem", letterSpacing: 1 }}>
                                CALL <span style={{ fontWeight: 900 }}>1800-203-3544</span>
                            </div>
                            <Button
                                label="OR SCHEDULE A CALL" />
                            <div style={{ color: "#232323", fontSize: "14px", marginBottom: 8, marginTop: 10 }}>
                                With our superior customer care system, service requests are just a call or email away. This integrated system allows us to respond to your requests and queries on time and track issue resolution.
                            </div>
                            <div style={{ color: "#232323", fontSize: "14px" }}>
                                powermanindia customer care operates 6 days a week, from Monday to Saturday 8 am to 9:30 pm.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} className="d-flex justify-content-center align-items-start">
                            <FaEnvelopeOpenText size={48} color="#e60000" />
                        </Col>
                        <Col md={10}>
                            <div style={{ fontSize: "2rem", letterSpacing: 1, fontWeight: 400, color: "#232323" }}>
                                QUICK CONTACTS
                            </div>
                            <div style={{ color: "#232323", fontSize: "14px", margin: "12px 0" }}>
                                After Sales & Service - <b>customercare@powermanindia.com</b><br />
                                Media - <b>communications@powermanindia.com</b><br />
                                Recruitment - <b>careers@powermanindia.com</b><br />
                                Vendors - <b>sourcing@powermanindia.com</b>
                            </div>
                            <div style={{ color: "#232323", fontSize: "14px", marginBottom: 12 }}>
                                Or fill our Enquiry Form and we will get back to you
                            </div>
                            <Button
                                label="FILL ENQUIRY FORM" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div style={{ background: "#fff", padding: "48px 0" }}>
                <Container>
                    <div className="text-center mb-2" style={{ letterSpacing: 2, color: "#6c6c6c", fontSize: "1.1rem" }}>
                        YOU CAN
                    </div>
                    <h2 className="text-center mb-5" style={{ color: "#191a32", fontWeight: 700, fontSize: "2.6rem", letterSpacing: 1 }}>
                        REACH US AT
                    </h2>
                    <Row className="text-center text-md-start">
                        <Col md={4} className="mb-5 mb-md-0">
                            <div>

                                <div style={{ fontWeight: 600, fontSize: "22px", marginBottom: 8 }}>
                                    <FaMapMarkerAlt size={32} color="#b71c1c" style={{ marginBottom: 8, marginRight: 3 }} />
                                    Corporate Office
                                </div>
                                <div style={{ color: "#232323", fontSize: "14px", marginBottom: 10 }}>
                                    powermanindia Equipments Limited,<br />
                                    powermanindia Industrial Complex,<br />
                                    Trichy Road, Singanallur,<br />
                                    Coimbatore – 641005<br /><br />
                                    Tel : 0422 2589555<br />
                                    Fax : +91-422-2573697<br />
                                    Toll Free (India) : 1800-425-3544<br />
                                    1800-203-3544<br />
                                    Email : enquiry@powermanindia.com
                                </div>
                                <div>
                                    <span style={{ color: "#e60000", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}>
                                        Direction
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="mb-5 mb-md-0">
                            <div>

                                <div style={{ fontWeight: 600, fontSize: "22px", marginBottom: 8 }}>
                                    <FaMapMarkerAlt size={32} color="#b71c1c" style={{ marginBottom: 8, marginRight: 3 }} />
                                    Global Support Centre
                                </div>
                                <div style={{ color: "#232323", fontSize: "14px", marginBottom: 10 }}>
                                    powermanindia Equipments Limited,<br />
                                    Sf No 221, 221/2 & 221/3,<br />
                                    Kothavadi Road,<br />
                                    Kodangipalayam Village,<br />
                                    Singarampalayam (PO),<br />
                                    Kinathukkadavu Taluk,<br />
                                    Coimbatore – 642109. India<br /><br />
                                    Tel: 0422-2587000
                                </div>
                                <div>
                                    <span style={{ color: "#e60000", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}>
                                        Direction
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div>

                                <div style={{ fontWeight: 600, fontSize: "22px", marginBottom: 8 }}>
                                    <FaMapMarkerAlt size={32} color="#b71c1c" style={{ marginBottom: 8, marginRight: 3 }} />
                                    Manufacturing Centre
                                </div>
                                <div style={{ color: "#232323", fontSize: "14px", marginBottom: 10 }}>
                                    powermanindia Equipments Limited,<br />
                                    powermanindia Industrial Complex,<br />
                                    Trichy Road, Singanallur,<br />
                                    Coimbatore – 641005<br /><br />
                                    Tel : 0422 2589555<br />
                                    Email : enquiry@powermanindia.com
                                </div>
                                <div>
                                    <span style={{ color: "#e60000", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}>
                                        Direction
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="map-section">
                <div className="mapouter rounded overflow-hidden " style={{ height: "600px" }}>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.27108612037!2d75.56845520165577!3d22.72401825228564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1750764445852!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                </div>
            </div>

            (
            <div style={{ backgroundColor: '#e63126', color: 'white', padding: '50px 0', textAlign: 'center' }}>
                <Container>
                    <h2>
                        <span style={{ fontWeight: '300' }}>Power Man India </span>
                        <strong>SOCIAL HUB</strong>
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '40px' }}>
                        Connect with us on social media, stay up-to-date on latest developments at powermanindia and be a part of our dynamic community for a truly enriching experience.
                    </p>
                    <Row className="justify-content-center">
                        <Col xs="auto" className="text-center mx-3">
                            <FaFacebookF size={28} />
                            <div>Facebook</div>
                        </Col>
                        <Col xs="auto" className="text-center mx-3">
                            <FaYoutube size={28} />
                            <div>Youtube</div>
                        </Col>
                        <Col xs="auto" className="text-center mx-3">
                            <FaLinkedinIn size={28} />
                            <div>LinkedIn</div>
                        </Col>
                        <Col xs="auto" className="text-center mx-3">
                            <FaInstagram size={28} />
                            <div>Instagram</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contacts;
