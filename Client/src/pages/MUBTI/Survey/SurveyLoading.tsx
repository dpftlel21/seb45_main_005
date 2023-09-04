import React from 'react';
import playlistdisc from '../../../assets/images/playlistdisc.png';

const SurveyLoading = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: '#35435e',
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-row justify-between items-center w-[250px] ">
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full "></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
        <button className="w-[20px] h-[20px] bg-[#797676] rounded-full border-2 border-red-100 "></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
      </div>
      <h1 className="my-12 font-['Anton-Regular'] font-semibold text-[#d9d9d9] text-2xl">
        앞의 검사 결과를 통해 본인에 맞는 노래추천이 진행중입니다...
      </h1>
      <div className="flex justify-center ">
        <img
          className="w-[400px] h-[400px] ml-6 animate-spin-slow"
          src={playlistdisc}
          alt="플레이리스트디스크"
        />
      </div>

      <a
        href="./result"
        className="mt-12 w-[180px] h-[50px] inline-flex justify-center items-center rounded-2xl bg-[#EFD0A0] ml-6 text-xl"
      >
        결과보기
      </a>
    </div>
  );
};

export default SurveyLoading;
