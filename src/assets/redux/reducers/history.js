import { createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../asyncActions/history";

const initialState ={
    results: [],
    pageInfo: {},
    msg: null,
}

const history = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(getHistory.fulfilled, (state, action)=>{
            state.results = action.payload.data
            state.pageInfo = action.payload.pageInfo
            state.msg = action.payload.msg
        })
    }
})

export {getHistory}
export default history.reducer