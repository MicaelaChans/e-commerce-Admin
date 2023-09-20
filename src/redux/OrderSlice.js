import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
  },
  reducers: {
    addOrder: (state, action) => {
      return state.push(action.payload);
    },
    removeOrder: (state, action) => {
      return state.filter((order) => order.id !== action.payload);
    },
  },
});

const { actions, reducer } = orderSlice;
export const { addOrder, removeOrder } = actions;
export default reducer;
