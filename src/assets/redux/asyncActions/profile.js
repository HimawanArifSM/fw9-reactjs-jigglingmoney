import { createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import http from "../../helpers/http";
import qs from 'qs';
// export const getProfile = createAsyncThunk('profile/getProfile', async ()=>{
//     const {data}=await axios.get('http://localhost:3333/authenticated/profiles', {headers: {Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY1OTMwNjM4M30._pt3XrB3fqHLPA8AWF9iakhU7A5LY4zYpB98r-sLsc8'}})
//     return data
// })

export const getProfile = createAsyncThunk("history/get-loged-profile", async (token) => {
    const results = {};
    try {
      const { data } = await http(token).get("/authenticated/profiles");
      // console.log(qs.stringify(data));
      results.data = data.results;
      return results;
    } catch (e) {
      results.message = e.response.data?.message;
      return results;
    }
  });