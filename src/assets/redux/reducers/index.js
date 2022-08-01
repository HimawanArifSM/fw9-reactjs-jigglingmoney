import { combineReducers } from "@reduxjs/toolkit";

import input from './CustomValue'
import profile from "./profile";
import auth from './auth'
import history from "./history";

const reducer = combineReducers({
    editValue: input,
    coba: profile,
    auth: auth,
    ressHistory:history
})
export default reducer
