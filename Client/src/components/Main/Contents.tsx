import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Music from '../../assets/images/music.jpg';
import List from '../../assets/images/list.jpg';
import Mubti from '../../assets/images/mubti.png';
import Mainbg from '../../assets/images/main.jpeg';
import Vector from '../../assets/images/vector.svg';
import MainHead from './MainHead';

const Contents = () => {
  const [bton, setBton] = useState<boolean>(false);
  const [imageFlipped, setImageFlipped] = useState<boolean>(false);

  const handleButton = (): void => {
    setBton(!bton);
    setImageFlipped(!imageFlipped);
    console.log(bton);
  };

  return (
    <>
      <MainHead />
      <header
        className="bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${Mainbg})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-70">
          <div className="w-full text-white flex flex-col justify-center items-center ">
            <h2 className="text-6xl h-40 font-sigmar-one mt-20">Welcome to “MUSIC FORECAST” !!</h2>
            <span className="text-2xl font">
              날씨와 더불어 유저가 처한 상황 (운동, 기분)에 따라 음악 추천을 해주고, 유저들끼리
              자신의 플레이리스트, 애청곡을 공유하는 웹 사이트 입니다.
            </span>
          </div>

          <div className="flex flex-row justify-start  mx-60 mt-6 hover:opacity-90">
            <button onClick={handleButton} className="flex flex-row ">
              <img
                src={Vector}
                className={`mr-6 ${imageFlipped ? 'transform scale-y-[-1]' : ''}`}
              ></img>
              <span className="text-white">{bton ? '컨텐츠 닫힘' : '컨텐츠 열림'}</span>
            </button>
          </div>

          {/* 컨텐츠 */}
          {!bton && (
            <div>
              <div className="flex flex-row justify-between mx-60 mr-12 mt-12">
                <div>
                  <img src={Music} alt="" />
                  <div className="text-white mt-12">
                    <span className="text-2xl">노래 차트</span>
                    <p className="text-lg">
                      비, 눈, 맑음, 흐림에따라 날씨별 노래 추천이 다르게 나타납니다.
                    </p>
                  </div>
                </div>
                <div>
                  <Link to="/mubti">
                    <img src={Mubti} alt="" />
                    <div className="text-white mt-12">
                      <span className="text-2xl">MUBTI</span>
                      <p className="text-lg">
                        비, 눈, 맑음, 흐림에따라 날씨별 노래 추천이 다르게 나타납니다.
                      </p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/weatherRecommend">
                    <img src={List} alt="" />
                    <div className="text-white mt-12">
                      <span className="text-2xl">날씨에 따른 음악 추천</span>
                      <p className="text-lg">
                        자신의 플레이리스트, 애청곡 등을 자유롭게 공유해 봅시다 !!
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Contents;
