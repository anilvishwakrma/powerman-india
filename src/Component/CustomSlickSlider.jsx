import React from 'react';
import Slider from 'react-slick';

// Custom Arrow Components (Optional, but good for custom design)
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", borderRadius: "50%", right: "25px" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", borderRadius: "50%", left: "25px", zIndex: 1 }}
            onClick={onClick}
        />
    );
};


const CustomSlickSlider = ({ slidesData }) => {
    // Slick Slider Settings
    const settings = {
        dots: true, // Show pagination dots
        infinite: true, // Loop the slider
        speed: 500, // Transition speed in ms
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Auto play the slider
        autoplaySpeed: 3000, // Speed of autoplay in ms
        cssEase: "linear", // Type of easing for animation
        arrows: true, // Show navigation arrows
        nextArrow: <NextArrow />, // Custom next arrow component
        prevArrow: <PrevArrow />, // Custom previous arrow component
        responsive: [ // Responsive settings for different screen sizes
            {
                breakpoint: 1200, // Desktop
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992, // Tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Smaller tablets and large phones
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576, // Mobile phones
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="custom-slick-slider-container">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="slick-slide-item">
                        <div className="Company_slide_content">
                            {/* Render Icon (if provided) */}
                            {slide.icon && (
                                <div className="cmpny_slider_icons">
                                    {/* You can use react-icons or directly render an SVG */}
                                    {/* Example with react-icons: <FaStar /> (after installing react-icons) */}
                                    {slide.icon}
                                </div>
                            )}

                            {/* Render Image (if provided) */}
                            {slide.image && (
                                <img src={slide.image} alt={slide.alt || "Slide Image"} className="slide-image" />
                            )}

                            {/* Render Title (if provided) */}
                            {slide.title && <h3 className="slide-title">{slide.title}</h3>}

                            {slide.price && <p className="slide-price">{slide.price}</p>}
                            {slide.description && <p className="slide-description">{slide.description}</p>}

                            {/* Render Button (if provided) */}
                            {slide.buttonText && (
                                <button className="slide-button" onClick={slide.onButtonClick}>
                                    {slide.buttonText}
                                </button>
                            )}

                            {/* Render custom children (for ultimate flexibility) */}
                            {slide.children && <div className="slide-custom-content">{slide.children}</div>}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlickSlider;