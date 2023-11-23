import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";


const store = configureStore({
    reducer:rootReducers,
    middleware:[]
})

export default store;