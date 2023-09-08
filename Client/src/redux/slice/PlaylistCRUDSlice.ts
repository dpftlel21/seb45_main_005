import { createSlice } from '@reduxjs/toolkit';

const PlaylistCRUDSlice = createSlice({
  name: 'playlistCRUD',
  initialState: {
    value: { title: '', public: true },
  },
  reducers: {
    createPlaylist: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default PlaylistCRUDSlice;

export const { createPlaylist } = PlaylistCRUDSlice.actions;
