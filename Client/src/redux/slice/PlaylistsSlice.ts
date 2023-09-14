import { createSlice } from '@reduxjs/toolkit';

const PlaylistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    value: [],
    myPlaylist: [],
    myPlaylistDetail: [],
    detailInfo: [],
    detailData: [],
    selectedPlaylistId: null,
    selectedMemberId: null,
    playlistTitle: '',
  },
  reducers: {
    playlistInfo: (state, action) => {
      state.value = action.payload;
    },
    playlistDetail: (state, action) => {
      state.detailInfo = action.payload;
    },
    myPlaylist: (state, action) => {
      state.myPlaylist = action.payload;
    },
    myPlaylistDetail: (state, action) => {
      state.myPlaylistDetail = action.payload;
    },
    setDetailData: (state, action) => {
      state.detailData = action.payload;
    },
    setSelectedPlaylistId: (state, action) => {
      state.selectedPlaylistId = action.payload;
    },
    setSelectedMemberId: (state, action) => {
      state.selectedMemberId = action.payload;
    },
    setPlaylistTitle: (state, action) => {
      state.playlistTitle = action.payload;
    },
  },
});

export default PlaylistsSlice;

export const {
  playlistInfo,
  playlistDetail,
  myPlaylist,
  myPlaylistDetail,
  setSelectedPlaylistId,
  setSelectedMemberId,
  setDetailData,
  setPlaylistTitle,
} = PlaylistsSlice.actions;
