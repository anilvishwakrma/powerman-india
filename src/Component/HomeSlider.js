import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getbaneer } from '../redux/actions/action-creator';
import axios from '../api/axiosInstance';


function HomeSlider() {
    const dispatch = useDispatch();
    const { bannerlist = [] } = useSelector(state => state.common); // Accessing state.common.bannerlist

    useEffect(() => {
        dispatch(getbaneer());
    }, [dispatch]);

    // console.log('Check banner list:', bannerlist); 


    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        // autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
    };

    // Import Framer Motion
    // Animation variants
    const imageVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } }
    };

    const textVariants = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
        exit: { opacity: 0, y: 40, transition: { duration: 0.4 } }
    };

    let sliderRef = React.useRef();

    return (
        <div className="slider-container" style={{ position: 'relative' }}>
            <Slider ref={sliderRef} {...settings}>
                {bannerlist.map((slide, index) => (
                    <div key={index} className="slide">
                        {index === currentSlide ? (
                            <motion.img
                                // src={slide.image}
                                src={`${axios.defaults.baseIMG}${slide.image}`}
                                alt={`Slide ${index}`}
                                className="slider-img"
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            />
                        ) : (
                            <img
                                src={slide.img}
                                alt={`Slide ${index}`}
                                className="slider-img"
                                style={{ opacity: 0 }}
                            />
                        )}
                        <div className="slide-content-wrapper" style={{ display: 'none' }}>
                            {index === currentSlide ? (
                                <motion.div
                                    className="slide-content"
                                    variants={textVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    <h2>{slide.title}</h2>
                                    <p>{slide.desc}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.08, background: "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)", color: "#fff", boxShadow: "0 4px 20px rgba(0,123,255,0.2)" }}
                                        whileTap={{ scale: 0.96 }}
                                        style={{
                                            background: "linear-gradient(90deg, #00c6ff 0%, #007bff 100%)",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "30px",
                                            padding: "12px 32px",
                                            fontSize: "1.1rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            boxShadow: "0 2px 8px rgba(0,123,255,0.15)",
                                            transition: "all 0.3s"
                                        }}
                                    >
                                        {slide.button}
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <div className="slide-content" style={{ opacity: 0 }} />
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
            {/* Next and Previous Buttons */}
            <div
                style={{
                    position: 'absolute',
                    right: 30,
                    bottom: 30,
                    display: 'flex',
                    gap: 16,
                    zIndex: 2
                }}
            >
                {/* <motion.button
                    className="slider-prev"
                    style={{
                        background: 'rgba(255,255,255,0.85)',
                        border: 'none',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 22,
                        color: '#007bff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                    }}
                    whileHover={{ scale: 1.15, backgroundColor: "#e3f0ff" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => sliderRef.current.slickPrev()}
                    aria-label="Previous Slide"
                >
                    &#8592;
                </motion.button>
                <motion.button
                    className="slider-next"
                    style={{
                        background: 'linear-gradient(135deg, #007bff 0%, #00c6ff 100%)',
                        border: 'none',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 22,
                        color: '#fff',
                        boxShadow: '0 4px 16px rgba(0,123,255,0.18)',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                    }}
                    whileHover={{ scale: 1.18, boxShadow: "0 6px 24px rgba(0,123,255,0.25)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => sliderRef.current.slickNext()}
                    aria-label="Next Slide"
                >
                    &#8594;
                </motion.button> */}
            </div>
        </div>
    );
}

export default HomeSlider;
