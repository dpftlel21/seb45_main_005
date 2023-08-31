import { createSlice } from '@reduxjs/toolkit';

// 상태 타입 정의
interface ModalState {
  isOpen: boolean;
}

// 초기 상태
const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

// 액션 및 리듀서 내보내기
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
