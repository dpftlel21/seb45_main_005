import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { closeDetailModal, openToastModal, openSongLists } from '../../redux/slice/ModalSlice';
import xbtn from '../../assets/images/xbtn.svg';
import Album from '../../assets/images/Album.png';
import SongLists from './SongLists';
import ToastModal from '../Modal/ToastModal';
import { RootState } from '../../redux/store';

const PlaylistsDetail = () => {
  const dispatch = useDispatch();

  const isOpenSong = useSelector((state: RootState) => state.modal.isSongOpen);
  const isOpenToast = useSelector((state: RootState) => state.modal.isToastOpen);

  const handleOpenSong = () => {
    dispatch(openSongLists());
  };

  const handleCloseModal = () => {
    dispatch(closeDetailModal());
  };

  const handleOpenToast = () => {
    dispatch(openToastModal());
  };

  useEffect(() => {
    axios
      .get('https://55e5-222-235-81-220.ngrok-free.app/playlist', {
        headers: {
          'ngrok-skip-browser-warning': '69420',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="fixed w-full h-full flex justify-center items-center bottom-0 bg-[#182129f1] bg-opacity-80 ">
        <div className="animate-fadeInBottomRight-fast">
          <div className="w-[1100px] h-[850px] rounded-2xl bg-gradient-to-b from-[#000000f3] to-[#1d2435] shadow-xl text-[#b3b4ca] animate-scale-anim  ">
            {/* 플레이리스트 상단 */}
            <div className="flex justify-around mt-2">
              <button onClick={handleCloseModal} className="mr-20 mt-8 ">
                <img src={xbtn} className="w-[35px]" />
              </button>
              {/* 검색칸 */}
              <div className="flex mt-8">
                <input
                  type="text"
                  placeholder="   플레이리스트 이름을 입력해주세요"
                  className="w-[528px] h-[50px] bg-[#444444d0] rounded-3xl border border-gray-500"
                ></input>
              </div>
              <button className="mt-8"></button>
            </div>
            {/* 플레이리스트 */}
            <div className="w-full h-[50px] flex justify-between items-center mt-8 font-['Anton-Regular']">
              <h1 className="ml-8">My Playlists</h1>
            </div>
            {/* 플리 앨범, 제목, 내용 */}
            <ul className="w-full h-[550px] mt-6 flex flex-wrap overflow-y-scroll">
              <li
                onClick={handleOpenSong}
                className="h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out "
              >
                {/* 플리 리스트들 */}
                <div className="ml-2">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                </div>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <button
                onClick={handleOpenToast}
                className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
              >
                추가
              </button>
              <button className="w-[150px] h-[50px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpenSong && <SongLists />}
      {isOpenToast && <ToastModal />}
    </>
  );
};

export default PlaylistsDetail;
