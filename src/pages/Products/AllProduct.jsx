import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { motion } from "motion/react"
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/action-creator';
import { Link } from 'react-router-dom';
import Button from '../../Component/custombutton';
import axios from '../../api/axiosInstance';

const AllProducts = () => {
    const dispatch = useDispatch();
    const { productlist = [] } = useSelector(state => state.common);

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);
    console.log(productlist);

    return (
        <section className="product-section container">
            <div className="product-header">
                <motion.h2
                    className="animate-heading"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Products
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

            <div className="product-grid">
                {productlist.map((item, index) => (
                    <motion.div
                        key={index}
                        className="product-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="img-wrapper">
                            <img src={`${axios.defaults.baseIMG}${item.image}`} alt={item.name} />
                        </div>
                        <div className='product-card_content'>
                            <h3>{item.name ? item.name : "Lorem"}</h3>
                            <p>{item.desc ? item.desc : "Lorem"}</p>
                            <Button className="view-details" to={`/product-details/${item._id}`} label='View Details ' />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default AllProducts
