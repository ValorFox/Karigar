import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice.js";
import userReducer from "./Slice/userSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    userState: userReducer,
  },
});

export default store;
