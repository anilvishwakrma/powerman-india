// redux/reducers/rootReducer.jsx
import { combineReducers } from 'redux';
import './reducers/common/common'
import { common } from './reducers/common/common';
// Agar aapne aur reducers banaye hain (e.g., productReducer), unhe yahan import aur add karein
// import productReducer from './products/index.jsx'; // Assuming a products folder/reducer

const rootReducer = combineReducers({
    // auth: authReducer,
    common: common,
    // products: productReducer, // Uncomment if you have a productReducer
    // ... other reducers
});

export default rootReducer;