import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginI {
  email: string;
  password: string;
}

export interface SignUpI {
  email: string;
  password: string;
  confirmPassword: string;
}

/** Here, We can declare types in many methods but I chose this */

const initialState = {
  login: {
    email: "",
    password: "",
  } as LoginI,
  signUp: {
    email: "",
    password: "",
    confirmPassword: "",
  } as SignUpI,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateLoginDetails(
      state,
      action: PayloadAction<{
        email?: string;
        password?: string;
      }>
    ) {
      state.login = {
        ...state.login,
        ...action.payload,
      };
    },
    updateSignupDetails(
      state,
      action: PayloadAction<{
        email?: string;
        password?: string;
        confirmPassword?: string;
      }>
    ) {
      state.signUp = {
        ...state.signUp,
        ...action.payload,
      };
    },
  },
});

export const { updateLoginDetails, updateSignupDetails } = authSlice.actions;
export default authSlice.reducer;
