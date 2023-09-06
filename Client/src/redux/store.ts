import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './slice/ModalSlice';
import PlaylistsSlice from './slice/PlaylistsSlice';
import LoginReducer from './slice/LoginSlice';

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    playlists: PlaylistsSlice.reducer,
    login: LoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
