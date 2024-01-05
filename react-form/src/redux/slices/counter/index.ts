import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState : "",
    name : "userDetail",
    reducers : {
        increment : (state,value:any)=> value,
    },
})

export const {increment} = counterSlice.actions;
export default counterSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const cartslice = createSlice({

//   name: "Cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     resetCart: (state, action) => {
//         return [];
//       }
//   },
  
// });

// export const { addToCart , resetCart } = cartslice.actions;
// export default cartslice.reducer;
// twp-jssb-epo