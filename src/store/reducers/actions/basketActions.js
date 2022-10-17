import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../../helpers/Commerce";


export const fetchBasketData = createAsyncThunk ("basket/fetchBasketData", async () =>{
    try{
        const response = await commerce.cart.retrieve();
        return response;
    }catch(error){
        console.log(error);
    }
})

export const addProductBasket = createAsyncThunk ("basket/addProductBasket", async ({productId,quantity})=>{
    try{
        const response = await commerce.cart.add(productId,quantity);
        return response;
    }catch(error){
        console.log(error);
    }
})

export const emptyBasket = createAsyncThunk("basket/emptyBasket", async () =>{
    try{
        const response = await commerce.cart.empty();
        return response;
    }catch(error){
        console.log(error);
    }
})

export const removeProductBasket = createAsyncThunk("basket/removeProductBasket", async (productId) =>{
    try{
        const response = await commerce.cart.remove(productId);
        return response;
    }catch(error){
        console.log(error);
    }
})

export const updateProductBasket = createAsyncThunk("basket/updateProductBasket", async ({productId,quantity}) =>{
    try{
        const response = await commerce.cart.update(productId,{quantity});
        return response;
    }catch(error){
        console.log(error);
    }
})

