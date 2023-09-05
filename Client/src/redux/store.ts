import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './slice/ModalSlice';
import PlaylistsSlice from './slice/PlaylistsSlice';

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    playlists: PlaylistsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
