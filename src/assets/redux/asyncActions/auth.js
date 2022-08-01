import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs'
import http from '../../helpers/http'

export const login = createAsyncThunk('auth/login', async (request)=>{
    const results = {}
    try {
        const send = qs.stringify(request)
        const {data} = await http().post('/auth/login', send, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
        results.token = data.results.token
        return results
    } catch (e) {
        results.errorMsg = e.response.data.message
        return results
    }
})