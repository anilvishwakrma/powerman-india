import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategoryProduct } from '../redux/actions/action-creator';
import { useParams, useSearchParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../Component/custombutton';
import axiosInstance from '../api/axiosInstance';
import DOMPurify from 'dompurify';
import CustomBanner from '../Component/custombaneer';
import EnquiryModal from './Products/EnquiryModal';
import INNER_BANNER from '../assets/imases/ineer_baneer.jpg'

const SubCategoryProduct = () => {
    const { subCategoryId } = useParams();
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('categoryId');
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const dispatch = useDispatch();
    const { subcategoryproductlist } = useSelector((state) => state.common);



    useEffect(() => {
        if (subCategoryId) {
            dispatch(getSubCategoryProduct(subCategoryId));
        }
    }, [dispatch, subCategoryId]);

    const cleanDescription = (html) => {
        if (!html) return '';
        return html
            .replace(/contenteditable="false"/g, '')
            .replace(/class="ql-ui"/g, '')
            .replace(/spellcheck="false"/g, '');
    };

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
            <CustomBanner
                imageUrl={INNER_BANNER}
                heading='Sub Category Products'
                text='Explore our wide range of sub-category products tailored to meet your specific needs.'
                links={[
                    { label: 'View All Products', path: '/all-products' },
                    { label: 'Contact Us', path: '/contact' }
                ]}
            />
            <div className='home_product'>
                <Container>
                    {subcategoryproductlist?.length > 0 ? (
                        subcategoryproductlist.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const delay = index * 100;

                            const imageCol = (
                                <Col
                                    key={`image-${item._id}`}
                                    data-aos={isEven ? 'fade-right' : 'fade-left'}
                                    data-aos-delay={delay}
                                >
                                    <div className='home_product_list_img'>
                                        <img
                                            src={`${axiosInstance.defaults.baseIMG}${item.image}`}
                                            alt={item.name}
                                        />
                                    </div>
                                </Col>
                            );

                            const contentCol = (
                                <Col
                                    key={`content-${item._id}`}
                                    data-aos={isEven ? 'fade-left' : 'fade-right'}
                                    data-aos-delay={delay + 100}
                                >
                                    <div className='home_product_list_content'>
                                        {/* <h3>{item.name}</h3> */}
                                        {/* <h3> <span dangerouslySetInnerHTML={{ __html: item.name }}></span></h3> */}
                                        <h3 dangerouslySetInnerHTML={{ __html: item.name }}></h3>
                                        <p>{renderDescription(item.description)}</p>
                                        <div className='home_product_list_content_btn'>
                                            <div className='butoon_new_Add_butn'>
                                                <Button to={`/product-details/${item._id}`} label='KNOW MORE' />
                                            </div>
                                            <Button
                                                label='Enquire Now'
                                                className='enquire-now-button'
                                                onClick={() => {
                                                    setSelectedProduct(item);
                                                    setShowModal(true);
                                                }}
                                            />


                                        </div>
                                    </div>
                                </Col>
                            );

                            return (
                                <div
                                    className='home_product_list'
                                    key={item._id}
                                    data-aos="fade-up"
                                    data-aos-delay={delay}
                                >
                                    <Row>
                                        {isEven ? (
                                            <>
                                                {imageCol}
                                                {contentCol}
                                            </>
                                        ) : (
                                            <>
                                                {contentCol}
                                                {imageCol}
                                            </>
                                        )}
                                    </Row>
                                </div>
                            );
                        })
                    ) : (
                        <p data-aos="fade-in" data-aos-duration="800"></p>
                    )}
                    <EnquiryModal
                        show={showModal}
                        handleClose={() => setShowModal(false)}
                        productId={selectedProduct?._id}
                        productName={selectedProduct?.name}
                    />
                </Container>
            </div>
        </>
    );
};

export default SubCategoryProduct;
