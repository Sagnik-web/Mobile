import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Featurs/userSlice";


export default configureStore({
    reducer:{
        user: userReducer
    }
})