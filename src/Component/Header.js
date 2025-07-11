import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import { motion } from "framer-motion";
import logo from '../assets/imases/PMpng.png';
import { CiSearch } from "react-icons/ci";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoies, getProduct, getSubCategoies } from '../redux/actions/action-creator';
import LanguageDropdown from './LanguageDropdown';
import GoogleTranslate from './GoogleTranslate';

// Helper function to create a URL friendly slug
const slugify = (text) => {
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { categorylist = [], subcategorylist = [], productlist = [] } = useSelector(state => state.common);

    const [showSearchInput, setShowSearchInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        dispatch(getCategoies());
        dispatch(getSubCategoies());
        dispatch(getProduct());
    }, [dispatch]);
    // console.table('header==============', productlist)
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Insert Product menu after Home and before Company
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Company", path: "/Company" },
        { name: "Product", path: "/products", isProduct: true },
        { name: "Technology", path: "/technology" },
        { name: "Service support", path: "/service" },
        { name: "CAREERS", path: "/Career" },
    ];


    // Close menu on navigation (optional)
    const handleNavClick = () => setMenuOpen(false);

    return (
        <Navbar expand="lg" className={`custom-navbar${scrolled ? ' scrolled' : ''}`} >
            <Container fluid>
                <div className='main_header'>
                    <div className='header_logo_main'>
                        <Navbar.Brand className="fw-bold text-primary fs-4">
                            <Link to="/">
                                <motion.img
                                    className='header_logo'
                                    src={logo}
                                    alt="Logo"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </Link>
                        </Navbar.Brand>
                    </div>
                    <div className='header_menu_bars'>
                        {/* Hamburger Toggle */}
                        <button
                            className={`navbar-toggler${menuOpen ? ' collapsed' : ''}`}
                            type="button"
                            aria-controls="navbar-nav"
                            aria-expanded={menuOpen}
                            aria-label="Toggle navigation"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='top_header'>
                            <ul>
                                <li >
                                    <motion.div
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            setShowSearchInput((prev) => !prev);
                                            setSearchQuery(''); // reset search
                                        }}
                                    >
                                        {!showSearchInput && (
                                            <CiSearch style={{ fontSize: 24, color: "#000", fontWeight: 600 }} />
                                        )}
                                    </motion.div>


                                    {showSearchInput && (
                                        <div className="search_input_header">
                                            <input
                                                type="text"
                                                placeholder="Search product"
                                                autoFocus
                                                value={searchQuery}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setSearchQuery(value);
                                                    if (value.length >= 3) {
                                                        navigate(`/search?q=${value}`);
                                                    }
                                                }}
                                            />
                                            <div className="input-wrapper">
                                                <span
                                                    className="close-icon"
                                                    onClick={() => {
                                                        setSearchQuery('');
                                                        setShowSearchInput(false); // 👈 hides the input
                                                        navigate('/');             // 👈 redirects to homepage
                                                    }}
                                                >
                                                    &times;
                                                </span>
                                            </div>
                                        </div>
                                    )}


                                </li>
                                <li>
                                    <Link to="/contact" >Contacts</Link>
                                </li>
                                {/* <li> <LanguageDropdown /></li> */}
                                <li><GoogleTranslate /></li>
                            </ul>
                        </div>
                        <Navbar.Collapse id="navbar-nav" className={menuOpen ? "show" : ""}>
                            <Nav className="ms-auto align-items-center">
                                <div className="d-flex flex-lg-row flex-column">
                                    {menuItems.map((item, idx) => {
                                        if (item.isProduct) {
                                            // Product dropdown with categories and subcategories from API
                                            return (
                                                <motion.div
                                                    key={item.name}
                                                    className="reposnive_drop nav-animate dropdown-hover position-relative"
                                                    style={{ display: "flex", alignItems: "center" }}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                                                >
                                                    <span className="nav-link dropdown-toggle">Product</span>
                                                    <ul className="dropdown-menu show-on-hover shadow-lg">
                                                        {categorylist.map((cat) => (
                                                            <li key={cat._id} className="dropdown-submenu">
                                                                <Link className="dropdown-item" onClick={handleNavClick}>
                                                                    {cat?.name}
                                                                </Link>
                                                                <ul className="dropdown-submenu-list">
                                                                    {subcategorylist
                                                                        .filter((sub) => sub.category?._id === cat._id)
                                                                        .map((sub) => (
                                                                            <li key={sub._id}>
                                                                                <Link
                                                                                    className="dropdown-item"
                                                                                    to={`/products/subcategory/${sub._id}?categoryId=${cat._id}`}
                                                                                    onClick={handleNavClick}
                                                                                >
                                                                                    {sub.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                </ul>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            );
                                        }
                                        return (
                                            <motion.div
                                                key={item.name}
                                                // whileHover={{ color: "#da251d", borderBottom: "3px solid #da251d" }}
                                                whileTap={{ scale: 0.96 }}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.1 * idx }}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <NavLink
                                                    to={item.path}
                                                    className="nav-link mx-2 nav-animate"
                                                    onClick={handleNavClick}
                                                    style={({ isActive }) =>
                                                        isActive
                                                            ? { color: "#da251d", borderBottom: "3px solid #da251d" }
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;