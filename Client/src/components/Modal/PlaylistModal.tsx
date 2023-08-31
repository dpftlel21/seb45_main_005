import { useDispatch, useSelector } from 'react-redux';
import { openSongLists } from '../../redux/slice/SongListsSlice';
import { closeModal } from '../../redux/slice/ModalSlice';
import xbtn from '../../assets/images/xbtn.svg';
import Album from '../../assets/images/Album.png';
import 'animate.css';
import SongLists from '../Playlist/SongLists';

const PlaylistModal = () => {
  const dispatch = useDispatch();
  const isSongOpen = useSelector((state: any) => state.songLists.isOpen);

  const handleOpenSong = () => {
    dispatch(openSongLists());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div className="fixed w-full h-full flex justify-center items-center bottom-0 bg-[#182129f1] bg-opacity-80 ">
        <div className="animate-fadeInBottomRight-fast">
          <div className="w-[1100px] h-[850px] rounded-2xl bg-gradient-to-b from-[#000000f3] to-[#1d2435] shadow-xl text-[#b3b4ca] animate-scale-anim  ">
            {/* 플레이리스트 상단 */}
            <div className="flex justify-around mt-8">
              <button onClick={handleCloseModal} className="mr-20 ">
                <img src={xbtn} className="w-[35px]" />
              </button>
              {/* 검색칸 */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="   플레이리스트 이름을 입력해주세요"
                  className="w-[528px] h-[50px] bg-[#444444d0] rounded-3xl border border-gray-500"
                ></input>
              </div>
              <button>플레이리스트 생성</button>
            </div>
            {/* 플레이리스트 */}
            <h1 className="ml-8 mt-10 font-['Anton-Regular']">Recommend</h1>
            {/* 플리 앨범, 제목, 내용 */}
            <ul className="w-full mt-10 flex">
              <li
                onClick={handleOpenSong}
                className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out"
              >
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>
              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>

              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>

              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>

              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>
            </ul>
            {/* 마이 플레이리스트 */}
            <h1 className="ml-8 mt-12 font-['Anton-Regular']">My Playlists</h1>
            {/* 플리 앨범, 제목, 내용 */}
            <ul className="w-full mt-10 flex">
              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>

              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>

              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>

              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>

              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isSongOpen && <SongLists />}
    </>
  );
};

export default PlaylistModal;
