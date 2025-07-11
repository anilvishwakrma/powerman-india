import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Component/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/style.css';
import '../assets/css/check.css';
import '../assets/css/common.css';
import Home from './Home';
import Product from './Product'; // This component will handle category/subcategory filtering
import Footer from '../Component/Footer/Footer';
import ProductDetails from './Products/ProductDetails';
import AllProducts from './Products/AllProduct';
import Contacts from './Contacts';
import { ToastContainer } from 'react-toastify';
import Services from './Services';
import ComingSoon from '../Component/ComingSoon';
import ScrollToTop from '../Component/ScrollToTop';
import Technology from './Technology';
import SubCategoryProduct from './SubCategoryProduct';
import Company from './Company';
import Career from './Career';
import ScrollToTopButton from '../Component/ScrollToTopButton';
import SearchResult from '../Component/SearchResult';



const Index = () => {
    return (
        <Router >
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/service" element={<Services />} />
                <Route path="/comingSoon" element={<ComingSoon />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/company" element={<Company />} />
                <Route path="/career" element={<Career />} />
                <Route path="/search" element={<SearchResult />} />
                <Route path="/products/subcategory/:subCategoryId" element={<SubCategoryProduct />} />
            </Routes>
            <ScrollToTopButton />
            <ToastContainer />
            <Footer />

        </Router>
    );
};

export default Index;