import React from 'react';
import Logo from '../../assets/images/logo.png';
import Mainbg from '../../assets/images/main.jpeg';
import Vector from '../../assets/images/vector.svg';
import Chart from './Chart';
// import Contents from './Contents';

const Main = () => {
  return (
    <header
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${Mainbg})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-30">
        <div className="flex flex-row justify-between">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="text-white">
            <button>sing up</button>
            <button>log in</button>
          </div>
        </div>

        <div className="w-full text-white flex flex-col justify-center items-center ">
          <h2 className="text-4xl h-40">Welcome to “MUSIC FORECAST” !!</h2>
          <span className="text-xl">
            날씨와 더불어 유저가 처한 상황 (운동, 기분)에 따라 음악 추천을
            해주고, 유저들끼리 자신의 플레이리스트, 애청곡을 공유하는 웹 사이트
            입니다.
          </span>
        </div>
        <div className="flex flex-row justify-start  mx-80">
          <img src={Vector}></img>
          <span className="text-white"> 컨텐츠 닫기</span>
        </div>
        {/* <Contents /> */}
        <Chart></Chart>
      </div>
    </header>
  );
};

export default Main;
