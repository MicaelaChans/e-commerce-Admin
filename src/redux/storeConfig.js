import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: { admin: adminReducer, order: orderReducer },
});

export default store;
