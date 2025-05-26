import { configureStore } from "@reduxjs/toolkit";
import { reducerEvent } from "./reducer/eventReducer";

export const store = configureStore({
    reducer:{
        reducerEvent:reducerEvent 
    }
})