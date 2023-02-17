import {configureStore} from "@reduxjs/toolkit";
import dashboardSlice from "../Slices/dashboardSlice";

const store = configureStore({
    reducer : {
        PageLoad : dashboardSlice.reducer,
    }
})
export default store;