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

export const selectCart = state => state.cart;

export default cartSlice.reducer;