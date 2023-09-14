import React from 'react';
// import { Link } from 'react-router-dom';

// import Music from '../../assets/images/music.jpg';
// import List from '../../assets/images/list.jpg';
// import Mubti from '../../assets/images/mubti.png';
// import Vector from '../../assets/images/vector.svg';
import Headers from '../Header';

const Contents = () => {
  return (
    <>
      <div className=" bg-gradient-to-b h-screen from-[#d8e6ef] to-[#87c4ed]  ">
        <Headers />
        <header className="w-[1140] bg-center flex ">
          <img
            src="https://cdn.discordapp.com/attachments/1123861236124229664/1151401600435372032/Weather_Forecast_Mobile_App_Concept-removebg-preview.png"
            alt=""
            className="w-[750px] h-[600px] mt-20 ml-30 transform transition-transform hover:scale-x-[-1] hover:transition-delay-2000 "
          />
          <div className="w-[1140]  flex flex-col justify-center ml-32 ">
            <h2 className="text-7xl h-40 font-['Anton-Regular'] mt-30 ">MUSIC FORECAST</h2>
            <div className="flex flex-col text-4xl font-bold font-spoqa-hansans w-[750px]">
              <span>날씨와 기분 따라 음악을 추천 받고 싶으세요?</span>
              <span>MUSIC FORECAST와 지금 함께하세요</span>
            </div>
          </div>
          <div></div>

          {/* 컨텐츠
          {!bton && (
            <div>
              <div className="flex flex-row justify-between mx-60 mr-12 mt-12">
                <div className="hover:opacity-90">
                  <img src={Music} alt="" />
                  <div className=" mt-12">
                    <span className="text-2xl">노래 차트</span>
                    <p className="text-lg">
                      비, 눈, 맑음, 흐림에따라 날씨별 노래 추천이 다르게 나타납니다.
                    </p>
                  </div>
                </div>
                <div className="hover:opacity-90">
                  <Link to="/mubti">
                    <img src={Mubti} alt="" />
                    <div className=" mt-12">
                      <span className="text-2xl">MUBTI</span>
                      <p className="text-lg">
                        비, 눈, 맑음, 흐림에따라 날씨별 노래 추천이 다르게 나타납니다.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="hover:opacity-90">
                  <Link to="/weatherRecommend">
                    <img src={List} alt="" />
                    <div className=" mt-12">
                      <span className="text-2xl">날씨에 따른 음악 추천</span>
                      <p className="text-lg">
                        자신의 플레이리스트, 애청곡 등을 자유롭게 공유해 봅시다 !!
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )} */}
        </header>
      </div>
    </>
  );
};

export default Contents;
