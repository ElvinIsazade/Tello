import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts,bestSelling,newProducts,newAccessories,fetchApple,fetchSamsung,fetchXiaomi} from "./actions/productsActions";

const initState = {
    products : [],
    bestSellingProducts : [],
    newProduct : [],
    newAccessory : [],
    appleProducts :[],
    samsungProducts : [],
    xiaomiProducts : [],
    loading : false,
    errors : null
}

export const productsSlice = createSlice({
    name : "products",
    initialState : initState,
    extraReducers :{

        [fetchProducts.pending] : (state) =>{
            state.loading=true;
        },

        [fetchProducts.rejected] : (state,payload) =>{
            state.loading = false
            state.errors=payload;
        },
        [fetchProducts.fulfilled] : (state,{payload})=>{
            state.loading = false
            state.products=payload
        },



        [bestSelling.pending] : (state) =>{
            state.loading=true;
        },


        [bestSelling.rejected] : (state,payload) =>{
            state.loading=false
            state.errors=payload;
        },
        [bestSelling.fulfilled] : (state,{payload})=>{
            state.loading=false
            state.bestSellingProducts=payload
        },



        [newProducts.pending] : (state)=>{
            state.loading=true
        },

        [newProducts.rejected] : (state,payload)=>{
            state.loading=false
            state.errors=payload
        },
        [newProducts.fulfilled] : (state,{payload})=>{
            state.loading=false
            state.newProduct=payload
        },



        [newAccessories.pending] : (state)=>{
            state.loading=true
        },
        [newAccessories.rejected] : (state,payload)=>{
            state.loading=false
            state.errors=payload
        },
        [newAccessories.fulfilled] : (state,{payload})=>{
            state.loading=false
            state.newAccessory=payload
        },


        [fetchApple.pending] : (state)=>{
            state.loading=true
        },
        
        [fetchApple.rejected] : (state,payload)=>{
            state.loading=false
            state.errors=payload
        },
        [fetchApple.fulfilled] : (state,{payload})=>{
            state.loading=false
            state.appleProducts=payload
        },


        [fetchApple.pending] : (state)=>{
            state.loading=true
        },
        
        [fetchSamsung.rejected] : (state,payload)=>{
            state.loading=false
            state.errors=payload
        },
        [fetchSamsung.fulfilled] : (state,{payload})=>{
            state.loading=false
            state.samsungProducts=payload
        },



        [fetchApple.pending] : (state)=>{
            state.loading=true
        },

        
        [fetchXiaomi.rejected] : (state,payload)=>{
            state.loading=false
            state.errors=payload
        },
        [fetchXiaomi.fulfilled] : (state,{payload})=>{
            state.loading=false
            state.xiaomiProducts=payload
        },

    }
})

export default productsSlice.reducer