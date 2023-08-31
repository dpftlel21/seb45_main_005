import { useDispatch } from 'react-redux';
import { closeSongLists } from '../../redux/Slice/SongListsSlice';
import xbtn from '../../assets/images/xbtn.svg';
import Album from '../../assets/images/Album.png';
import Logo from '../../assets/images/logo.png';

const SongLists = () => {
  const dispatch = useDispatch();

  const handleCloseSong = () => {
    dispatch(closeSongLists());
  };

  return (
    <>
      <div className="fixed w-full h-full flex justify-center items-center bottom-0 bg-[#182129f1] bg-opacity-80 ">
        <div className="animate-fadeInBottomRight-fast">
          <div className="w-[1100px] h-[850px] rounded-2xl bg-gradient-to-b from-[#000000f3] to-[#1d2435] shadow-xl text-[#b3b4ca] animate-scale-anim  ">
            {/* 플레이리스트 상단 */}
            <div className="flex justify-around mt-8">
              <button onClick={handleCloseSong} className="mr-20 ">
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
            </div>
            {/* 앨범표지 */}
            <div className="w-full flex justify-start mt-12 bg-[#444] opacity-80 ">
              <img src={Album} className="w-[200px] h-[200px] ml-12" />
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
            <ul className="w-full mt-10 flex">
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
    </>
  );
};

export default SongLists;
