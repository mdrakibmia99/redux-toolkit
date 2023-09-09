import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
const store = configureStore({
    reducer: {

        counter: counterReducer
    },
    // middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(loggerMiddleware),
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat()
    
});
export default store;