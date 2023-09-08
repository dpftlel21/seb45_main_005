import React from 'react';
import KakaoLogin from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import { setAccessToken, setLoginState } from '../../redux/slice/LoginSlice';

const SocialKakao = () => {
  const dispatch = useDispatch();
  const kakaoClientId = 'c3a9c1a4a26072eab3fa0aee620feeae';
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
      <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure} />
    </>
  );
};

export default SocialKakao;
