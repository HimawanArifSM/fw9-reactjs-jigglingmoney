// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import http from "../../helpers/http";

// export const getHistory = createAsyncThunk('history/getHistory', async ()=>{
//     const {data}=await axios.get('http://localhost:3333/authenticated/historyTransactions', {headers: {Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY1OTMwNjM4M30._pt3XrB3fqHLPA8AWF9iakhU7A5LY4zYpB98r-sLsc8'}})
//     return data
// })

export const getHistory = createAsyncThunk("history/getHistory", async ({token, lim, pages, seacrhed, sorted, sortedBy, seacrhedBy}) => {
  const results = {};
  console.log(token);
  try {
    const page = parseInt(pages) || 1;
    const limit = parseInt(lim) || 5;
    const search = seacrhed || ''
    const sorting = sorted || 'DESC'
    const sortBy = sortedBy || 'time'
    const seacrh_by = seacrhedBy || 'recipient'
    const qs = new URLSearchParams({limit, page, search, sorting, sortBy, seacrh_by}).toString()
    const { data } = await http(token).get("/authenticated/historyTransactions?"+qs);
    results.data = data.results;
    results.pageInfo = data.pageInfo;
    results.msg = data.message;
    return results;
  } catch (e) {
    results.message = e.response.data?.message;
    return results;
  }
});