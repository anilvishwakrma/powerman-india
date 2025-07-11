import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import CustomInput from "../../Component/CustomInput";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { enquiries } from "../../redux/actions/action-creator";

const EnquiryModal = ({ show, handleClose, productId, productName }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
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
        productId: '',
    })

    useEffect(() => {
        if (productId) {
            setproductEnqiFrom(prev => ({ ...prev, productId }));
        }
    }, [productId]);

    const Validate_Function = () => {
        const {
            type, name, email, mobile, company_name,
            country, state, city, zipcode, message, productId
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
            country, state, city, zipcode, message, productId
        } = productEnqiFrom;

        let formData = new FormData();
        formData.append('type', type || 'type');
        formData.append('name', name || '');
        formData.append('email', email || '');
        formData.append('mobile', mobile || '');
        formData.append('company_name', company_name || '');
        formData.append('country', country || '');
        formData.append('state', state || '');
        formData.append('city', city || '');
        formData.append('zipcode', zipcode || '');
        formData.append('message', message || '');
        formData.append('productId', productId || '');

        console.log("Sending FormData with productId:", productId);

        dispatch(enquiries(formData))
            .then((res) => {
                if (res?.status === 'success') {
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
                    });
                    handleClose(); // optional: close modal on success
                } else {
                    toast.error(res?.message || 'Submission failed');
                }
            })
            .catch((err) => {
                toast.error(err.message || 'Something went wrong');
            })
            .finally(() => setIsLoading(true));
    };

    console.log('check vlidata', Validate_Function);


    const handleTabChange = (tab) =>
        setproductEnqiFrom((prev) => ({ ...prev, type: tab }));


    // Tab button style
    const tabBtnStyle = (active) => ({
        border: `1.5px solid ${active ? "#da251d" : "#bbb"}`,
        background: "#fff",
        color: "#222",
        fontWeight: active ? 700 : 400,
        borderRadius: 2,
        minWidth: 170,
        padding: "8px 10px",
        outline: "none",
        boxShadow: "none",
        fontSize: 14,
        letterSpacing: 0.5,
        marginRight: 8,
        marginBottom: 4,
        transition: "border-color .2s",
    });

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Body style={{ padding: 40, position: "relative" }}>
                <div
                    style={{
                        fontWeight: 500,
                        color: "#888",
                        fontSize: 16,
                        marginBottom: 8,
                    }}
                >
                    CONNECT
                </div>
                <h2
                    style={{
                        fontWeight: 700,
                        marginBottom: 8,
                        letterSpacing: 1,
                    }}
                >
                    WITH US
                </h2>
                <div
                    style={{
                        color: "#888",
                        fontSize: 14,
                        marginBottom: 18,
                    }}
                >
                    Let us help you find the perfect solution to your needs.
                </div>
                <Form >
                    <div style={{ marginBottom: 18 }}>
                        <span
                            style={{
                                fontWeight: 600,
                                fontSize: 13,
                                letterSpacing: 1,
                            }}
                        >
                            WHAT ARE YOU LOOKING FOR?{" "}
                            <span style={{ color: "#da251d" }}>*</span>
                        </span>
                        <div className="d-flex flex-wrap mt-2">
                            <button
                                type="button"
                                style={tabBtnStyle(
                                    productEnqiFrom.tab === "Product Inquiry"
                                )}
                                onClick={() => handleTabChange("Product Inquiry")}
                            >
                                Product Inquiry
                            </button>
                            <button
                                type="button"
                                style={tabBtnStyle(
                                    productEnqiFrom.tab === "Become Our Distributor"
                                )}
                                onClick={() =>
                                    handleTabChange("Become Our Distributor")
                                }
                            >
                                Become Our Distributor
                            </button>
                        </div>
                    </div>
                    {productEnqiFrom.tab === "Product Inquiry" && (
                        <Form.Group className="mb-3">
                            <Form.Label>
                                PRODUCT INQUIRY{" "}
                                <span style={{ color: "#da251d" }}>*</span>
                            </Form.Label>

                        </Form.Group>
                    )}
                    <Row>
                        <Col>
                            <CustomInput
                                label="name *"
                                type="text"
                                placeholder="Full Name"
                                name="Full Name"
                                value={productEnqiFrom.name}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, name: val })}
                                required
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="EMAIL *"
                                type="email"
                                name="email"
                                value={productEnqiFrom.email}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, email: val })}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CustomInput
                                label="mobile *"
                                type="mobile"
                                name="mobile"
                                value={productEnqiFrom.mobile}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, mobile: val })}
                                required
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="COMPANY NAME *"
                                type="text"
                                name="company"
                                value={productEnqiFrom.company_name}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, company_name: val })}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CustomInput
                                label="country"
                                type="text"
                                name="country"
                                value={productEnqiFrom.country}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, country: val })}
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="state"
                                type="text"
                                name="state"
                                value={productEnqiFrom.state}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, state: val })}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CustomInput
                                label="CITY"
                                type="text"
                                name="city"
                                value={productEnqiFrom.city}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, city: val })}
                            />
                        </Col>
                        <Col>
                            <CustomInput
                                label="zipcode"
                                type="text"
                                name="zipcode"
                                value={productEnqiFrom.zipcode}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, zipcode: val })}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CustomInput
                                label="COMMENTS"
                                as="textarea"
                                name="comments"
                                value={productEnqiFrom.message}
                                onChange={(val) => setproductEnqiFrom({ ...productEnqiFrom, message: val })}
                                rows={2}
                            />
                        </Col>
                    </Row>

                    <Button
                        variant="danger"
                        style={{
                            fontWeight: 700,
                            fontSize: 18,
                            padding: "10px 40px",
                            borderRadius: 2,
                            marginTop: 10,
                            width: "100%",
                        }}
                        onClick={Validate_Function}
                        disabled={!isLoading} // Disable button during submission
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

export default EnquiryModal;
