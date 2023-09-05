import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Email from '../../assets/images/email.svg';
import Lock from '../../assets/images/lock.svg';

const LoginOn = () => {
  return (
    <>
      <main className="bg-[#F2F2F2] h-screen">
        <div className=" flex flex-col justify-center items-center ">
          <img src={Logo} alt="" className="my-20" />
          <div className="flex flex-col border-2 border-solid border-none shadow-2xl rounded-2xl">
            <form action="" className="flex flex-col w-[475px] h-[500px] ml-60 mt-20">
              <div className="flex flex-row items-center text-xl">
                <img src={Email} alt="" className="w-10" />
                <label htmlFor="email">이메일</label>
              </div>
              <input
                type="email"
                id="email"
                className="w-[270px] h-8 border-2 border-solid border-white shadow-lg"
              />

              <div className="flex flex-row items-center text-xl mt-6">
                <img src={Lock} alt="" className="w-10" />
                <label htmlFor="password">비밀번호</label>
              </div>
              <input
                type="password"
                id="password"
                className="w-[270px] h-8 border-2 border-solid border-white shadow-lg"
              />
              <div className="flex flex-row justify-between w-[275px] mt-6">
                <div>아이디 찾기</div>
                <div>비밀번호 찾기 질문</div>
                <div>
                  <Link to="/signup">회원가입</Link>
                </div>
              </div>
              <button className=" mt-12 bg-[#C487F4] w-[270px] h-10 rounded-xl hover:bg-opacity-90 hover:bg-[#C487F4]">
                <Link to="/">로그인</Link>
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginOn;
