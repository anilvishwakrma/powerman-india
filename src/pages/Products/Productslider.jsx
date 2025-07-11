import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/action-creator';
import { Link } from 'react-router-dom';
import Button from '../../Component/custombutton';
import axios from '../../api/axiosInstance';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Productslider = () => {
    const dispatch = useDispatch();
    const { productlist = [] } = useSelector(state => state.common);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        dispatch(getProduct()).then(() => setLoading(false));
    }, [dispatch]);

    const category = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        beforeChange: (_, newIndex) => setCurrentSlide(newIndex)
    };

    const skeletonCards = Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="all_category_card">
            <Skeleton height={200} />
            <div className='all_category_card_content'>
                <Skeleton height={24} width="60%" />
                <Skeleton count={2} />
                <Skeleton height={36} width={120} />
            </div>
        </div>
    ));

    return (
        <div className="slider-container container">
            <div className="product-header">
                <motion.h2
                    className="animate-heading"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Product
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link to="/products" className="view-all">
                        View All <span className="arrow">→</span>
                    </Link>
                </motion.div>
            </div>

            <Slider {...category} className="category_slider">
                {loading ? (
                    skeletonCards
                ) : (
                    productlist.map((item, index) => (
                        <motion.div
                            key={index}
                            className="all_category_card"
                            style={{ backgroundColor: 'red' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            data-aos="zoom-in"
                            data-aos-delay={`${100 + index * 100}`}
                            data-aos-duration="900"
                        >
                            <div className="all_category_card_img">
                                <img
                                    style={{ height: 200, width: '100%' }}
                                    src={`${axios.defaults.baseIMG}${item.image}`}
                                    alt={item.name}
                                />
                            </div>
                            <div className='all_category_card_content'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <Button to={`/product-details/${item._id}`} label='View Details' />
                            </div>
                        </motion.div>
                    ))
                )}
            </Slider>
        </div>
    );
};

export default Productslider;
