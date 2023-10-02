import { createSlice } from "@reduxjs/toolkit";

export const PaymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: null,
  },
  reducers: {
    paying: (state, action) => {
      state.payment = action.payload;
    },
  },
});

export const { paying } = PaymentSlice.actions;
export const selectpayment = (state) => state.payment.payment;
export default PaymentSlice.reducer;
