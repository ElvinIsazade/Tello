import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../../helpers/Commerce";
import axios from 'axios';


export const registerFormAction = createAsyncThunk("user/registerForm", async ({email,firstName,password,phone}) => {
    try {
        const url = new URL(
            "https://api.chec.io/v1/customers"
        );

        let headers = {
            "X-Authorization": "sk_470226eb3f62907a28f492eb17553df942d2842ae6705",
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        const response = await axios.post(url, {"email" :email,"phone" :phone, "firstName" :firstName, "password" :password}, { headers: headers });
        console.log(response);
    } catch (error) {
        return error.message
    }
})
