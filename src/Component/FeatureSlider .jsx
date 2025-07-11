import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const FeatureSlider = ({ features }) => {
    const FeatureSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                FeatureSlider: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                FeatureSlider: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                FeatureSlider: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="mt-5">
            <Slider {...FeatureSlider}>
                {features?.map((feature, index) => (
                    <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center px-3"
                        >
                            <div className='service_width_icons_svg mb-3'>
                                {feature.icon}
                            </div>
                            <Typography variant="subtitle1" fontWeight="600">
                                {feature.title}
                            </Typography>
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeatureSlider;
