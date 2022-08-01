import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk('profile/getProfile', async ()=>{
    const {data}=await axios.get('http://localhost:3333/authenticated/profiles', {headers: {Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY1OTMwNjM4M30._pt3XrB3fqHLPA8AWF9iakhU7A5LY4zYpB98r-sLsc8'}})
    return data
})