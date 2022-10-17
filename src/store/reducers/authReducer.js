import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./actions/userActions";
const initState = {
    auth: false
}
export const userSlice = createSlice({
    name:"user",
    initialState:initState,
    
})
export default userSlice.reducer