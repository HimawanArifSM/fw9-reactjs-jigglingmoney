import { createSlice } from "@reduxjs/toolkit";
import { login, register } from '../asyncActions/auth'

const initialState={
    token: localStorage.getItem('token')||null,
    errorMsg: null,
    successMsg: null,
    email: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout: (state, action)=>{
            localStorage.removeItem('token')
            action.payload()
            return initialState
        },
        setEmail: (state, action)=>{
            state.email = action.payload
        }
    },
    extraReducers: (build)=>{
        build.addCase(login.pending, (state)=>{
            state.errorMsg = null;
            state.successMsg=null;
        });
        build.addCase(login.fulfilled, (state, action) =>{
            const token = action.payload?.token
            if(token){
                state.token = token;
                localStorage.setItem('token', token)
            } else {
                state.errorMsg = action.payload?.errorMsg;
                state.successMsg = action.payload?.successMsg;
            }
        })
        // build.addCase(login.rejected, (state, action)=>{
        //     state.errorMsg = 'anjay';
        // })
        build.addCase(register.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        });
        build.addCase(register.fulfilled, (state, action) => {
          state.errorMsg = action.payload?.errorMsg;
          state.successMsg = action.payload?.successMsg;
        });
    } 
})


export { login }
export const { logout, setEmail } = auth.actions;
export default auth.reducer;