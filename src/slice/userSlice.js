import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem("userLoginData")
      ? JSON.parse(localStorage.getItem("userLoginData"))
      : null,
  },
  //   initialState: null,
  reducers: {
    userLoginData: (state, action) => {
      state.value = action.payload;
      // return action.payload

      //   console.log(state.value);
      //   console.log(action.payload);
    },
  },
});

export const { userLoginData } = userSlice.actions;

export default userSlice.reducer;
