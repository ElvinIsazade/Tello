import {createSlice} from "@reduxjs/toolkit";
import {fetchBasketData,addProductBasket,emptyBasket,removeProductBasket,updateProductBasket} from "./actions/basketActions";
const initState = {
    errors : null,
    basketData : {},
    loading : false
}


export const basketSlice = createSlice({
    name : "basket",
    initialState : initState,
    extraReducers :{

        [fetchBasketData.pending] : (state) =>{
            state.loading = true;
        },
        [fetchBasketData.rejected] : (state,payload) =>{
            state.loading = false;
            state.errors=payload
        },

        [fetchBasketData.fulfilled] : (state,{payload}) =>{
            state.loading=false;
            state.basketData = payload;
        },

        [addProductBasket.fulfilled] : (state,{payload}) =>{
            state.basketData = payload;
            console.log(state.basketData);
        },



        [emptyBasket.pending] : (state) => {
            state.loading = true
        },

        [emptyBasket.rejected] : (state, payload) => {
            state.loading = false
            state.errors = payload
        },


        [emptyBasket.fulfilled] : (state,{payload}) =>{
            state.loading = false
            state.basketData = payload
        },



        [removeProductBasket.pending] : (state) =>{
            state.loading = true
        },
        [removeProductBasket.rejected] : (state,payload) =>{
            state.loading = false
            state.errors=payload
        },
        [removeProductBasket.fulfilled] : (state,{payload}) =>{
            state.loading = false
            state.basketData = payload
        },



        [updateProductBasket.pending] : (state) =>{
            state.loading = true
        },
        [updateProductBasket.rejected] : (state,payload) =>{
            state.loading = false
            state.errors=payload
        },
        [updateProductBasket.fulfilled] : (state,{payload}) =>{
            state.loading = false
            state.basketData = payload
        }
    }
})

export default basketSlice.reducer

