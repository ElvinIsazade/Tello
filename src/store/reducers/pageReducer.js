import {createSlice} from "@reduxjs/toolkit";
import {fetchPageData} from "./actions/pageActions";

const initState = {
    pageProducts : [],
    loading : false,
    errors : null,
    pageCount : 0
}



export const pageSlice = createSlice({
    name : "page",
    initialState : initState,
    extraReducers : {
        [fetchPageData.pending] : (state)=>{
            state.loading= true
        },
        [fetchPageData.rejected] : (state,payload)=>{
            state.loading = false
            state.errors = payload
        },
        [fetchPageData.fulfilled] : (state,{payload})=>{
            state.loading= false
            state.pageProducts = payload.data
            state.pageCount = payload.data.length
        }
    }
})


export default pageSlice.reducer