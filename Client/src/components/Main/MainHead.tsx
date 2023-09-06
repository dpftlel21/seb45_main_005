import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const MainHead = () => {
  return (
    <>
      <div className="w-[1440] flex flex-row  ml-[250px] mt-2  fixed">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="text-black flex flex-row ml-[800px] items-center justify-end text-xl">
          <button className="bg-[#C487F4] mr-5 rounded-xl w-32 h-10 hover:bg-opacity-90 hover:bg-[#C487F4]">
            <Link to="/login">log in</Link>
          </button>
          <button className="text-white  w-20 h-10  rounded-xl hover:opacity-80  ">
            <Link to="/signup">sign up</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainHead;
