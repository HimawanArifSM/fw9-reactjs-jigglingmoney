import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getAllProfile = createAsyncThunk('profile/get-all-profiles', async () => {
  const results = {};
  try {
    const {data} = await http().get('/admin/profiles');
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
