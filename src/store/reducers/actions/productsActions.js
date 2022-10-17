import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../../helpers/Commerce";

export const fetchProducts = createAsyncThunk ("products/fetchProducts", async () =>{
    try {
        const response = await commerce.products.list({
            limit : 200,
        });
        const data = await response.data;
        return data;
    } catch (error) {
        console.log("error " + error);
    }
})

export const bestSelling = createAsyncThunk ("products/bestSelling", async () =>{
    try {
        const response = await commerce.products.list({
            limit : 200
        });
        const data = await response.data;
        return data;
    } catch (error) {
        console.log("error " + error);
    }
})

export const newProducts = createAsyncThunk ("products/newProducts", async ()=>{
    try {
        const response = await commerce.products.list({
            sortBy: 'created',
            sortDirection: 'desc',
            limit : 4,
        });
        const data = await response.data;
        return data;
    } catch (error) {
        console.log("error " + error);
    }
})

export const newAccessories = createAsyncThunk ("products/newAccessories", async ()=>{
    try {
        const response = await commerce.products.list({
            sortBy: 'created',
            sortDirection: 'desc',
            limit : 4,
            category_slug: ['aksesuar'],
        });
        const data = await response.data;
        return data;
    } catch (error) {
        console.log("error " + error);
    }
})

export const fetchApple = createAsyncThunk ("products/fetchApple", async ()=>{
    try {
        const response = await commerce.products.list({
            limit : 200
        });
        const data = await response.data;
        return data;
    } catch (error) {
        console.log("error " + error);
    }
})

export const fetchSamsung = createAsyncThunk ("products/fetchSamsung", async ()=>{
    try {
        const response = await commerce.products.list({
            limit : 200
        });
        const data = await response.data;
        return data;
    } catch (error) {
        console.log("error " + error);
    }
})


export const fetchXiaomi = createAsyncThunk ("products/fetchXiaomi", async ()=>{
    try {
        const response = await commerce.products.list({
            limit : 200
        });
        const data = await response.data;
        return data;
    } catch (error) {
        console.log("error " + error);
    }
})

