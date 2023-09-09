import { createSlice } from '@reduxjs/toolkit';

const PlaylistsSlice = createSlice({
  name: 'songlists',
  initialState: {
    value: [],
    songInfo: {
      imageUrl: '',
      title: '',
      artistName: '',
      albumName: '',
    },
  },
  reducers: {
    songlistInfo: (state, action) => {
      state.value = action.payload;
    },
    selectedSonglist: (state, action) => {
      state.songInfo = action.payload;
    },
  },
});

export default PlaylistsSlice;

export const { songlistInfo, selectedSonglist } = PlaylistsSlice.actions;
