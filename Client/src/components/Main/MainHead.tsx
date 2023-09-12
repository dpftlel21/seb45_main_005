import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/LoginSlice';
import Logo from '../../assets/images/logo.png';
import { RootState } from '../../redux/store';

const MainHead = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.login.loginState);

  const signupHandler = () => {
    history('/signup');
  };

  const loginHandler = () => {
    history('/login');
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="w-[1440] flex flex-row  ml-[250px] mt-2  fixed">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="text-black flex flex-row ml-[800px] items-center justify-end text-xl">
          {loginState ? (
            <>
              <button
                onClick={logoutHandler}
                className="bg-[#C487F4] ml-20 rounded-xl w-32 h-10 hover:bg-opacity-90 hover:bg-opacity-80"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-[#C487F4] mr-5 rounded-xl w-32 h-10 hover:bg-opacity-90 hover:bg-[#C487F4]"
                onClick={loginHandler}
              >
                log in
              </button>
              <button
                className="text-white  w-20 h-10  rounded-xl hover:opacity-80"
                onClick={signupHandler}
              >
                sign up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainHead;
