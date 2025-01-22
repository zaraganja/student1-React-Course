import { createSlice } from "@reduxjs/toolkit";

const basketNumSlice = createSlice({
    name: 'basketNum',
    initialState:{ basketNum:0 },
    reducers:{
        setbasketNum:(state,action)=>{
         state.basketNum=action.payload;
        },
        clearbasketNum:(state)=>{
            state.basketNum= '';
        }
    }
})

export const { setbasketNum,clearbasketNum}=basketNumSlice.actions;

export const basketNumReducer= basketNumSlice.reducer;