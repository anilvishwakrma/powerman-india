import {
    GET_BANNER_REQUEST,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILURE,
    GET_ENQUIRIES_FORM_REQUEST,
    GET_ENQUIRIES_FORM_SUCCESS,
    GET_ENQUIRIES_FORM_FAILURE,
    GET_CONTACT_FORM_FAILURE,
    GET_CONTACT_FORM_SUCCESS,
    GET_CONTACT_FORM_REQUEST
} from "../../actions/action-types";

const initialState = {
    enqiy: null,
    Contact: null
};

const authReducer = (state = initialState, action, payload) => {
    switch (action.type) {


        // For ENQUIRIS forms
        case GET_ENQUIRIES_FORM_REQUEST:
            return {
                ...state,
            };
        case GET_ENQUIRIES_FORM_SUCCESS:
            return {
                ...state,
                enqiy: payload || [],
            };
        case GET_ENQUIRIES_FORM_FAILURE:
            return {
                ...state, userAddressList: []
            };

        // For Get Contact Form 
        case GET_CONTACT_FORM_REQUEST:
            return {
                ...state,
            };
        case GET_CONTACT_FORM_SUCCESS:
            return {
                ...state,
                Contact: payload || [],
            };
        case GET_CONTACT_FORM_FAILURE:
            return {
                ...state, userAddressList: []
            };


        // GET_BANNER_REQUEST
        case GET_BANNER_REQUEST:
            return {
                ...state, areaList: [], cityList: []
            }
        case GET_BANNER_SUCCESS:
            return {
                ...state,
            }
        case GET_BANNER_FAILURE:
            return {
                ...state, cityList: [], areaList: []
            }


        default:
            return state;
    }
};

export default authReducer;

