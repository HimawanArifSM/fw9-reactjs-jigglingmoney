import { createSlice } from "@reduxjs/toolkit";
import { getAllProfile, topUp, transfer } from "../asyncActions/transaction";

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
  balanceleft: '',
  transactionData: [],
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
    getbalanceleft: (state, action) => {
      state.balanceleft = action.payload;
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
      build.addCase(transfer.pending, state => {
        state.errormsg = null;
        state.successmsg = null;
      });
      build.addCase(transfer.fulfilled, (state, action) => {
        state.transactionData = action.payload.data;
        state.successmsg = action.payload.message;
      });
      build.addCase(topUp.pending, state => {
        state.errormsg = null;
        state.successmsg = null;
      });
      build.addCase(topUp.fulfilled, (state, action) => {
        state.successmsg = action.payload?.message;
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
    getbalanceleft,
  } = transaction.actions;
  export {getAllProfile, transfer};
export default transaction.reducer