import { combineReducers } from "@reduxjs/toolkit";

import input from './CustomValue'
import profile from "./profile";
import auth from './auth'

const reducer = combineReducers({
    editValue: input,
    coba: profile,
    auth: auth
})
export default reducer
