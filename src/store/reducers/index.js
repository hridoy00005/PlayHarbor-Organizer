import { combineReducers } from "@reduxjs/toolkit";
import auth from "./authReducer"

const rootReducers = combineReducers({
    auth,
})

export default rootReducers;