import { createSlice } from "@reduxjs/toolkit";

// create slice 
let initialState = [];

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            console.log("added");
            return [...state,action.payload]

        },
        remove(state,action){
            return state.filter((item) => {
                return item.id !==action.payload;
            })
        },
    }
})
// end 

// exporting action 
export const {add,remove} = CartSlice.actions;
// end 
// export reducers 
export const cartReducers = CartSlice.reducer;
// end 

