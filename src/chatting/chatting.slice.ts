import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChattingState {
  wallpaperUrl: string;
}

const initialState: ChattingState = {
  wallpaperUrl: "",
};

const chattingSlice = createSlice({
  name: "chatting",
  initialState,
  reducers: {
    setWallpaperUrl(state, action: PayloadAction<string>) {
      state.wallpaperUrl = action.payload;
    },
  },
});

export const { setWallpaperUrl } = chattingSlice.actions;
export default chattingSlice.reducer;
