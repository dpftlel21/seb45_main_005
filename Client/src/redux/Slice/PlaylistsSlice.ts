import { createSlice } from '@reduxjs/toolkit';

const PlaylistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    value: [],
    detailInfo: [],
    selectedPlaylistId: null,
    selectedMemberId: null,
  },
  reducers: {
    playlistInfo: (state, action) => {
      state.value = action.payload;
    },
    playlistDetail: (state, action) => {
      state.detailInfo = action.payload;
    },
    setSelectedPlaylistId: (state, action) => {
      state.selectedPlaylistId = action.payload;
    },
    setSelectedMemberId: (state, action) => {
      state.selectedMemberId = action.payload;
    },
  },
});

export default PlaylistsSlice;

export const { playlistInfo, playlistDetail, setSelectedPlaylistId, setSelectedMemberId } =
  PlaylistsSlice.actions;
