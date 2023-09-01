import { createSlice } from '@reduxjs/toolkit';

const PlaylistsCreateSlice = createSlice({
  name: 'songLists',
  initialState: { isCreateOpen: false },
  reducers: {
    openPlaylists: (state) => {
      state.isCreateOpen = true;
    },
    closePLaylists: (state) => {
      state.isCreateOpen = false;
    },
  },
});

export default PlaylistsCreateSlice;

export const { openPlaylists, closePLaylists } = PlaylistsCreateSlice.actions;
