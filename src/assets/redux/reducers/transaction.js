import { createSlice } from "@reduxjs/toolkit";
import { getAllProfile } from "../asyncActions/transaction";

const initialState = {
  getAllProfile: [],
  errormsg: '',
  successmsg: '',
  name: '',
  phone: '',
  image: '',
  receiver: '',
  amount: '',
  notes: '',
  date: '',
};

const transaction = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getname: (state, action) => {
      state.name = action.payload;
    },
    getphone: (state, action) => {
      state.phone = action.payload;
    },
    getimage: (state, action) => {
      state.image = action.payload;
    },
    getreceiver: (state, action) => {
      state.receiver = action.payload;
    },
    getamount: (state, action) => {
      state.amount = action.payload;
    },
    getnotes: (state, action) => {
      state.notes = action.payload;
    },
    getdate: (state, action) => {
      state.date = action.payload;
    },
    resetmsg: state => {
      state.errormsg = null;
      state.successmsg = null;
    },
  },
    extraReducers: build => {
      build.addCase(getAllProfile.pending, state => {
        state.errormsg = null;
        state.successmsg = null;
      });
      build.addCase(getAllProfile.fulfilled, (state, action) => {
        state.getAllProfile = action.payload.data;
        state.totalData = action.payload.page.totalData;
      });
    }
  });

  export const {
    getimage,
    getname,
    getphone,
    getreceiver,
    getamount,
    getnotes,
    getdate,
    resetmsg,
  } = transaction.actions;
  export {getAllProfile};
export default transaction.reducer