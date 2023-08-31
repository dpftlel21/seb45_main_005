import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './slice/ModalSlice';
import SongListsSlice from './slice/SongListsSlice';

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    songLists: SongListsSlice.reducer,
  },
});

export default store;
