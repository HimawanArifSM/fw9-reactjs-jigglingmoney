import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getAllProfile = createAsyncThunk('profile/get-all-profiles', async ({lim, pages, seacrhed, sorted, sortedBy, seacrhedBy}) => {
  const results = {};
  try {
    const page = parseInt(pages) || 1;
    const limit = parseInt(lim) || 5;
    const search = seacrhed
    const sorting = sorted
    const sortBy = sortedBy
    const seacrh_by = seacrhedBy
    const qs = new URLSearchParams({limit, page, search, sorting, sortBy, seacrh_by}).toString()
    const {data} = await http().get('/admin/profiles?'+qs);
    results.data = data.results;
    results.page = data?.pageInfo;
    results.message = data.message;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const transfer = createAsyncThunk(
  'authenticated/transfer',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      console.log(send + ' ini send');
      console.log(token + ' ini token');
      const {data} = await http(token).post('/authenticated/transfer', send);
      // console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e.response.data.message);
      results.error = e.response.data.message;
      return results;
    }
  },
);

export const topUp = createAsyncThunk(
  'authenticated/topup',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      // const token = token.token
      console.log(request);
      console.log(send);
      const {data} = await http(token).post('/authenticated/topup', send);
      // console.log(data);
      results.data = data.message;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);
