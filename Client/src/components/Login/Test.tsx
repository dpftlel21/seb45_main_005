import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Logo from '../../assets/images/logo.png';
import Email from '../../assets/images/email.svg';
import Lock from '../../assets/images/lock.svg';

interface Formvalue {
  username: string;
  password: string;
}

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 액세스 토큰 만료 시간 (24시간 밀리 초로 표현)

const Test = () => {
  const headers = {
    'Access-Control-Allow-Origin': 'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset, // 추가: 폼 제출 후에 입력 필드 초기화를 위한 함수
  } = useForm<Formvalue>();

  const [accessToken, setAccessToken] = useState('');

  const onSilentRefresh = async () => {
    if (!accessToken) {
      return;
    }
    try {
      const response = await axios.post(
        `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/auth/login`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const newAccessToken = response.data.accessToken;
      setAccessToken(newAccessToken);
      localStorage.setItem('accessToken', newAccessToken);
      setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
    }
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      onSilentRefresh();
    }
  }, []);

  const onLogin = async (email: string, password: string) => {
    const data = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/auth/login`,
        data,
        { headers }
      );
      const acToken = response.data.accessToken;
      setAccessToken(acToken);
      localStorage.setItem('accessToken', acToken);
      setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const onSubmit = async (data: Formvalue) => {
    // 폼 데이터를 이용하여 로그인 처리 등을 수행
    const { username, password } = data;
    onLogin(username, password);

    // 폼 입력 필드 초기화
    reset();
  };

  return (
    <>
      <main className="bg-[#F2F2F2] h-screen">
        <div className=" flex flex-col justify-center items-center ">
          <img src={Logo} alt="" className="my-20" />
          <div className="flex flex-col border-2 border-solid border-none shadow-2xl rounded-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-[500px] h-[350px] ml-52 mt-20"
            >
              <div className="flex flex-row items-center text-xl">
                <img src={Email} alt="" className="w-10" />
                <label htmlFor="username">이메일</label>
              </div>
              <input
                type="text"
                {...register('username', {
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: '이메일 형식에 맞지 않습니다.',
                  },
                })}
                className={`w-[300px] h-8 border-2 border-solid border-white shadow-lg ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />

              <div className="flex flex-row items-center text-xl mt-6">
                <img src={Lock} alt="" className="w-10" />
                <label htmlFor="password">비밀번호</label>
              </div>
              <input
                type="password"
                {...register('password', {
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                    message: '비밀번호는 영문 숫자 8자리 이상이여야 합니다.',
                  },
                })}
                className={`w-[300px] h-8 border-2 border-solid border-white shadow-lg ${
                  errors.password?.message ? 'border-red-500' : ''
                }`}
              />
              <div className="flex flex-row justify-between w-[275px] mt-6">
                <div>아이디 찾기</div>
                <div>비밀번호 찾기 질문</div>
                <div>
                  <Link to="/signup">회원가입</Link>
                </div>
              </div>
              <button
                disabled={isSubmitting}
                className=" mt-12 bg-[#C487F4] w-[270px] h-10 rounded-xl hover:bg-opacity-90 hover:bg-[#C487F4]"
              >
                로그인
              </button>
            </form>
            <div className="flex flex-row justify-between ml-56 mt-5 w-52 mb-24">
              {/* <GoogleOauth /> */}
              <div>카카오</div>
              <div>네이버</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Test;
