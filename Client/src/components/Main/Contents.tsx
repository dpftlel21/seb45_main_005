import React from 'react';
import Music from '../../assets/images/music.jpg';
import List from '../../assets/images/list.jpg';
import Mubti from '../../assets/images/mubti.png';

const Contents = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mx-60 mr-12 mt-12">
        <div>
          <img src={Music} alt="" />
          <div className="text-white mt-12">
            <span>노래 차트</span>
            <p>
              비, 눈, 맑음, 흐림에따라 날씨별 노래 추천이 다르게 나타납니다.
            </p>
          </div>
        </div>
        <div>
          <img src={Mubti} alt="" />
          <div className="text-white mt-12">
            <span>MUBTI</span>
            <p>
              비, 눈, 맑음, 흐림에따라 날씨별 노래 추천이 다르게 나타납니다.
            </p>
          </div>
        </div>
        <div>
          <img src={List} alt="" />
          <div className="text-white mt-12">
            <span>날씨에 따른 음악 추천</span>
            <p>자신의 플레이리스트, 애청곡 등을 자유롭게 공유해 봅시다 !! </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
