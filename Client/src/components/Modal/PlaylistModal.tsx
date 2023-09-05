import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openDetailModal } from '../../redux/slice/ModalSlice';
import { openSongLists } from '../../redux/slice/SongListsSlice';
import { RootState } from '../../redux/store';
import xbtn from '../../assets/images/xbtn.svg';
import Album from '../../assets/images/Album.png';
import PlaylistsDetail from '../Playlist/PlayListsDetail';
import SongLists from '../Playlist/SongLists';

const PlaylistModal = () => {
  const dispatch = useDispatch();
  const isDetailOpen = useSelector(
    (state: RootState) => state.modal.isDetailOpen
  );
  const isSongOpen = useSelector((state: RootState) => state.songLists.isOpen);

  const handleOpenDetail = () => {
    dispatch(openDetailModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleOpenCreateLists = () => {
    dispatch(openSongLists());
  };

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
              <h1 className="ml-8">Recommend</h1>
              <button onClick={handleOpenDetail} className="mr-12">
                더보기
              </button>
            </div>
            {/* 플리 앨범, 제목, 내용 */}
            <ul className="w-full mt-6 flex">
              <li className="w-full h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out">
                <div className="ml-2 cursor-pointer">
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
            <div className="w-full h-[50px] flex justify-between items-center mt-12 font-['Anton-Regular']">
              <h1 className="ml-8">My Playlists</h1>
              <button onClick={handleOpenDetail} className="mr-12">
                더보기
              </button>
            </div>
            {/* 플리 앨범, 제목, 내용 */}
            <ul className="w-full mt-6 flex">
              <li
                onClick={handleOpenCreateLists}
                className="h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out"
              >
                <div className="ml-2 cursor-pointer">
                  <img src={Album} />
                  <h1 className="mt-4">플리 제목</h1>
                  <p className="mt-4">플리 내용</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isDetailOpen && <PlaylistsDetail />}
      {isSongOpen && <SongLists />}
    </>
  );
};

export default PlaylistModal;
