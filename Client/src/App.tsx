import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { RouteConst } from './interface/RouteConst';
import { pageEffect } from './components/Styles/animation';

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
import SearchSongs from './pages/SearchSongs';

import SignUp from './components/Login/SignUp';
import LoginOn from './components/Login/LoginOn';
import Main from './components/Main/Main';
import Test from './components/Login/Test';
import EditProfile from './pages/EditProfile';
import IdFind from './components/Login/IdFind';
import PwdFind from './components/Login/PwdFind';

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <motion.div
          key={window.location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageEffect} // 페이지 전환 애니메이션 효과 설정
        >
          <Routes>
            <Route path={RouteConst.WeatherRecommend} element={<WeatherRecommend />} />
            <Route path={RouteConst.LoginOn} element={<LoginOn />} />
            <Route path={RouteConst.SignUp} element={<SignUp />} />
            <Route path={RouteConst.MyPage} element={<Mypage />} />
            <Route path={RouteConst.Community} element={<Community />} />
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
            <Route path={RouteConst.Test} element={<Test />} />
            <Route path={RouteConst.EditProfile} element={<EditProfile />} />
            <Route path={RouteConst.Search} element={<SearchSongs />} />
            <Route path={RouteConst.IdFind} element={<IdFind />} />
            <Route path={RouteConst.PwdFind} element={<PwdFind />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;

// ss
