import {createSlice} from "@reduxjs/toolkit";


const dashboardSlice = createSlice({
    name : "dashboard",
    initialState : {
        DashBoard : true,
        ProductList : false

    },
    reducers : {
        pageRender(state, action){
            state.DashBoard = !state.DashBoard;
            state.ProductList = !state.ProductList;
        },
    }
})
export default dashboardSlice;
export const {pageRender} = dashboardSlice.actions;