import { createSlice } from "@reduxjs/toolkit";
import { getCategoryList } from "./actions/categoryListActions";


const initState = {
    listProducts : [],
}
export const categorySlice = createSlice({
    name : "category",
    initialState : initState,
    extraReducers : {
        [getCategoryList.fulfilled] : (state,{payload})=>{
            state.listProducts= payload
        }
    }
})


export default categorySlice.reducer