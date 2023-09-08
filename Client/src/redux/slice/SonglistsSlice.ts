import { createSlice } from '@reduxjs/toolkit';

const PlaylistsSlice = createSlice({
  name: 'songlists',
  initialState: {
    value: [],
  },
  reducers: {
    songlistInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default PlaylistsSlice;

export const { songlistInfo } = PlaylistsSlice.actions;
