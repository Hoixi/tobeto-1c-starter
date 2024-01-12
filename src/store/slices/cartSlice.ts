import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {cartItems: JSON.parse(localStorage.getItem("cart")!) || []},
    reducers: {
        addToCart: (state, action) => { 
            state.cartItems.push(action.payload);
            localStorage.setItem("cart",JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => { 
            state.cartItems = state.cartItems.filter(
              (item:any) => item.id !== action.payload.id  
            );
        },
        clearCart: (state, action) => { 

        }
    }
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;