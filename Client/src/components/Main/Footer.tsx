import React from 'react';
import lee from '../../assets/images/lee.png';
import kim from '../../assets/images/kim.png';
import jin from '../../assets/images/jin.png';
import jeon from '../../assets/images/jeon.png';
import na from '../../assets/images/na.png';
import im from '../../assets/images/im.png';

const Footer = () => {
  return (
    <>
      <header
        className="bg-cover bg-center h-screen  bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed]"
        style={{}}
      >
        <div className="w-full h-full ">
          <div className="flex flex-col justify-center items-center ">
            <div className=" font-['Anton-Regular'] text-7xl mt-24">Thank You For Coming!! </div>
          </div>

          <div className="ml-[300px] w-[1200px] h-[200px] flex flex-row  justify-center items-center my-12">
            <div className="   w-52  ">
              <img src={lee} alt="" className="w-36 mb-5 " />
              <span className="border-b-2 border-solid border-gray-300 ml-5 ">팀장 FE 이인우</span>
            </div>
            <div className="  w-52">
              <img src={kim} alt="" className="w-36 mb-5" />
              <span className="border-b-2 border-solid border-gray-300 ml-5">FE 김진현</span>
            </div>
            <div className="  w-52 ">
              <img src={jin} alt="" className="w-36 mb-5 " />
              <span className="border-b-2 border-solid border-gray-300 ml-5">FE 진종환</span>
            </div>
            <div className="  w-52 ">
              <img src={jeon} alt="" className="w-36 mb-5 " />
              <span className="border-b-2 border-solid border-gray-300 ml-5">팀장 BE 전수은</span>
            </div>
            <div className="  w-52 ">
              <img src={na} alt="" className="w-36 mb-5 " />
              <span className="border-b-2 border-solid border-gray-300 ml-5">BE 나수현</span>
            </div>
            <div className="  w-52 ">
              <img src={im} alt="" className="w-36 mb-5" />
              <span className="border-b-2 border-solid border-gray-300 ml-5">BE 임석현</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Footer;
