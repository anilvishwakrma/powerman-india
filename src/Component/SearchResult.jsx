import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosInstance from '../api/axiosInstance';
import Notfound from '../assets/imases/NoProduct.jpg'

const SearchResult = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q") || "";
    const { productlist = [] } = useSelector((state) => state.common);

    const filteredProducts = productlist.filter((product) =>
    (product.name?.toLowerCase().includes(query.toLowerCase()) ||
        product.description?.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className='search_product_list'>
            <div className="container ">
                {/* <h2 className="text-center mb-4">
                Search Results for "<span className="text-primary">{query}</span>"
            </h2> */}

                {filteredProducts.length === 0 ? (
                    <div className='product_not_fpund'>
                        <img src={Notfound} />
                    </div>
                ) : (
                    <div className="row g-4">
                        {filteredProducts.map((product) => (
                            <div className="col-lg-4 col-md-6 col-12" key={product._id}>
                                <Link
                                    to={`/product-details/${product._id}`}
                                    className="text-decoration-none text-dark"
                                >
                                    <div className="card h-100  border-0">
                                        <img
                                            src={`${axiosInstance.defaults.baseIMG}${product.image}`}
                                            alt={product.name}
                                            className="card-img-top object-fit-cover"
                                            style={{ height: '220px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            {/* <h5 >{product.name}</h5> */}
                                            <h5 className="card-title" dangerouslySetInnerHTML={{ __html: product.name }}></h5>

                                            <p
                                                className="card-text text-muted"
                                                style={{ fontSize: '14px' }}
                                                dangerouslySetInnerHTML={{ __html: product.description?.slice(0, 100) }}></p>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>

    );
};

export default SearchResult;
