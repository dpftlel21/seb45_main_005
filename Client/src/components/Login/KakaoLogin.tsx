import React from 'react';
import KakaoLogin from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import { setAccessToken, setLoginState } from '../../redux/slice/LoginSlice';
import kakaoLogin from '../../assets/images/kakao.png';

const SocialKakao = () => {
  const dispatch = useDispatch();
  const kakaoClientId = process.env.REACT_APP_KAKAO_AUTH_CLIENT_ID;
  const kakaoOnSuccess = async (data: any) => {
    console.log(data.response.access_token);
    dispatch(setAccessToken(data.response.access_token));
    dispatch(setLoginState(true));
    window.location.href = '/';
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
        render={({ onClick }) => (
          <button
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            <img src={kakaoLogin} alt="" />
          </button>
        )}
      ></KakaoLogin>
    </>
  );
};

export default SocialKakao;
