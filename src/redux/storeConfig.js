import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminSlice";
import orderReducer from "./OrderSlice";

const store = configureStore({
  reducer: { admin: adminReducer, order: orderReducer },
});

export default store;
