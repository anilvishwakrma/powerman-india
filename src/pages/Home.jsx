import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';

import { motion } from "motion/react"
import HomeSlider from '../Component/HomeSlider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoies, getProduct, getSubCategoies } from '../redux/actions/action-creator';
import Product from './Product';
import Productslider from './Products/Productslider';
import { Col, Container, Row } from 'react-bootstrap';
import axiosInstance from '../api/axiosInstance';
import Button from '../Component/custombutton';
import Counter from '../Component/Counter';
import GlobalFootprintSection from '../Component/GlobalFootprintStats';
import TextBackground from '../Component/TextBackground';
import bgIMG from '../assets/imases/Air compressor 15 hp powerman.JPG'
import DOMPurify from 'dompurify';
import POWORMAIN from '../assets/imases/new_img.webp';
import FloatingVideoAd from '../Component/FloatingVideoAd';
import shot1 from '../assets/video/shot1.mp4';
import GlobalFootprintStats from '../Component/GlobalFootprintStats';
import LogoSlider from '../Component/LogoSlider';

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { categorylist = [], subcategorylist = [], productlist = [] } = useSelector(state => state.common);

    useEffect(() => {
        dispatch(getCategoies());
        dispatch(getSubCategoies());
        dispatch(getProduct());
    }, [dispatch]);


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
            <HomeSlider />

            <div className='home_product'>
                <Container>
                    {productlist.length > 0 ? (
                        productlist.slice(0, 1).map((item, index) => {
                            const isEven = index % 2 === 0;
                            const imageCol = (
                                <Col key={`image-${item._id}`}>
                                    <div className='home_product_list_img'>
                                        <img
                                            src={`${axiosInstance.defaults.baseIMG}${item.image}`}
                                            alt={item.name}
                                        />
                                    </div>
                                </Col>
                            );
                            const contentCol = (
                                <Col key={`content-${item._id}`}>
                                    <div className='home_product_list_content'>
                                        <h3>{item.name}</h3>
                                        {renderDescription(item.description)}
                                        {/* <p>{item.description}</p> */}
                                        {/* <Button to={`/product-details/${item._id}`} label='VIEW PRODUCTS' /> */}
                                    </div>
                                </Col>
                            );

                            return (
                                <div className='home_product_list' key={item._id}>
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
                        <p></p>
                    )}
                </Container>
            </div>

            <div style={{ paddingBottom: '50px', }}>
                <TextBackground
                    text="powerman"
                    imageUrl={POWORMAIN}
                    className="elgi-text"
                />

                <TextBackground
                    text="india"
                    imageUrl={POWORMAIN}
                    style={{ fontSize: '8em', fontWeight: 700 }}
                />
            </div>

            {/* <GlobalFootprintSection /> */}
            <GlobalFootprintStats />
            <div className='home_banner_section'>
                <div className='home_banner__400'>
                    <Container>
                        <div className='home_banner__400_content'>
                            <h1>A RANGE OF OVER 400 <span>PRODUCTS TO SUIT</span> YOUR REQUIREMENTS</h1>
                        </div>
                    </Container>
                    <div className='home_banner__400_bg'>
                        <img src={bgIMG} />
                    </div>
                </div>
            </div>

            <div className='home_product border_buttom'>
                <Container>
                    {productlist.length > 0 ? (
                        productlist.slice(2, 3).map((item, index) => {
                            const isEven = index % 2 === 0;
                            const imageCol = (
                                <Col key={`image-${item._id}`}>
                                    <div className='home_product_list_img'>
                                        <img
                                            src={`${axiosInstance.defaults.baseIMG}${item.image}`}
                                            alt={item.name}
                                        />
                                    </div>
                                </Col>
                            );
                            const contentCol = (
                                <Col key={`content-${item._id}`}>
                                    <div className='home_product_list_content'>
                                        <h3>{item.name}</h3>
                                        {renderDescription(item.description)}
                                        {/* <p>{item.description}</p> */}
                                        <Button to={`/product-details/${item._id}`} label='VIEW PRODUCTS' />
                                    </div>
                                </Col>
                            );

                            return (
                                <div className='home_product_list' key={item._id}>
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
                        <p></p>
                    )}
                </Container>
            </div>

            <div className='home_product border_buttom'>
                <Container className='home_product_grid_6'>
                    {productlist.length > 0 ? (
                        productlist.slice(3, 5).map((item, index) => {
                            const isEven = index % 2 === 0;
                            const imageCol = (
                                <Col key={`image-${item._id}`}>
                                    <div className='home_product_list_img'>
                                        <img
                                            src={`${axiosInstance.defaults.baseIMG}${item.image}`}
                                            alt={item.name}
                                        />
                                    </div>

                                </Col>
                            );
                            const contentCol = (
                                <Col key={`content-${item._id}`}>
                                    <div className='home_product_list_content'>
                                        <h3>{item.name}</h3>
                                        {renderDescription(item.description)}
                                        {/* <p>{item.description}</p> */}
                                        <Button to={`/product-details/${item._id}`} label='VIEW PRODUCTS' />
                                    </div>
                                </Col>
                            );

                            return (
                                <div className='home_product_list' key={item._id}>
                                    <Col>
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
                                    </Col>
                                </div>
                            );
                        })
                    ) : (
                        <p></p>
                    )}
                </Container>
            </div>

            <div className='home_product border_buttom'>
                <Container>
                    {productlist.length > 0 ? (
                        productlist.slice(5, 6).map((item, index) => {
                            const isEven = index % 2 === 0;
                            const imageCol = (
                                <Col key={`image-${item._id}`}>
                                    <div className='home_product_list_img'>
                                        <img
                                            src={`${axiosInstance.defaults.baseIMG}${item.image}`}
                                            alt={item.name}
                                        />
                                    </div>
                                </Col>
                            );
                            const contentCol = (
                                <Col key={`content-${item._id}`}>
                                    <div className='home_product_list_content'>
                                        <h3>{item.name}</h3>
                                        {renderDescription(item.description)}
                                        {/* <p>{item.description}</p> */}
                                        <Button to={`/product-details/${item._id}`} label='VIEW PRODUCTS' />
                                    </div>
                                </Col>
                            );

                            return (
                                <div className='home_product_list' key={item._id}>
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
                        <p></p>
                    )}
                </Container>
            </div>

            <div className='home_product'>
                <Container className='home_product_grid_6'>
                    {productlist.length > 0 ? (
                        productlist.slice(6, 8).map((item, index) => {
                            const isEven = index % 2 === 0;
                            const imageCol = (
                                <Col key={`image-${item._id}`}>
                                    <div className='home_product_list_img'>
                                        <img
                                            src={`${axiosInstance.defaults.baseIMG}${item.image}`}
                                            alt={item.name}
                                        />
                                    </div>

                                </Col>
                            );
                            const contentCol = (
                                <Col key={`content-${item._id}`}>
                                    <div className='home_product_list_content'>
                                        <h3>{item.name}</h3>
                                        {renderDescription(item.description)}
                                        {/* <p>{item.description}</p> */}
                                        <Button to={`/product-details/${item._id}`} label='VIEW PRODUCTS' />
                                    </div>
                                </Col>
                            );

                            return (
                                <div className='home_product_list' key={item._id}>
                                    <Col>
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
                                    </Col>
                                </div>
                            );
                        })
                    ) : (
                        <p></p>
                    )}
                </Container>
            </div>

            <FloatingVideoAd videoUrl={shot1} isYouTube={false} />
            <LogoSlider />

        </>
    )
}

export default Home
