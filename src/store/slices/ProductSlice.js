import { createSlice } from "@reduxjs/toolkit";

 export let statuses = Object.freeze({
    idle: "idel",
    loading: "loading",
    error: "error"
})
// create product slice 
const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        status: statuses.idle,
    },
    reducers: {
        setProduct(state, action) {
            state.product =  [...state.product, ...action.payload]
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
})
// end 

// export acton and reducer 
export const { setProduct, setStatus } = productSlice.actions;
export const productReducers = productSlice.reducer;
// end/ 

// thunk 
export const fetchProducts = () => {

    return async (dispatch) => {
        dispatch(setStatus(statuses.loading))
        try {

            let res = await fetch('https://fakestoreapi.com/products')
            let data = await res.json();
            
            dispatch(setProduct(data))
            dispatch(setStatus(statuses.idle))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(statuses.error))

        }

    }
}
// end 