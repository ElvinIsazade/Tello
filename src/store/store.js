import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import basketReducers from "./reducers/basketReducers";
import pageReducer from "./reducers/pageReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import authReducer from "./reducers/authReducer";

export const store = configureStore ({
    reducer :{
        products : productsReducer,
        basket : basketReducers,
        page : pageReducer,
        favorite : favoriteReducer,
        user : authReducer
    }
})