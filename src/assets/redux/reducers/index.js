import { combineReducers } from "@reduxjs/toolkit";

import transaction from './transaction'
import profile from "./profile";
import auth from './auth'
import history from "./history";

const reducer = combineReducers({
    transaction: transaction,
    profile: profile,
    auth: auth,
    ressHistory:history
})
export default reducer
