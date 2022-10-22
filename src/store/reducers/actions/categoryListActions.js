import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../../helpers/Commerce";


export const getCategoryList = createAsyncThunk("category/getCategoryList", async (name) => {
    try {
        const response = await commerce.categories.list()
        const data = await response.data
        return data
        
    } catch (error) {
        return error.message
    }
})