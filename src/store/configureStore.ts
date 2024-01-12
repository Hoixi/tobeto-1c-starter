import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";

const rootReducer = combineReducers({
    cart: cartReducer
});

export const globalStore = configureStore({

    reducer:rootReducer
});