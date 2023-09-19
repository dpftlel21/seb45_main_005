import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import google from '../../assets/images/google.svg';
import { setAccessToken, setLoginState } from '../../redux/slice/LoginSlice';

const GoogleOauth = () => {
  const headers = {
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
  };
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    scope: 'email',
    onSuccess: (tokenResponse) => {
      dispatch(setAccessToken(tokenResponse.access_token));
      axios
        .post(
          `${process.env.REACT_APP_BE_API_URL}/auth/google`,
          {},
          {
            headers: {
              Authorization: tokenResponse.access_token,
              ...headers,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });

      window.location.href = '/';
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
