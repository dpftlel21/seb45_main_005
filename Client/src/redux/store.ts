import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './slice/ModalSlice';
import SongListsSlice from './slice/SongListsSlice';
import PlaylistsCreateSlice from './slice/PlaylistsCreateSlice';

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    songLists: SongListsSlice.reducer,
    playListsCreate: PlaylistsCreateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
