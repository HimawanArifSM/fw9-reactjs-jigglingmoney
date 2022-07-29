import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '-',
    amount: 0
  };

  export const valueSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
      customValue: (state, action) => {
        state.value = (action.payload);
      },
      amount: (state, action)=>{
        state.amount = parseInt(action.payload, 10)
      },
      phoneNumber: (state, action)=>{
        state.phoneNumber = action.payload
      }
    }
  });

  export const { customValue, amount, phoneNumber } = valueSlice.actions

export default valueSlice.reducer