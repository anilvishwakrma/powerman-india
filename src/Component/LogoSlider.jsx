import React from 'react';
import Slider from 'react-slick';
import logo1 from '../assets/imases/brand/brands.png';
import logo2 from '../assets/imases/brand/brands-2.png';
import logo3 from '../assets/imases/brand/brands-3.png';
import logo4 from '../assets/imases/brand/brands-4.png';
import logo5 from '../assets/imases/brand/brands-5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo1 }, // duplicate for smoothness
    { logo: logo2 },
    { logo: logo3 }
];

const LogoSlider = () => {
    const logoslider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                logoslider: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                logoslider: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                logoslider: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className="logo-slider-section py-5 bg-light">
            <div className="container">
                <div className='LogoSlider_heading text-center mb-4'>
                    <h2>Our Clients</h2>
                </div>
                <Slider {...logoslider}>
                    {logos.map((logo, index) => (
                        <div key={index} className="text-center px-3">
                            <img
                                src={logo.logo}
                                alt={`logo-${index}`}
                                className="img-fluid grayscale"
                                style={{ maxHeight: '60px', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default LogoSlider;
