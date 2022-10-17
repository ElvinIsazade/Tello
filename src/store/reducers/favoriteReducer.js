import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"


const initState = {
    favoriteProducts : [],
}
export const favoriteSlice = createSlice({
    name : "favorite",
    initialState : initState,
    reducers : {
        addToFavorite (state,actions) {
            const itemIndex = state.favoriteProducts.findIndex(item => item.id===actions.payload.id)
            if(itemIndex >= 0){
                toast.info("mehsul elave olunub")
                state.favoriteProducts.slice(itemIndex,1)
            }else{
                toast.success("mehsul elave edildi")
                state.favoriteProducts.push(actions.payload)
            }
            console.log(state.favoriteProducts);
        },
        removeFromFavorite (state,actions) {
            const newArr = state.favoriteProducts.filter((item) => item.id !== actions.payload);
            state.favoriteProducts = newArr;
        }
    }
})

export const {addToFavorite,removeFromFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer