import React from 'react';
import Time from '../../assets/images/time.svg';
import album from '../../assets/images/chart.png';

const Chart = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white">About Chart!!</div>
      <div className="hover:bg-gray-custom-2">
        <div className="w-[1200px] h-10 text-white bg-slate-950 flex flex-row items-center p-6 ">
          <div className=" w-10">#</div>
          <div className=" w-1/2 text-center">title</div>
          <div className="w-80">Album</div>
          <div className="w-80">좋아요</div>
          <div>
            <img src={Time} className="w-6 h-6"></img>
          </div>
        </div>
        <table className="text-white w-full bg-black bg-opacity-30">
          <tr>
            <td className="flex items-center my-2">
              <th className="w-14">1</th>
              <img src={album} alt="Album" className="w-12 h-12" />
              <div className="flex flex-col ml-5 text-center">
                <span className="w-[400px]">so Far So Good</span>
                <div className="text-sm text-gray-400">Sun of They</div>
              </div>
              <td className="w-[180px] text-center">Silent Hills</td>
              <td className="w-[375px] text-center">123 456</td>
              <td className="w-24 text-right">2:31</td>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Chart;
