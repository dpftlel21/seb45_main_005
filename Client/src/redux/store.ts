import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './Slice/ModalSlice';
import SongListsSlice from './Slice/SongListsSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    songLists: SongListsSlice.reducer,
  },
});

export default store;
