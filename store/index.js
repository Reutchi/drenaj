import {configureStore} from "@reduxjs/toolkit";
import data from "@/store/modules/data";

export const store = configureStore({
    reducer: {
        data
    }
})