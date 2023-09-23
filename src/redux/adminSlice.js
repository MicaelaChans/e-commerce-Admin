import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    authToken: null,
  },
  reducers: {
    login: (state, action) => {
      state.authToken = action.payload.token;
    },
    logout: (state, action) => {
      state.authToken = null;
    },
  },
});

export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer;