import { createSlice } from '@reduxjs/toolkit';

const SonglistsSlice = createSlice({
  name: 'songlists',
  initialState: {
    value: [],
    songInfo: {
      songId: 0,
      imageUrl: '',
      title: '',
      artistName: '',
      albumName: '',
    },
    addSong: {},
  },
  reducers: {
    songlistInfo: (state, action) => {
      state.value = action.payload;
    },
    selectedSonglist: (state, action) => {
      state.songInfo = action.payload;
    },
    addSongToPlaylist: (state, action) => {
      state.addSong = action.payload;
    },
  },
});

export default SonglistsSlice;

export const { songlistInfo, selectedSonglist, addSongToPlaylist } = SonglistsSlice.actions;
