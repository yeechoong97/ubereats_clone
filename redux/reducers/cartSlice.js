// let defaultState = {
//     selectedItems: {
//         items: [],
//         restaurantName: '',
//     }
// }

// const cartReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART': {
//             let newState = { ...state };
//             newState.selectedItems = {
//                 items: [...newState.selectedItems.items, action.payload],
//                 restaurantName: action.payload.restaurantName
//             }

//             console.log(newState);
//             return newState;
//         }

//         default:
//             return state;
//     }
// }

// export default cartReducer;

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        restaurantName: '',
    },
    reducers: {
        addToCart: (state, action) => {
            let newState = { ...state };
            if (action.payload.checkBoxValue) {
                newState.items = [...newState.items, action.payload.item];
            } else {
                newState.items = newState.items.filter(item => item.title !== action.payload.item.title);
            }
            return newState;
        },
        selectRestaurant: (state, action) => {
            let newState = {
                ...state,
                restaurantName: action.payload
            };
            return newState;
        }
    }
})

export const { addToCart, selectRestaurant } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export default cartSlice.reducer;