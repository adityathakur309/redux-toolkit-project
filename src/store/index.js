import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./slices/CartSlice";
import { productReducers } from "./slices/ProductSlice";

// configure store 
export const store = configureStore({
    reducer:{
        cart:cartReducers,
        product:productReducers,
    }
})
// end 