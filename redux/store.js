// import { createStoreHook } from "react-redux";

// import reducer from './reducers/index';

// export default function configureStore(initialState) {
//     return createStoreHook(reducer, initialState);
// }

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cartSlice'

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})