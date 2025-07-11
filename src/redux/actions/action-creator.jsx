import axiosInstance from "../../api/axiosInstance";
import { GET_BANNER_FAILURE, GET_BANNER_REQUEST, GET_BANNER_SUCCESS, GET_CAREER_FORM_FAILURE, GET_CAREER_FORM_REQUEST, GET_CAREER_FORM_SUCCESS, GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_COMMENT_DATA_LIST_FAILURE, GET_COMMENT_DATA_LIST_REQUEST, GET_COMMENT_DATA_LIST_SUCCESS, GET_CONTACT_FORM_FAILURE, GET_CONTACT_FORM_REQUEST, GET_CONTACT_FORM_SUCCESS, GET_ENQUIRIES_FORM_FAILURE, GET_ENQUIRIES_FORM_REQUEST, GET_ENQUIRIES_FORM_SUCCESS, GET_PRODUCT_CATEGORY_FAILURE, GET_PRODUCT_CATEGORY_REQUEST, GET_PRODUCT_CATEGORY_SUCCESS, GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCTLIST_FAILURE, GET_PRODUCTLIST_REQUEST, GET_PRODUCTLIST_SUCCESS, GET_RATING_FORM_FAILURE, GET_RATING_FORM_REQUEST, GET_RATING_FORM_SUCCESS, GET_SUB_CATEGORY_PRODUCT_FAILURE, GET_SUB_CATEGORY_PRODUCT_REQUEST, GET_SUB_CATEGORY_PRODUCT_SUCCESS, GET_SUBCATEGORY_FAILURE, GET_SUBCATEGORY_REQUEST, GET_SUBCATEGORY_SUCCESS } from "./action-types";

// Product Actions

// get BANNER 
// ... (imports)

