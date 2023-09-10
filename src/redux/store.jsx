import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from './middleWares/logger'
const store = configureStore({
    reducer: {

        counter: counterReducer
    },
    // middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(loggerMiddleware),
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
    
});
export default store;