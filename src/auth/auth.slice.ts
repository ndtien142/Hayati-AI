import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/common/redux/store";

type AuthLoginProps = {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  userId: string;
};

const AuthLoginState: AuthLoginProps = {
  isAuthenticated: false,
  accessToken: "",
  refreshToken: "",
  userId: "",
};
export const authLoginSlice = createSlice({
  name: "authLogin",
  initialState: AuthLoginState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setLogout: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const {
  setLogin,
  setLogout,
  setAccessToken,
  setRefreshToken,
  setUserId,
} = authLoginSlice.actions;
export const loginSelector = (state: RootState) =>
  state.authLogin.isAuthenticated;
export const logoutSelector = (state: RootState) =>
  state.authLogin.isAuthenticated;
export const accessTokenSelector = (state: RootState) =>
  state.authLogin.accessToken;
export const refreshTokenSelector = (state: RootState) =>
  state.authLogin.refreshToken;
export const userIdSelector = (state: RootState) => state.authLogin.userId;

export default authLoginSlice.reducer;
