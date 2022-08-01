import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk('profile/getProfile', async ()=>{
    const {data}=await axios.get('http://localhost:3333/authenticated/profiles', {headers: {Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsImlhdCI6MTY1OTI0MzI2Nn0.h2_U3rsFef7KRpKqwMpNrwNlRyN2f2ZNoFDYrtEKLms'}})
    return data
})