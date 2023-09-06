import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Logo from '../../assets/images/logo.png';
import Email from '../../assets/images/email.svg';
import Lock from '../../assets/images/lock.svg';
import GoogleOauth from './GoogleOauth';

interface Formvalue {
  email: string;
  password: string;
}
interface DecodedToken {
  exp: number;
}

const LoginOn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Formvalue>();

  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  // 초기 로딩 시, 로컬 스토리지에서 토큰 가져오기
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
    if (storedRefreshToken) {
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
        { email, password },
        { withCredentials: true }
      );

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('refreshToken');
  //   setAccessToken('');
  //   setRefreshToken('');
  // };

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        if (!refreshToken) {
          return;
        }
        const response = await axios.post(
          'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
          { refreshToken }
        );
        const newAccessToken = response.data.accessToken;

        localStorage.setItem('accessToken', newAccessToken);

        setAccessToken(newAccessToken);
      } catch (error) {
        console.error('Access Token 갱신 실패:', error);
      }
    };

    const checkAccessTokenExpiration = () => {
      if (!accessToken) {
        return;
      }
      const decodedToken: DecodedToken = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp <= currentTime) {
        refreshAccessToken();
      }
    };

    // 주기적으로 Access Token 유효성 확인 및 갱신
    const interval = setInterval(() => {
      checkAccessTokenExpiration();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [accessToken, refreshToken]);

  const onSubmit = async (data: Formvalue) => {
    console.log(data);

    handleLogin(data.email, data.password);
    console.log(accessToken);
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
                <label htmlFor="email">이메일</label>
              </div>
              <input
                type="text"
                {...register('email', {
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
                <Link to="/">로그인</Link>
              </button>
            </form>
            <div className="flex flex-row justify-between ml-56 mt-5 w-52 mb-24">
              <GoogleOauth />
              <div>카카오</div>
              <div>네이버</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginOn;
