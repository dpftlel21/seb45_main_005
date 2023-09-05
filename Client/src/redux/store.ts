import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './slice/ModalSlice';

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
