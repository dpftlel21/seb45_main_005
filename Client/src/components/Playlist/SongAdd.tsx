import { useDispatch } from 'react-redux';
import { closePLaylists } from '../../redux/slice/PlaylistsCreateSlice';
import backbtn from '../../assets/images/backbtn.png';
import Album from '../../assets/images/Album.png';
import Logo from '../../assets/images/logo.png';
import Homebtn from '../../assets/images/home.svg';

const SongAdd = () => {
  const dispatch = useDispatch();

  const handleClosePlaylists = () => {
    dispatch(closePLaylists());
  };
  return (
    <div className="fixed w-full h-full flex justify-center items-center top-1 bg-[#182129f1] bg-opacity-80 ">
      <div className="animate-fadeInBottomRight-fast">
        <div className="w-[1100px] rounded-2xl bg-gradient-to-b from-[#000000f3] to-[#1d2435] shadow-xl text-[#b3b4ca] animate-scale-anim">
          {/* 플레이리스트 상단 */}
          <div className="flex justify-around mt-4">
            <button onClick={handleClosePlaylists} className="mr-20 mt-8 ">
              <img src={backbtn} className="w-[35px]" />
            </button>

            {/* 검색칸 */}
            <div className="flex mt-8">
              <input
                type="text"
                placeholder="   플레이리스트 이름을 입력해주세요"
                className="w-[528px] h-[50px] bg-[#444444d0] rounded-3xl border border-gray-500"
              ></input>
            </div>
            <button className="mt-8">
              <img src={Homebtn} />
            </button>
          </div>

          {/* 앨범표지 */}
          <div className="w-full flex justify-start mt-8 bg-[#444] opacity-80 ">
            <img src={Album} className="w-[150px] h-[150px] ml-12" />
            <div className="w-[500px] flex flex-col justify-around">
              <p>Playlist</p>
              <h1 className="text-4xl font-['Anton-Regular']">노래 제목</h1>
              <p>노래 내용</p>
              <div className="flex items-center">
                <img src={Logo} className="w-[100px] h-[30px]" />
                <p className="ml-4">~ likes</p>
              </div>
            </div>
          </div>

          {/* 플리 앨범, 제목, 내용 */}
          <div className="w-full grid grid-cols-6 text-center mt-8 font-['Anton-Regular']">
            <h3 className="">#</h3>
            <h3 className="">No.</h3>
            <h3 className="">Title</h3>
            <h3 className="">Album</h3>
            <h3 className="">Dated added</h3>
            <h3 className="">Time</h3>
          </div>

          {/* 플리 노래목록 */}
          <ul className="w-full h-[440px] mt-8 flex flex-col  overflow-x-hidden z">
            <li className="w-full h-[70px] grid grid-cols-6 items-center text-center border-t-2 border-solid border-gray-200 border-opacity-20 hover:bg-[#47464680] ">
              {/* 체크박스 */}
              <input type="checkbox" />

              {/* No. */}
              <h3>1</h3>

              {/* Title */}
              <div className="flex justify-center items-center text-center">
                <img src={Album} className="w-[50px] h-[50px]" />
                <div className="h-[50px] flex flex-col items-center my-4">
                  <p className="text-sm">노래 제목</p>
                  <p className="mt-2 text-sm">노래 내용dddddddddddd</p>
                </div>
              </div>
              {/* Album */}
              <h3>앨범 이름</h3>
              {/* Dated added */}
              <h3>1 Week ago</h3>
              {/* 실행시간 */}
              <h3>3:12</h3>
            </li>
          </ul>

          <div className="flex justify-center my-8">
            <button className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
              추가
            </button>
            <button className="w-[150px] h-[50px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongAdd;
