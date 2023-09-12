import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slice/LoginSlice';
import { RootState } from '../redux/store';
import Logo from '../assets/images/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
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
    <header className="w-full h-[75px] flex justify-between items-center text-center font-['Anton-Regular'] border-b-2 border-gray-500 shadow-md ">
      <div className="w-[750px] flex  items-center justify-around text-xl">
        <Link to="/">
          <img src={Logo} alt="Header Image" />
        </Link>
        <Link to="/community">
          <h2 className="hover:text-sky-400">COMMUNITY</h2>
        </Link>
        <Link to="/weatherRecommend">
          <h2 className="hover:text-sky-400">RECOMMENDATION</h2>
        </Link>
        <Link to="/mubti">
          <h2 className="hover:text-sky-400">MUBTI</h2>
        </Link>
        <Link to="/search">
          <h2 className="hover:text-sky-400">Search Songs</h2>
        </Link>
      </div>
      <div className="w-[400px] flex justify-around items-center">
        {loginState ? (
          <>
            <Link to="/mypage">
              <span className="mr-4">유저 이미지</span>
              <span>UserInfo 님 반갑습니다.</span>
            </Link>
            <button
              onClick={logoutHandler}
              className="bg-[#C487F4] ml-20 rounded-xl w-32 h-10 hover:bg-opacity-90 hover:bg-opacity-50"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className=" ml-52 rounded-xl w-32 h-10 hover:bg-opacity-50 hover:text-sky-400"
              onClick={loginHandler}
            >
              log in
            </button>
            <button
              className=" mr-10  w-20 h-10  rounded-xl hover:opacity-50 hover:text-sky-400"
              onClick={signupHandler}
            >
              sign up
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
