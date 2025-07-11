import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CustomInput from '../Component/CustomInput';
import CustomBanner from '../Component/custombaneer';
import INNER_BANNER from '../assets/imases/ineer_baneer.jpg';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { careerData } from '../redux/actions/action-creator';

const Career = () => {
    const dispatch = useDispatch();
    const [careerfrom, setCareerFrom] = useState({
        firstName: '',
        email: '',
        phone: '',
        city: '',
        position: '',
        educationalQualification: '',
        personalNote: '',
        resume: null,
    });



    const Validate_Function = (e) => {
        e.preventDefault();
        const {
            firstName, email, city, position, educationalQualification, personalNote, resume
        } = careerfrom;

        if (!firstName.trim()) return toast.error('Please enter your first name');
        if (!email.trim()) return toast.error('Please enter your email');
        if (!city.trim()) return toast.error('Please enter your city');
        if (!position.trim()) return toast.error('Please enter your position');
        if (!educationalQualification.trim()) return toast.error('Please enter your educational qualification');
        if (!personalNote.trim()) return toast.error('Please enter your personal note');
        if (!resume) return toast.error('Please upload your resume');

        API_FUNCTION();
    };

    const API_FUNCTION = () => {
        const {
            firstName, email, phone, city, position, educationalQualification, personalNote, resume
        } = careerfrom;

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('city', city);
        formData.append('position', position);
        formData.append('educationalQualification', educationalQualification);
        formData.append('personalNote', personalNote);

        if (resume && resume instanceof File) {
            formData.append('resume', resume); // 👈 THIS is what adds File { name, type, size }
        } else {
            toast.error('Please upload a valid PDF resume.');
            return;
        }
        dispatch(careerData(formData))
            .then((response) => {
                if (response?.status === 'success') {
                    toast.success('Submitted successfully');
                    setCareerFrom({
                        firstName: '',
                        email: '',
                        phone: '',
                        city: '',
                        position: '',
                        educationalQualification: '',
                        personalNote: '',
                        resume: resume,
                    });
                } else {
                    toast.error(response?.message || 'Submission failed');
                }
            })
            .catch((err) => {
                toast.error(err?.message || 'Submission failed');
            });
    };

    return (
        <>
            <CustomBanner
                imageUrl={INNER_BANNER}
                heading={'Work with us'}
                text={'Discover our range of high-performance air compressors and services designed for industrial applications.'}
                links={[
                    { label: 'Home', path: '/' },
                    { label: 'Career', path: '' }
                ]}
            />
            <Container fluid className="py-5" style={{ background: "#fff" }}>
                <div className="text-center mb-2" style={{ color: "#000000", }}>
                    What Are You Looking For In Your Next Job
                </div>
                <h1 className="text-center mb-5" style={{ color: "#191a32", fontWeight: 500, }}>
                    Apply Now For Success
                </h1>
                <Form onSubmit={Validate_Function} className="mx-auto" style={{ maxWidth: 1400 }}>
                    <Row className="g-3 mb-3">
                        <Col md={3}>
                            <CustomInput
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={careerfrom.firstName}
                                onChange={(val) => setCareerFrom({ ...careerfrom, firstName: val })}
                                required
                                style={{ height: 56, fontSize: 18 }}
                            />
                        </Col>
                        <Col md={3}>
                            <CustomInput
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={careerfrom.email}
                                onChange={(val) => setCareerFrom({ ...careerfrom, email: val })}
                                required
                                style={{ height: 56, fontSize: 18 }}
                            />
                        </Col>
                        <Col md={3}>
                            <CustomInput
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                value={careerfrom.phone}
                                onChange={(val) => setCareerFrom({ ...careerfrom, phone: val })}
                                required
                                style={{ height: 56, fontSize: 18 }}
                            />
                        </Col>
                        <Col md={3}>
                            <CustomInput
                                type="text"
                                placeholder="City"
                                name="city"
                                value={careerfrom.city}
                                onChange={(val) => setCareerFrom({ ...careerfrom, city: val })}
                                required
                                style={{ height: 56, fontSize: 18 }}
                            />
                        </Col>
                    </Row>
                    <Row className="g-3 mb-3">
                        <Col md={3}>
                            <CustomInput
                                type="text"
                                placeholder="The Position"
                                name="position"
                                value={careerfrom.position}
                                onChange={(val) => setCareerFrom({ ...careerfrom, position: val })}
                                required
                                style={{ height: 56, fontSize: 18 }}
                            />
                        </Col>
                        <Col md={3}>
                            <CustomInput
                                type="text"
                                placeholder="Educational Qualification"
                                name="educationalQualification"
                                value={careerfrom.educationalQualification}
                                onChange={(val) => setCareerFrom({ ...careerfrom, educationalQualification: val })}
                                required
                                style={{ height: 56, fontSize: 18 }}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="resumeUpload">
                                <Form.Label>Upload Resume (PDF only)</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="resume"
                                    accept="application/pdf"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file && file.type === "application/pdf") {
                                            setCareerFrom({ ...careerfrom, resume: file });
                                        } else {
                                            toast.error("Only PDF files are allowed.");
                                            setCareerFrom({ ...careerfrom, resume: null });
                                        }
                                    }}
                                />
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <CustomInput
                                as="textarea"
                                rows={5}
                                placeholder="Personal Note"
                                name="personalNote"
                                value={careerfrom.personalNote}
                                onChange={(val) => setCareerFrom({ ...careerfrom, personalNote: val })}
                                style={{ fontSize: 18 }}
                            />
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button
                            type="submit"
                            style={{
                                background: "#e60000",
                                border: "none",
                                fontSize: "1.4rem",
                                padding: "8px 48px",
                                borderRadius: 4
                            }}
                        >
                            Submit &nbsp; &rarr;
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default Career;
