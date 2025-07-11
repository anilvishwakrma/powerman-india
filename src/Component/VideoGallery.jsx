import React, { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import Slider from 'react-slick';
// import './FancyboxVideoSlider.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { FaRegCirclePlay } from "react-icons/fa6";

const videos = [
    {
        thumbnail: 'https://i.ytimg.com/vi/IR3NJ_7Q3uw/hqdefault.jpg',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
        thumbnail: 'https://bsmindia.com/wp-content/uploads/2023/07/69E-11-1-600x600.png',
        video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    },
    {
        thumbnail: 'https://kaishanusa.com/wp-content/uploads/2022/10/shutterstock_1166257759-1-scaled.jpg',
        video: 'https://player.vimeo.com/video/76979871',
    },
    {
        thumbnail: 'https://media.istockphoto.com/id/1311148115/photo/power-plant-pipes.jpg?s=612x612',
        video: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    },
];

const FancyboxVideoSlider = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="video-gallery"]', {
            dragToClose: false,
            autoFocus: false,
        });

        return () => Fancybox.destroy();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 3 } },
        ],
    };

    return (
        <div className="container comny_viedo_gallry_s">
            <Slider {...settings}>
                {videos.map((vid, index) => (
                    <div key={index} className="gallery_box">
                        <a
                            href={vid.video}
                            data-fancybox="video-gallery"
                            className="video-thumb-wrapper"
                        >
                            <img
                                src={vid.thumbnail}
                                alt={`Video ${index + 1}`}
                                className="video-thumb-img"
                            />
                            <div className="video-overlay">
                                <span className="play-icon"><FaRegCirclePlay /></span>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FancyboxVideoSlider;
