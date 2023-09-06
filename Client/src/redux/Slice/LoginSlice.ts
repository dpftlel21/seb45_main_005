import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export default LoginSlice.reducer;

export const { setAccessToken, setRefreshToken } = LoginSlice.actions;
