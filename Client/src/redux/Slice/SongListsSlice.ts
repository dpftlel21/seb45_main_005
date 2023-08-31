import { createSlice } from '@reduxjs/toolkit';

const SongListsSlice = createSlice({
  name: 'songLists',
  initialState: { isOpen: false },
  reducers: {
    openSongLists: (state) => {
      state.isOpen = true;
    },
    closeSongLists: (state) => {
      state.isOpen = false;
    },
  },
});

export default SongListsSlice;

export const { openSongLists, closeSongLists } = SongListsSlice.actions;
