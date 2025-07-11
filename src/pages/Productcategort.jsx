import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Link, Links } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getCategoies, getProduct, getProductCategory } from '../redux/actions/action-creator';
import axios from '../api/axiosInstance';
import Button from '../Component/custombutton';
import CustomBanner from '../Component/custombaneer';


const Product = () => {
    const dispatch = useDispatch();
    // const { loading, setLoading } = useState(true);
    const { productlist = [], categorylist = [], productcategorylist = [] } = useSelector(state => state.common);
    const [bannerData, setBannerData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulating API call
        setTimeout(() => {
            setBannerData({
                imageUrl: 'https://www.airpro.net/wp-content/uploads/2021/10/air-compressors-banner.jpg',
                heading: 'Products',
                text: 'High-quality solutions for every need',
                links: [
                    { label: 'Home', path: '/' },
                    { label: 'Products', path: '/products' },
                ],
            });
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        dispatch(getProduct());
        dispatch(getCategoies());
        dispatch(getProductCategory(""));
    }, [dispatch]);

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(getCategoies());
        // initial: fetch all products
    }, [dispatch]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        dispatch(getProductCategory(categoryId));
    };


    return (
        <div style={{ backgroundColor: '#f5f7fa' }}>
            <CustomBanner
                imageUrl={bannerData?.imageUrl}
                heading={bannerData?.heading}
                text={bannerData?.text}
                links={bannerData?.links}
                loading={loading}
            />
            <div className="container-fluid p-0 position-relative" style={{ display: 'none' }}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: "relative" }}
                >
                    <img
                        src="https://picsum.photos/1920/400"
                        alt="Product Banner"
                        className="img-fluid w-100"
                        style={{ objectFit: 'cover', maxHeight: '400px', minHeight: '220px' }}
                    />
                    {/* Banner Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="position-absolute top-50 start-50 translate-middle text-white fw-bold"
                        style={{
                            fontSize: "2.5rem",
                            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
                            letterSpacing: "2px"
                        }}
                    >
                        Product
                    </motion.h1>
                    {/* Breadcrumb inside banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="position-absolute start-50 translate-middle-x"
                        style={{
                            bottom: "30px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textAlign: "center"
                        }}
                    >
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center bg-transparent m-0 p-0">
                                <li className="breadcrumb-item">
                                    <motion.span whileHover={{ scale: 1.08 }}>
                                        <Link to="/" className="text-decoration-none text-light fw-semibold">
                                            Home
                                        </Link>
                                    </motion.span>
                                </li>
                                <li className="breadcrumb-item active text-light" aria-current="page">
                                    Product
                                </li>
                            </ol>
                        </nav>
                    </motion.div>
                </motion.div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="container my-5">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3 mb-4">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="p-4 rounded sidebar-sticky-scroll"
                            style={{
                                minHeight: 350,
                                background: "#fff",
                                boxShadow: "0 8px 32px rgba(80,80,200,0.10), 0 1.5px 6px rgba(0,0,0,0.06)",
                                position: "sticky",
                                top: "90px",
                                zIndex: 2
                            }}
                        >

                            {/* Category Filter */}
                            <div>
                                <h1
                                    style={{
                                        borderBottom: "1px solid #e9ecef",
                                        marginBottom: "10px",
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        color: "#000",
                                        padding: "10px 0",
                                        textTransform: "uppercase",
                                    }}
                                    className="form-label fw-semibold">Category</h1>
                                <ul className="product_cate_list_main">
                                    <li>
                                        <Link onClick={() => handleCategoryClick("")} className={!selectedCategory ? "fw-bold text-primary" : ""}>
                                            All
                                        </Link>
                                    </li>

                                    {categorylist.map(cat => (
                                        <li key={cat._id}>
                                            <Link onClick={() => handleCategoryClick(cat._id)} className={selectedCategory === cat._id ? "fw-bold text-primary" : ""}>
                                                {cat?.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                    {/* Product List */}
                    <div className="col-lg-9">
                        <div className="row">
                            {productlist.length === 0 && (
                                <div className="col-12 text-center py-5">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-muted"
                                    >
                                        No products found.
                                    </motion.div>
                                </div>
                            )}
                            {/* {productlist.map((item, idx) => ( */}
                            {(selectedCategory ? productcategorylist : productlist).map((item, idx) => (
                                <motion.div
                                    className="col-md-6 col-lg-4 mb-4"
                                    key={item.id}
                                    data-aos="zoom-in"
                                    data-aos-delay={`${100 + idx * 100}`} // Delay: 100ms, 200ms, 300ms...
                                    data-aos-duration="00"
                                >
                                    <motion.div
                                        className="card h-100 shadow-sm border-0"
                                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                        whileHover={{
                                            scale: 1.04,
                                            boxShadow: "0 8px 32px rgba(80,80,200,0.12)",
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ delay: idx * 0.08, duration: 0.4, type: "spring" }}
                                    >
                                        <motion.img
                                            src={`${axios.defaults.baseIMG}${item.image}`} alt={item.name}
                                            className="card-img-top"
                                            style={{
                                                height: "250px",
                                                objectFit: "cover",
                                                borderRadius: "10px 10px 0 0"
                                            }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title fw-bold">{item.name || "Product Name"}</h5>
                                            <p className="card-text flex-grow-1">{item.description}</p>
                                            <Button
                                                className="view-details"
                                                to={`/product-details/${item._id}`}
                                                label='View Details'
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
