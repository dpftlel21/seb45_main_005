import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Mainbg from '../../assets/images/main.jpeg';
import Vector from '../../assets/images/vector.svg';
import Chart from './Chart';
import Contents from './Contents';
import Footer from './Footer';
// import Contents from './Contents';

const Main = () => {
  const [bton, setBton] = useState<boolean>(false);
  const [imageFlipped, setImageFlipped] = useState<boolean>(false);

  const handleButton = (): void => {
    setBton(!bton);
    setImageFlipped(!imageFlipped);
    console.log(bton);
  };

  return (
    <header
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${Mainbg})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-50">
        <div className="flex flex-row justify-between">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="text-black flex flex-row  items-center mr-10 text-xl">
            <button className="bg-[#C487F4] mr-5 rounded-xl w-32 h-10 hover:bg-opacity-90 hover:bg-[#C487F4]">
              <Link to="/login">log in</Link>
            </button>
            <button className="text-white  w-20 h-10  rounded-xl hover:opacity-80  ">
              <Link to="/signup">sign up</Link>
            </button>
          </div>
        </div>

        <div className="w-full text-white flex flex-col justify-center items-center ">
          <h2 className="text-6xl h-40 font-sigmar-one">
            Welcome to “MUSIC FORECAST” !!
          </h2>
          <span className="text-2xl font">
            날씨와 더불어 유저가 처한 상황 (운동, 기분)에 따라 음악 추천을
            해주고, 유저들끼리 자신의 플레이리스트, 애청곡을 공유하는 웹 사이트
            입니다.
          </span>
        </div>
        <div className="flex flex-row justify-start  mx-60 mt-6 hover:opacity-90">
          <button onClick={handleButton} className="flex flex-row ">
            <img
              src={Vector}
              className={`mr-6 ${imageFlipped ? 'transform scale-y-[-1]' : ''}`}
            ></img>
            <span className="text-white">
              {bton ? '컨텐츠 열기' : '컨텐츠 닫기'}
            </span>
          </button>
        </div>
        {/* 컨텐츠 */}
        {bton && <Contents />}
        <Chart />
        <Footer />
      </div>
    </header>
  );
};

export default Main;
