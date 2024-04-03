import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginI {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
}

/** Here, We can declare types in many methods but I chose this */

const initialState = {
  user: {
    given_name: "",
    family_name: "",
    nickname: "",
    name: "",
    picture: "",
    locale: "",
    updated_at: "",
    email: "",
    email_verified: false,
    sub: "",
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateLoginDetails(
      state,
      action: PayloadAction<{
        user: LoginI;
      }>
    ) {
      state.user = action.payload.user;
    },
  },
});

export const { updateLoginDetails } = authSlice.actions;
export default authSlice.reducer;
