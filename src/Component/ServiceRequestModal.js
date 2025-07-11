import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { enquiries } from "../redux/actions/action-creator";
import { useDispatch, useSelector } from "react-redux";

const ServiceRequestModal = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const { categorylist = [], subcategorylist = [] } = useSelector(state => state.common);
    const [productEnqiFrom, setproductEnqiFrom] = useState({
        type: '',
        name: '',
        email: '',
        mobile: '',
        company_name: '',
        country: '',
        state: '',
        city: '',
        zipcode: '',
        message: '',
        parts: '',
        productId: '',
    });

    // useEffect(() => {
    //     if (productId) {
    //         setproductEnqiFrom(prev => ({ ...prev, productId }));
    //     }
    // }, [productId]);

    const Validate_Function = () => {
        const {
            type, name, email, mobile, company_name,
            country, state, city, zipcode, message, parts, productId
        } = productEnqiFrom;

        if (!type.trim()) return toast.error('Please select enquiry type');
        if (!name.trim()) return toast.error('Please enter your name');
        if (!email.trim()) return toast.error('Please enter your email');
        if (!mobile.trim()) return toast.error('Please enter your mobile number');
        if (!company_name.trim()) return toast.error('Please enter your company name');
        if (!country.trim()) return toast.error('Please enter your country');
        if (!state.trim()) return toast.error('Please enter your state');
        if (!city.trim()) return toast.error('Please enter your city');
        if (!zipcode.trim()) return toast.error('Please enter your zipcode');
        if (!message.trim()) return toast.error('Please enter your message');

        API_FUNCTION();
    };

    const API_FUNCTION = () => {
        setIsLoading(false);
        const {
            type, name, email, mobile, company_name,
            country, state, city, zipcode, message, productId, parts
        } = productEnqiFrom;

        const formData = new FormData();
        formData.append('type', type);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('company_name', company_name);
        formData.append('country', country);
        formData.append('state', state);
        formData.append('city', city);
        formData.append('zipcode', zipcode);
        formData.append('message', message);
        formData.append('productId', productId || '');
        formData.append('parts', parts || '');

        dispatch(enquiries(formData))
            .then((response) => {
                if (response?.status === 'success') {
                    toast.success('Submitted successfully');
                    setproductEnqiFrom({
                        type: '',
                        name: '',
                        email: '',
                        mobile: '',
                        company_name: '',
                        country: '',
                        state: '',
                        city: '',
                        zipcode: '',
                        message: '',
                        productId: '',
                        parts: '',
                    });
                    handleClose();
                } else {
                    toast.error(response?.message || 'Submission failed');
                }
            })
            .catch((err) => {
                toast.error(err.message || 'Something went wrong');
            })
            .finally(() => setIsLoading(true));
    };

    // console.log(API_FUNCTION);

    const handleTabChange = (tab) =>
        setproductEnqiFrom((prev) => ({ ...prev, type: tab }));

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Body style={{ padding: 40, position: "relative" }}>
                <div style={{ fontWeight: 500, color: "#888", fontSize: 16, marginBottom: 8 }}>ONLINE</div>
                <h2 style={{ fontWeight: 700, marginBottom: 24, letterSpacing: 1 }}>SERVICE REQUEST</h2>
                <Form>
                    <div style={{ marginBottom: 18 }}>
                        <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: 1 }}>
                            WHAT ARE YOU LOOKING FOR? <span style={{ color: "#da251d" }}>*</span>
                        </span>

                    </div>

                    <div className="d-flex flex-wrap mt-2 mb-3">
                        <button
                            type="button"
                            className={`btn ${productEnqiFrom.type === " Service Request" ? "btn-danger" : "btn-outline-danger"}`}
                            style={{ marginRight: 10 }}
                            onClick={() => handleTabChange(" Service Request")}
                        >
                            Service Request
                        </button>

                        <button
                            type="button"
                            className={`btn ${productEnqiFrom.type === "Spare Parts Request" ? "btn-danger" : "btn-outline-danger"}`}
                            onClick={() => handleTabChange("Spare Parts Request")}
                        >
                            Spare Parts Request
                        </button>
                    </div>

                    <Row>

                        <Col>
                            <CustomInput
                                label="PARTS NAME / PARTS NUMBER"
                                type="text"
                                name="parts"
                                value={productEnqiFrom.name}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, parts: val })}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <CustomInput
                                label="Full Name *"
                                value={productEnqiFrom.name}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, name: val })}
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="Email *"
                                type="email"
                                value={productEnqiFrom.email}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, email: val })}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <CustomInput
                                label="Mobile *"
                                type="tel"
                                value={productEnqiFrom.mobile}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, mobile: val })}
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="Company Name *"
                                value={productEnqiFrom.company_name}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, company_name: val })}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <CustomInput
                                label="Country *"
                                value={productEnqiFrom.country}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, country: val })}
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="State *"
                                value={productEnqiFrom.state}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, state: val })}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <CustomInput
                                label="City *"
                                value={productEnqiFrom.city}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, city: val })}
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="Zip Code *"
                                value={productEnqiFrom.zipcode}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, zipcode: val })}
                            />
                        </Col>
                    </Row>

                    <CustomInput
                        label="Message *"
                        as="textarea"
                        rows={3}
                        value={productEnqiFrom.message}
                        onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, message: val })}
                    />

                    <Button
                        variant="danger"
                        disabled={!isLoading}
                        className="mt-3"
                        onClick={Validate_Function}
                    >
                        {isLoading ? 'SCHEDULE A CALL' : 'Submitting...'}
                    </Button>
                </Form>
                <Button
                    variant="link"
                    onClick={handleClose}
                    style={{
                        position: "absolute",
                        top: 18,
                        right: 18,
                        fontSize: 32,
                        color: "#888",
                        textDecoration: "none",
                        zIndex: 10,
                    }}
                >
                    &times;
                </Button>
            </Modal.Body>
        </Modal>
    );
};

export default ServiceRequestModal;