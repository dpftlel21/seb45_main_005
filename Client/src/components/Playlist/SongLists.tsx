import { useDispatch, useSelector } from 'react-redux';
import { closeSongLists } from '../../redux/slice/SongListsSlice';
import { openPlaylists } from '../../redux/slice/PlaylistsCreateSlice';
import { RootState } from '../../redux/store';
import SongAdd from './SongAdd';
import backbtn from '../../assets/images/backbtn.png';
import Album from '../../assets/images/Album.png';
import Logo from '../../assets/images/logo.png';

const SongLists = () => {
  const dispatch = useDispatch();

  const isCreateOpen = useSelector(
    (state: RootState) => state.playListsCreate.isCreateOpen
  );

  const handleCloseSong = () => {
    dispatch(closeSongLists());
  };

  const handleOpenCreateLists = () => {
    dispatch(openPlaylists());
  };

  return (
    <>
      <div className="fixed w-full h-full flex justify-center items-center top-1 bg-[#182129f1] bg-opacity-80 ">
        <div className="animate-fadeInBottomRight-fast">
          <div className="w-[1100px] rounded-2xl bg-gradient-to-b from-[#000000f3] to-[#1d2435] shadow-xl text-[#b3b4ca] animate-scale-anim">
            {/* 플레이리스트 상단 */}
            <div className="flex justify-around mt-4">
              <button onClick={handleCloseSong} className="mr-20 mt-8 ">
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
              <button onClick={handleOpenCreateLists} className="mt-8">
                노래 추가
              </button>
            </div>
            {/* 앨범표지 */}
            <div className="w-full flex justify-start mt-8 bg-[#444] opacity-80 ">
              <img src={Album} className="w-[150px] h-[150px] ml-12" />
              <div className="w-[500px] flex flex-col justify-around">
                <p>Playlist</p>
                <h1 className="text-4xl font-['Anton-Regular']">플리 제목</h1>
                <p>플리 내용</p>
                <div className="flex items-center">
                  <img src={Logo} className="w-[100px] h-[30px]" />
                  <p className="ml-4">~ likes</p>
                  <p className="mx-4">~ songs</p>
                  <p>about ~ hours ago</p>
                </div>
              </div>
            </div>
            {/* 플리 앨범, 제목, 내용 */}
            <div className="w-full grid grid-cols-5 text-center mt-4 font-['Anton-Regular']">
              <h3>No.</h3>
              <h3>Title</h3>
              <h3>Album</h3>
              <h3>Dated added</h3>
              <h3>Time</h3>
            </div>
            {/* 플리 노래목록 */}
            <ul className="w-full h-[440px] mt-8 flex flex-col overflow-x-hidden z">
              <li className="w-full grid grid-cols-5 items-center text-center border-t-2 border-solid border-gray-200 border-opacity-20 hover:bg-[#47464680]">
                {/* No */}
                <h3 className="">1</h3>
                {/* Title */}
                <div className="flex justify-center items-center text-center">
                  <img src={Album} className="w-[50px] h-[50px]" />
                  <div className="h-[50px] flex flex-col items-center my-4">
                    <p className="text-sm">노래 제목</p>
                    <p className="mt-2 text-sm">노래 내용</p>
                  </div>
                </div>
                {/* Album */}
                <h3 className="">앨범 이름</h3>
                {/* Dated added */}
                <h3 className="">1 Week ago</h3>
                {/* 실행시간 */}
                <h3 className="">3:12</h3>
              </li>
            </ul>
            <div className="flex justify-center my-8">
              <button className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
                수정
              </button>
              <button className="w-[150px] h-[50px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
      {isCreateOpen && <SongAdd />}
    </>
  );
};

export default SongLists;
