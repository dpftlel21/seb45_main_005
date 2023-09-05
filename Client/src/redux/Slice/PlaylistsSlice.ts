import { createSlice } from '@reduxjs/toolkit';

const PlaylistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    value: [],
    detailInfo: [],
  },
  reducers: {
    playlistInfo: (state, action) => {
      state.value = action.payload;
    },
    playlistDetail: (state, action) => {
      state.detailInfo = action.payload;
    },
  },
});

export default PlaylistsSlice;

export const { playlistInfo, playlistDetail } = PlaylistsSlice.actions;
