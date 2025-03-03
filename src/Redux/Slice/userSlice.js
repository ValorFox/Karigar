import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.email = action.payload;
    },
    clearUser: (state) => {
      state.email = null;
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
