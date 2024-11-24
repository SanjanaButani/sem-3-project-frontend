import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const { id, name, price, quantity = 1 } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                // existingItem.quantity += quantity;
                // existingItem.totalPrice += price * quantity;
                return;
            } else {
                state.items.push({
                    id,
                    name,
                    price,
                    quantity,
                    totalPrice: price * quantity,
                });
            }
            state.totalItems += quantity;
            state.totalPrice += price * quantity;
        },
        REMOVE_FROM_CART: (state, action) => {
            const { id } = action.payload;
            const itemToRemove = state.items.find((item) => item.id === id);
            if (itemToRemove) {
                state.totalItems -= itemToRemove.quantity;
                state.totalPrice -= itemToRemove.totalPrice;
                state.items = state.items.filter((item) => item.id !== id);
            }
        },
        CLEAR_CART: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    }
});

export const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = cartSlice.actions;

export default cartSlice.reducer;