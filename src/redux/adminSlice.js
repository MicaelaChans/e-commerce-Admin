import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
  },
  reducers: {
    login: (state, action) => {
      state.admin = action.payload;
    },
    logout: (state, action) => {
      state.admin = null;
    },
  },
});

const { actions, reducer } = adminSlice;
export const { login, logout } = actions;
export default reducer;