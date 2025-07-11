import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/action-creator';
import axios from '../../api/axiosInstance';
import { Container, Row, Col, Image, Card, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ArrowButton from '../../Component/custombutton'; // Note: You import ArrowButton but don't use it
import CustomBanner from '../../Component/custombaneer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Button from '../../Component/custombutton';
import EnquiryModal from './EnquiryModal';
import DOMPurify from 'dompurify'; // For sanitizing HTML
import { FaComment, FaStar } from 'react-icons/fa';
import RatingPage from '../../Component/Rating';
// import 'quill/dist/quill.snow.css'; // Import Quill CSS for styling

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productdetails } = useSelector((state) => state.common);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id]);

    const [showTable, setShowTable] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleTable = () => setShowTable((prev) => !prev);

    const shouldShow = hovered || showTable;

    const loading = !productdetails || !productdetails._id;

    const bannerProps = {
        imageUrl: productdetails?.banner || productdetails?.image ? `${axios.defaults.baseIMG}${productdetails?.banner || productdetails?.image}` : '',
        heading: productdetails?.name || 'Product Details',
        text: productdetails?.shortDescription || 'Explore product information',
        links: [
            { path: '/', label: 'Home' },
            { path: `/product-details/${id}`, label: 'Product Details' }
        ],
        loading
    };

    const [showModalRating, setShowModalRating] = useState(false);
    const [comments, setComments] = useState([
        { rating: 5, comment: "Excellent!", name: "John" },
        { rating: 4, comment: "Good product", name: "Anil" },
        { rating: 3, comment: "Average", name: "Priya" },
    ]);

    const totalRatings = comments.length;
    const avgRating =
        comments.reduce((acc, item) => acc + item.rating, 0) / totalRatings || 0;

    // Function to clean Quill-specific attributes
    const cleanDescription = (html) => {
        if (!html) return '';
        return html
            .replace(/contenteditable="false"/g, '')
            .replace(/class="ql-ui"/g, '')
            .replace(/spellcheck="false"/g, '');
    };

    // Function to sanitize and render the description
    const renderDescription = (description) => {
        const cleanedDescription = cleanDescription(description);
        const sanitizedDescription = DOMPurify.sanitize(cleanedDescription);
        return (
            <div
                className="quill-content"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
        );
    };



    return (
        <>
            {/* Banner with skeleton support */}
            <CustomBanner {...bannerProps} />

            <Container className="product-details-container py-5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <div className="product-details-header mb-4">
                        <div className='product-details-name_button'>
                            <h1>{productdetails.name}</h1>
                        </div>
                        <div className='product-details-button'>
                            <Button
                                label="Enquiry"
                                className="enquiry-button"
                                onClick={() => setShowModal(true)}
                            />
                        </div>
                    </div> */}
                    <Row>
                        {/* LEFT - Image Section */}
                        <Col md={6} data-aos="fade-right" data-aos-duration="800">
                            <div className="productdetail_img mb-4">
                                {loading ? (
                                    <Skeleton height={350} />
                                ) : (
                                    <Image
                                        src={`${axios.defaults.baseIMG}${productdetails.image}`}
                                        alt={productdetails.name}
                                        fluid
                                        className="product-main-image"
                                    />
                                )}
                            </div>
                        </Col>


                        {/* RIGHT - Content Section */}
                        <Col md={6} data-aos="fade-left" data-aos-duration="800">
                            <div className="productdetail_content">
                                {loading ? (
                                    <>
                                        <Skeleton height={32} width="60%" className="mb-3" />
                                        <Skeleton count={3} className="mb-3" />
                                        <Skeleton height={24} width="50%" className="mb-3" />
                                        <Skeleton height={40} width={130} className="mt-3" />
                                    </>
                                ) : (
                                    <>
                                        <Card.Title className="mb-3 fw-bold fs-3 product-title">
                                            {/* {renderDescription}{productdetails.name} */}
                                            <span dangerouslySetInnerHTML={{ __html: productdetails.name }}></span>
                                        </Card.Title>
                                        <Card.Text className="mb-4 text-muted product-description">
                                            {renderDescription(productdetails.description)}
                                        </Card.Text>

                                        <div className="product-actions-body mt-3">

                                            <div>
                                                {/* Summary Button */}
                                                <div
                                                    style={{ cursor: 'pointer' }}
                                                    variant="outline-primary"
                                                    onClick={() => setShowModalRating(true)}
                                                    className="d-flex align-items-center gap-2"
                                                >
                                                    <FaStar color="#ffc107" />
                                                    {avgRating.toFixed(1)} ({totalRatings} ratings)
                                                    <FaComment className="ms-3" />
                                                    {comments.length} comments
                                                </div>


                                            </div>


                                            {productdetails.productInfo && productdetails.productInfo.length > 0 && (
                                                <div className="mt-4">
                                                    <h5
                                                        className="fw-semibold mb-0 spec-heading product_table_heading"
                                                        onClick={toggleTable}
                                                        onMouseEnter={() => setHovered(true)}
                                                        onMouseLeave={() => setHovered(false)}
                                                    >
                                                        Technical Specification
                                                        <span className={`arrow-icon ${shouldShow ? 'rotate' : ''}`}>▼</span>
                                                    </h5>

                                                    {shouldShow && (
                                                        <div className="spec-table-wrapper bg-red-custom rounded">
                                                            <table className="table table-bordered table-sm mb-0 bg-white">
                                                                <thead className="table-dark">
                                                                    <tr>
                                                                        {Object.keys(productdetails.productInfo[0]).map((key, index) => (
                                                                            <th key={index}>{key}</th>
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {productdetails.productInfo.map((item, rowIndex) => (
                                                                        <tr key={rowIndex}>
                                                                            {Object.keys(item).map((key, colIndex) => (
                                                                                <td key={colIndex}>{item[key]}</td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    )}
                                                </div>
                                            )}


                                            <div className='product_details_button'>
                                                <div className='butoon_new_Add_butn'>
                                                    <Button
                                                        label="Enquiry"
                                                        // className="enquiry-button"
                                                        onClick={() => setShowModal(true)}
                                                    />

                                                </div>
                                                {productdetails.brochure && (
                                                    <Button
                                                        label=" brochure"
                                                        className="enquiry-button"
                                                        onClick={() => {
                                                            window.open(`${axios.defaults.baseIMG}${productdetails.brochure}`, '_blank');
                                                        }}
                                                    />

                                                )}



                                            </div>

                                        </div>
                                    </>
                                )}
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>

            <EnquiryModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                productId={productdetails?._id}
            />
            {/* Rating Modal */}
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
                    <RatingPage existingComments={comments} onUpdate={setComments} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ProductDetails;

