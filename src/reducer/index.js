import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import cartReducer from "../slices/cartSlice";
import profileReducer from "../slices/profileSlice";
import courseSlice from "../slices/courseSlice";
import viewCourseReducer from "../slices/viewCourseSlice"


const rootReducer=combineReducers(
    {
        auth:authReducer,
        cart:cartReducer,
        profile:profileReducer,
        course:courseSlice,
        viewCourse:viewCourseReducer,
    }
)
export default rootReducer;