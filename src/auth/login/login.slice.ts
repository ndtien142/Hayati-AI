import { RootState } from "@/common/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type StateProps = {
  username: string;
  showPassword: boolean;
  isExpired: boolean;
  policy: string;
};
const initialState: StateProps = {
  showPassword: false,
  username: "",
  isExpired: false,
  policy: "",
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIsExpired: (state, action) => {
      state.isExpired = action.payload;
    },
    setPolicies: (state, action) => {
      state.policy = action.payload;
    },
  },
});

export const { setShowPassword, setUsername, setIsExpired, setPolicies } =
  loginSlice.actions;

export const showPasswordSelector = (state: RootState) =>
  state.login.showPassword;
export const emailSelector = (state: RootState) => state.login.username;
export const isExpiredSelector = (state: RootState) => state.login.isExpired;
export const policySelector = (state: RootState) => state.login.policy;

export default loginSlice.reducer;
