import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './Slice/ModalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
