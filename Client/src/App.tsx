import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteConst } from './interface/RouteConst';

import MUBTIMain from './pages/MUBTI/MUBTIMain';
import Survey from './pages/MUBTI/Survey/Survey';
import SurveyMood from './pages/MUBTI/Survey/SurveyMood';
import SurveySituation from './pages/MUBTI/Survey/SurveySituation';
import SurveyLiking from './pages/MUBTI/Survey/SurveyLiking';
import Write from './pages/Write';
import Mypage from './pages/Mypage';
import Community from './pages/Community';
import CommunityDetail from './pages/CommunityDetail';
import WeatherRecommend from './pages/WeatherRecommend';
import SurveyResult from './pages/MUBTI/Survey/SurveyResult';
import SurveyLoading from './pages/MUBTI/Survey/SurveyLoading';

import SignUp from './components/Login/SignUp';
import LoginOn from './components/Login/LoginOn';
import SongLists from './components/Playlist/SongLists';
import Main from './components/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteConst.WeatherRecommend} element={<WeatherRecommend />} />
        <Route path={RouteConst.LoginOn} element={<LoginOn />} />
        <Route path={RouteConst.SignUp} element={<SignUp />} />
        <Route path={RouteConst.MyPage} element={<Mypage />} />
        <Route path={RouteConst.Community} element={<Community />} />
        <Route path={RouteConst.SongLists} element={<SongLists />} />
        <Route path={RouteConst.Write} element={<Write />} />
        <Route path={RouteConst.Detail} element={<CommunityDetail />} />
        <Route path={RouteConst.Main} element={<Main />} />
        <Route path={RouteConst.MUBTI} element={<MUBTIMain />} />
        <Route path={RouteConst.Survey} element={<Survey />} />
        <Route path={RouteConst.Mood} element={<SurveyMood />} />
        <Route path={RouteConst.Situation} element={<SurveySituation />} />
        <Route path={RouteConst.Liking} element={<SurveyLiking />} />
        <Route path={RouteConst.Loading} element={<SurveyLoading />} />
        <Route path={RouteConst.Result} element={<SurveyResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// ss
