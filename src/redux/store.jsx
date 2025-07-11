// redux/store.jsx
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // redux-thunk is now a named export
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // Apply middleware for async actions
);

export default store;