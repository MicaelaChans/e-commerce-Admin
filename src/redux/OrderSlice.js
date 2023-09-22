import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
  },
  reducers: {
    removeOrder: (state, action) => {
      return state.filter((order) => order.id !== action.payload);
    },
  },
});

const { actions, reducer } = orderSlice;
export const { removeOrder } = actions;
export default reducer;
