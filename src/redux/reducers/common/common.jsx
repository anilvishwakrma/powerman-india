// ... (imports)

import { GET_BANNER_FAILURE, GET_BANNER_REQUEST, GET_BANNER_SUCCESS, GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_COMMENT_DATA_LIST_FAILURE, GET_COMMENT_DATA_LIST_REQUEST, GET_COMMENT_DATA_LIST_SUCCESS, GET_PRODUCT_CATEGORY_FAILURE, GET_PRODUCT_CATEGORY_REQUEST, GET_PRODUCT_CATEGORY_SUCCESS, GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCTLIST_FAILURE, GET_PRODUCTLIST_REQUEST, GET_PRODUCTLIST_SUCCESS, GET_SUB_CATEGORY_PRODUCT_FAILURE, GET_SUB_CATEGORY_PRODUCT_REQUEST, GET_SUB_CATEGORY_PRODUCT_SUCCESS, GET_SUBCATEGORY_FAILURE, GET_SUBCATEGORY_REQUEST, GET_SUBCATEGORY_SUCCESS } from "../../actions/action-types"

const initialState = {
    lang: "en", isRTL: false,
    bannerlist: [],
    categorylist: [],
    subcategorylist: [],
    productlist: [],
    productdetails: [],
    productcategorylist: [],
    commnetlist: [],
}

export const common = (state = initialState, { type, payload }) => { // Note: `common` is not `commonReducer`
    switch (type) {

        // === Banner lis ===
        case GET_BANNER_REQUEST:
            return {
                ...state,
            }
        case GET_BANNER_SUCCESS:
            return {
                ...state,
                bannerlist: payload || [],
            }
        case GET_BANNER_FAILURE:
            return {
                ...state, bannerlist: []
            }

        // === Category lis ===
        case GET_CATEGORY_REQUEST:
            return {
                ...state,
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categorylist: payload || [],
            }
        case GET_CATEGORY_FAILURE:
            return {
                ...state, categorylist: []
            }

        // === SubCategory lis ===
        case GET_SUBCATEGORY_REQUEST:
            return {
                ...state,
            }
        case GET_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                subcategorylist: payload || [],
            }
        case GET_SUBCATEGORY_FAILURE:
            return {
                ...state, subcategorylist: []
            }

        // === SubCategory lis ===
        case GET_PRODUCTLIST_REQUEST:
            return {
                ...state,
            }
        case GET_PRODUCTLIST_SUCCESS:
            return {
                ...state,
                productlist: payload || [],
            }
        case GET_PRODUCTLIST_FAILURE:
            return {
                ...state, productlist: []
            }

        // === Product details ===
        case GET_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
            }
        case GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                productdetails: payload || [],
            }
        case GET_PRODUCT_DETAILS_FAILURE:
            return {
                ...state, productlist: []
            }

        // === Product Cateory list ===
        case GET_PRODUCT_CATEGORY_REQUEST:
            return {
                ...state,
            }
        case GET_PRODUCT_CATEGORY_SUCCESS:
            return {
                ...state,
                productcategorylist: payload || [],
            }
        case GET_PRODUCT_CATEGORY_FAILURE:
            return {
                ...state, productlist: []
            }

        // ===  sub category product list ===
        case GET_SUB_CATEGORY_PRODUCT_REQUEST:
            return {
                ...state,
            }
        case GET_SUB_CATEGORY_PRODUCT_SUCCESS:
            return {
                ...state,
                subcategoryproductlist: payload || [],
            }
        case GET_SUB_CATEGORY_PRODUCT_FAILURE:
            return {
                ...state, subcategoryproductlist: []
            }

        // ===  Commmnet data list ===
        case GET_COMMENT_DATA_LIST_REQUEST:
            return {
                ...state,
            }
        case GET_COMMENT_DATA_LIST_SUCCESS:
            return {
                ...state,
                commnetlist: payload || [],
            }
        case GET_COMMENT_DATA_LIST_FAILURE:
            return {
                ...state,
            }


        default:
            return state
    }
}