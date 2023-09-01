import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherRecommend from './pages/WeatherRecommend';
import { RouteConst } from './interface/RouteConst';
import Mypage from './pages/Mypage';
import Community from './pages/Community';
import SongLists from './components/Playlist/SongLists';
import Write from './pages/Write';
import CommunityDetail from './pages/CommunityDetail';
import Main from './components/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouteConst.WeatherRecommend}
          element={<WeatherRecommend />}
        />
        <Route path={RouteConst.MyPage} element={<Mypage />} />
        <Route path={RouteConst.Community} element={<Community />} />
        <Route path={RouteConst.SongLists} element={<SongLists />} />
        <Route path={RouteConst.Write} element={<Write />} />
        <Route path={RouteConst.Detail} element={<CommunityDetail />} />
        <Route path={RouteConst.Main} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// ss
