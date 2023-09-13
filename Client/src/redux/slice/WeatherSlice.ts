import { createSlice } from '@reduxjs/toolkit';

const WeatherSlice = createSlice({
  name: 'Weather',
  initialState: {
    value: {},
  },
  reducers: {
    weatherInfo: (state, action) => {
      state.value = action.payload;
    },
    changeWeather: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default WeatherSlice;

export const { weatherInfo, changeWeather } = WeatherSlice.actions;
