import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';
import HomeBtn from '../assets/images/home.svg';

const Header = () => {
  return (
    <header className="w-full h-[75px] flex justify-between items-center text-center font-['Anton-Regular'] border-b-2 border-gray-500 shadow-md ">
      <div className="w-[750px] flex  items-center justify-around text-xl">
        <Link to="/">
          <img src={Logo} alt="Header Image" />
        </Link>
        <Link to="/community">
          <h2>COMMUNITY</h2>
        </Link>
        <Link to="/weatherRecommend">
          <h2>RECOMMENDATION</h2>
        </Link>
        <Link to="/mubti">
          <h2>MUBTI</h2>
        </Link>
        <Link to="/search">
          <h2>Search Songs</h2>
        </Link>
        <h2></h2>
      </div>
      <div className="w-[400px] flex justify-around items-center">
        <button>
          <img src={HomeBtn} />
        </button>
        <Link to="/mypage">
          <span className="mr-4">유저 이미지</span>
          <span>UserInfo 님 반갑습니다.</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
