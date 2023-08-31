import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slice/ModalSlice';
import SongListsSlice from './slice/SongListsSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    songLists: SongListsSlice.reducer,
  },
});

export default store;
