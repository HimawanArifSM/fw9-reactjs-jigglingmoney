import { createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../asyncActions/history";

const initialState ={
    results: {}
}

const history = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(getHistory.fulfilled, (state, action)=>{
            state.results = action.payload
        })
    }
})

export {getHistory}
export default history.reducer