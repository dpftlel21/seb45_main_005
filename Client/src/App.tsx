import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import WeatherRecommend from './pages/WeatherRecommend';
import { RouteConst } from './interface/RouteConst';
import Main from './components/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteConst.Main} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