export function getbaneer() {
    return async (dispatch) => {
        dispatch({ type: GET_BANNER_REQUEST });
        // console.log("get BANNER");
        try {
            const response = await axiosInstance.get('/banners');
            const responseJson = response?.data;

            if (responseJson?.status) {
                dispatch({ type: GET_BANNER_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_BANNER_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_BANNER_FAILURE, payload: e });
            console.error("Error fetching BANNER:", e);
            return Promise.reject(e);
        }
    };
}


export function getCategoies() {
    return async (dispatch) => {
        dispatch({ type: GET_CATEGORY_REQUEST });
        try {
            const response = await axiosInstance.get('/categories');
            const responseJson = response?.data;

            if (responseJson?.status) {
                dispatch({ type: GET_CATEGORY_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_CATEGORY_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_CATEGORY_FAILURE, payload: e });
            console.error("Error fetching categories :", e);
            return Promise.reject(e);
        }
    };
}

// get SUBCATEGORY
export function getSubCategoies() {
    return async (dispatch) => {
        dispatch({ type: GET_SUBCATEGORY_REQUEST });
        try {
            const response = await axiosInstance.get('/subcategories');
            const responseJson = response?.data;

            if (responseJson?.status) {
                // console.log("SUBcategories List print :", responseJson.data);
                dispatch({ type: GET_SUBCATEGORY_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_SUBCATEGORY_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_SUBCATEGORY_FAILURE, payload: e });
            console.error("Error fetching Subcategories :", e);
            return Promise.reject(e);
        }
    };
}


// get Product 
export function getProduct() {
    return async (dispatch) => {
        dispatch({ type: GET_PRODUCTLIST_REQUEST });
        try {
            const response = await axiosInstance.get('/products');
            const responseJson = response?.data;
            // console.log(response?.data);

            if (responseJson?.status) {
                // console.log("Product List print :", responseJson.data);
                dispatch({ type: GET_PRODUCTLIST_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_PRODUCTLIST_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_PRODUCTLIST_FAILURE, payload: e });
            console.error("Error fetching all product list :", e);
            return Promise.reject(e);
        }
    };
}

// get product details 
export function getProductDetails(id) {
    return async (dispatch) => {
        dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
        try {
            const response = await axiosInstance.get(`/products/${id}`);
            const responseJson = response?.data;
            console.log(response?.data);

            if (responseJson?.status) {
                // console.log("Product Details :", responseJson.data);
                dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_PRODUCT_DETAILS_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_PRODUCT_DETAILS_FAILURE, payload: e });
            console.error("Error fetching product details :", e);
            return Promise.reject(e);
        }
    };
}

// get Sub Category Product
export function getSubCategoryProduct(id) {
    return async (dispatch) => {
        dispatch({ type: GET_SUB_CATEGORY_PRODUCT_REQUEST });
        try {
            // Modified API call to use subcategoryId as a query parameter
            const response = await axiosInstance.get(`/products?subcategoryId=${id}`);
            const responseJson = response?.data;


            if (responseJson?.status) {
                // console.log("SUb category product list :", responseJson.data);
                dispatch({ type: GET_SUB_CATEGORY_PRODUCT_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_SUB_CATEGORY_PRODUCT_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_SUB_CATEGORY_PRODUCT_FAILURE, payload: e });
            console.error("Error fetching sub category product list Api :", e);
            return Promise.reject(e);
        }
    };
}

// get product details 
export function getProductCategory(categoryId = "") {
    return async (dispatch) => {
        dispatch({ type: GET_PRODUCT_CATEGORY_REQUEST });
        try {
            const url = categoryId
                ? `/products?categoryId=${categoryId}`
                : `/products`;

            const response = await axiosInstance.get(url);
            const responseJson = response?.data;

            if (responseJson?.status) {
                dispatch({ type: GET_PRODUCT_CATEGORY_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_PRODUCT_CATEGORY_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_PRODUCT_CATEGORY_FAILURE, payload: e });
            return Promise.reject(e);
        }
    };
}


// User enquiries
export function enquiries(data) {
    return async (dispatch) => {
        dispatch({ type: GET_ENQUIRIES_FORM_REQUEST });
        try {
            var response = await axiosInstance.post(`/enquiries`, data);
            var responseJson = response.data;
            // console.log(response?.data);
            if (responseJson?.status) {
                dispatch({ type: GET_ENQUIRIES_FORM_SUCCESS, payload: responseJson });
                return Promise.resolve(responseJson)
            } else {
                dispatch({ type: GET_ENQUIRIES_FORM_FAILURE, payload: responseJson });
                return Promise.reject(responseJson)
            }
        } catch (error) {
            dispatch({ type: GET_ENQUIRIES_FORM_FAILURE, payload: error });
            console.log("Catch Error ENQ API ===> ", error);
            return Promise.reject(error)
        }
    };
}


// User contactForm
export function contactForm(data) {
    return async (dispatch) => {
        dispatch({ type: GET_CONTACT_FORM_REQUEST });
        try {
            var response = await axiosInstance.post(`/contacts`, data);
            var responseJson = response.data;
            // console.log("Contact Form Response ===> ", responseJson);
            if (responseJson?.status) {
                dispatch({ type: GET_CONTACT_FORM_SUCCESS, payload: responseJson });
                return Promise.resolve(responseJson)
            } else {
                dispatch({ type: GET_CONTACT_FORM_FAILURE, payload: responseJson });
                return Promise.reject(responseJson)
            }
        } catch (error) {
            dispatch({ type: GET_CONTACT_FORM_FAILURE, payload: error });
            console.log("Catch Error Contact Form API ===> ", error);
            return Promise.reject(error)
        }
    };
}

// Career form data
export function careerData(data) {
    return async (dispatch) => {
        dispatch({ type: GET_CAREER_FORM_REQUEST });
        try {
            const isFormData = data instanceof FormData;

            const response = await axiosInstance.post(`/applications`, data, {
                headers: isFormData ? {} : { 'Content-Type': 'application/json' },
            });

            const responseJson = response.data;

            if (responseJson?.status) {
                dispatch({ type: GET_CAREER_FORM_SUCCESS, payload: responseJson });
                return Promise.resolve(responseJson);
            } else {
                dispatch({ type: GET_CAREER_FORM_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (error) {
            dispatch({ type: GET_CAREER_FORM_FAILURE, payload: error });
            console.log("Catch Error Career API ===> ", error);
            return Promise.reject(error);
        }
    };
}



// Rating  data
export function ratings(data) {
    return async (dispatch) => {
        dispatch({ type: GET_RATING_FORM_REQUEST });
        try {
            var response = await axiosInstance.post(`/ratings`, data);
            var responseJson = response.data;
            // console.log(response?.data);
            if (responseJson?.status) {
                dispatch({ type: GET_RATING_FORM_SUCCESS, payload: responseJson });
                return Promise.resolve(responseJson)
            } else {
                dispatch({ type: GET_RATING_FORM_FAILURE, payload: responseJson });
                return Promise.reject(responseJson)
            }
        } catch (error) {
            dispatch({ type: GET_RATING_FORM_FAILURE, payload: error });
            console.log("Catch Error RATING API ===> ", error);
            return Promise.reject(error)
        }
    };
}


// comment data list
export function commentdatalist() {
    return async (dispatch) => {
        dispatch({ type: GET_COMMENT_DATA_LIST_REQUEST });
        try {
            const response = await axiosInstance.get('/ratings');
            const responseJson = response?.data;

            if (responseJson?.status) {
                dispatch({ type: GET_COMMENT_DATA_LIST_SUCCESS, payload: responseJson.data });
                return Promise.resolve(responseJson.data);
            } else {
                dispatch({ type: GET_COMMENT_DATA_LIST_FAILURE, payload: responseJson });
                return Promise.reject(responseJson);
            }
        } catch (e) {
            dispatch({ type: GET_COMMENT_DATA_LIST_FAILURE, payload: e });
            console.error("Error fetching commnet data list :", e);
            return Promise.reject(e);
        }
    };
}