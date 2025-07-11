import React, { useState } from 'react';
import { Modal, Form, Row, Col, Tab, Nav } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { enquiries } from '../../redux/actions/action-creator';
import Button from '../../Component/custombutton';

const EnquiryModal = ({ show, handleClose, productId }) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('product');
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '', lastName: '', email: '', mobile: '', company: '',
        country: '', city: '', state: '', zip: '', comments: '',
        consent: false, productId: productId || ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const isValidMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = () => {
        const { name, lastName, email, mobile, company, country, city, state, zip, comments, consent } = form;
        if (!name || !lastName || !email || !mobile || !company || !country || !city || !state || !zip || !comments)
            return toast.error('Please fill in all fields.');
        if (!isValidEmail(email)) return toast.error('Enter a valid email.');
        if (!isValidMobile(mobile)) return toast.error('Enter a valid mobile number.');
        if (!consent) return toast.error('You must agree to the privacy policy.');

        submitForm();
    };

    const submitForm = () => {
        setIsLoading(true);
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => formData.append(key, value));

        dispatch(enquiries(formData))
            .then((res) => {
                if (res?.success) {
                    toast.success(res.message || 'Enquiry submitted!');
                    setForm({ ...form, consent: false });
                    handleClose();
                } else toast.error(res.message || 'Submission failed.');
            })
            .catch((err) => toast.error(err.message || 'Error occurred.'))
            .finally(() => setIsLoading(false));
    };

    const renderProductForm = () => (
        <motion.div key="product" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <Form>
                <Row>
                    <Col md={12}>
                        <Form.Group className="mb-2">
                            <Form.Label>Product Inquiry</Form.Label>
                            <Form.Select aria-label="PRODUCT INQUIRY" className='custom_input'>
                                <option>Open this select menu</option>
                                <option value="1">PRODUCT One</option>
                                <option value="2">PRODUCT Two</option>
                                <option value="3">PRODUCT Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control className='custom_input' name="name" value={form.name} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control className='custom_input' name="lastName" value={form.lastName} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className='custom_input' type="email" name="email" value={form.email} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control className='custom_input' name="mobile" maxLength={10} value={form.mobile} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control className='custom_input' name="company" value={form.company} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                            <Form.Label>Country</Form.Label>
                            <Form.Control className='custom_input' name="country" value={form.country} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-2">
                            <Form.Label>City</Form.Label>
                            <Form.Control className='custom_input' name="city" value={form.city} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-2">
                            <Form.Label>State</Form.Label>
                            <Form.Control className='custom_input' name="state" value={form.state} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-2">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control className='custom_input' name="zip" value={form.zip} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control className='' as="textarea" rows={3} name="comments" value={form.comments} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Check type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="me-2" />
                    <Form.Label className="mb-0">I agree to the privacy policy.</Form.Label>
                </Form.Group>

                <Button className="btn btn-primary" type="button" disabled={isLoading} onClick={validateForm}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
            </Form>
        </motion.div >
    );

    const renderDistributorContent = () => (
        <motion.div key="distributor" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius, nulla at tincidunt tincidunt,
                elit justo volutpat neque, at fermentum erat justo nec libero. Sed luctus semper velit.
            </p>
        </motion.div>
    );

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            dialogClassName="custom-enquiry-modal modal-lg-custom"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
            >
                <Modal.Header closeButton className="text-center border-0 pb-0">
                    <Modal.Title style={{ color: 'red' }} className="w-100 fw-bold fs-4">CONNECT WITH US</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className="text-center">
                        Let us help you ﬁnd the perfect solution to your needs.
                        <br /><strong>WHAT ARE YOU LOOKING FOR?*</strong>
                    </p>

                    <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                        <Nav variant="pills" className="justify-content-center mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="product">Product Inquiry</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="distributor">Become Our Distributor</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <AnimatePresence mode="wait">
                            <Tab.Content>
                                <Tab.Pane eventKey="product">{renderProductForm()}</Tab.Pane>
                                <Tab.Pane eventKey="distributor">{renderDistributorContent()}</Tab.Pane>
                            </Tab.Content>
                        </AnimatePresence>
                    </Tab.Container>
                </Modal.Body>
            </motion.div>
        </Modal>
    );
};

export default EnquiryModal;
