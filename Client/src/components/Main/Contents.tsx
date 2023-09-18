import React from 'react';
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
        </header>
      </div>
    </>
  );
};

export default Contents;
