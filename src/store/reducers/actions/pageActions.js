import { commerce } from "../../../helpers/Commerce";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPageData = createAsyncThunk("page/fetchPageData", async (currentPage)=>{
    try {
        const data = await commerce.products.list({
            page : currentPage,
            limit: 12
        })
        return data
    } catch (error) {
        console.log(error);
    }
})