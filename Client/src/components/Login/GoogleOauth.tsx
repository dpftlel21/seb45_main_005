import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import google from '../../assets/images/google.svg';
import { setAccessToken, setLoginState } from '../../redux/slice/LoginSlice';

const GoogleOauth = () => {
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      dispatch(setAccessToken(tokenResponse.access_token));
      console.log('Login Success:', tokenResponse.access_token);
      // window.location.href = '/';
      dispatch(setLoginState(true));
    },
    onError: () => {
      console.log('Login Failed');
    },
  });
  return (
    <div className=" w-20 h-8 mb-4 ">
      <button onClick={() => login()}>
        <img src={google} className="w-12"></img>
      </button>
    </div>
  );
};

export default GoogleOauth;
