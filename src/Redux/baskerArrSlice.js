import { createSlice } from "@reduxjs/toolkit";

const basketArrSlice = createSlice({
    name: 'basketArr',
    initialState: {basketArr: []},
    reducers:{
        addBasketArr: (state,action)=>{
            state.basketArr.push(action.payload)
        },
        removeBasketArr:(state,action)=>{
            state.basketArr = state.basketArr.filter(id => id !== action.payload)
        },
        clearBasketArr:(state)=>{
            state.basketArr=[]
        }
    }
})

export const {addBasketArr, removeBasketArr,clearBasketArr}=basketArrSlice.actions;
export const basketArrReducer= basketArrSlice.reducer;
