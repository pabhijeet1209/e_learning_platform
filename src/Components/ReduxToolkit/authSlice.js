import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authDetails: {},
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
