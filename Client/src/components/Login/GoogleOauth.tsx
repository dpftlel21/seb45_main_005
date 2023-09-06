import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import google from '../../assets/images/google.svg';

const GoogleOauth = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
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
