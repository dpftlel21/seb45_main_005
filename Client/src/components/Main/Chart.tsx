import React from 'react';
import Time from '../../assets/images/time.svg';
import album from '../../assets/images/chart.png';
// import axios from 'axios';

const Chart = () => {
  // axios.get('https://55e5-222-235-81-220.ngrok-free.app/')

  return (
    <>
      <header
        className="bg-cover bg-center h-screen  bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed]"
        style={{}}
      >
        <div className="w-full h-full  bg-opacity-70">
          <div className="flex flex-col justify-center items-center ">
            <div className=" font-sigmar-one text-8xl mt-20 ">슬라이드로 변경 예정</div>
            <div className="hover:bg-gray-custom-2">
              <div className="w-[1200px] h-10  bg-slate-950 flex flex-row items-center p-6  mt-12">
                <div className=" w-10">#</div>
                <div className=" w-1/2 text-center">title</div>
                <div className="w-80">Album</div>
                <div className="w-80">좋아요</div>
                <div>
                  <img src={Time} className="w-6 h-6"></img>
                </div>
              </div>
              <table className=" w-full bg-black bg-opacity-30 ">
                <tbody>
                  <tr className="flex items-center">
                    <td className="w-14 ml-6">1</td>
                    <td className="flex items-center my-2">
                      <img src={album} alt="Album" className="w-12 h-12" />
                      <div className="flex flex-col ml-5 text-center">
                        <span className="w-[370px]">so Far So Good</span>
                        <div className="text-sm text-gray-400">Sun of They</div>
                      </div>
                    </td>
                    <td className="w-[180px] text-center">Silent Hills</td>
                    <td className="w-[375px] text-center">123 456</td>
                    <td className="w-24 text-right">2:31</td>
                  </tr>
                  {/* 다른 행들 */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Chart;
