import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { closeSongLists } from '../../redux/slice/ModalSlice';
import { playlistDetail } from '../../redux/slice/PlaylistsSlice';
import { RootState } from '../../redux/store';
import backbtn from '../../assets/images/backbtn.png';
import Album from '../../assets/images/Album.png';
import Logo from '../../assets/images/logo.png';
import PlaylistUpdateBtn from './Button/PlaylistUpdateBtn';

export type PlaylistData = {
  title: string;
  views: number;
  playlistId: number;
  memberId: number;
  playlistSongs: [];
  playlistTagId: number;
};

export type TitleProps = {
  title: string;
  setTitle: any;
};

export type SongInfo = {
  songId: number;
  title: string;
  artistName: string;
  albumName: string;
  imageUrl: string;
};

const PlaylistsDetail = ({ title, setTitle }: TitleProps) => {
  const headers = {
    'Access-Control-Allow-Origin': 'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
  };
  const [detailData, setDetailData] = useState<PlaylistData | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const dispatch = useDispatch();

  const playlistId = useSelector((state: RootState) => state.playlists.selectedPlaylistId);
  const selectedSongs: SongInfo = useSelector((state: RootState) => state.songlists.songInfo);

  const handleCloseSong = () => {
    dispatch(closeSongLists());
  };

  useEffect(() => {
    axios
      .get(
        `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/playlist/${playlistId}`,
        { headers }
      )
      .then((res) => {
        setDetailData(res.data.data);
        console.log(res.data.data);
        setTitle(res.data.data.title);
        dispatch(playlistDetail(res.data.data.playlistSongs));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [playlistId]);

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
            </div>
            {/* 앨범표지 */}
            <div className="w-full flex justify-start mt-8 bg-[#444] opacity-80 ">
              <img src={Album} className="w-[150px] h-[150px] ml-12" />
              <div className="w-[500px] flex flex-col justify-around">
                <p>Playlist</p>
                {!isClicked ? (
                  <h1 className="text-4xl font-['Anton-Regular']">{detailData?.title}</h1>
                ) : (
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="w-[500px] h-[50px] bg-[#444444d0] rounded-3xl border border-gray-500"
                  />
                )}
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
                    <p className="text-sm">{selectedSongs.title}</p>
                    <p className="mt-2 text-sm"></p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              {isClicked ? (
                <PlaylistUpdateBtn title={title} />
              ) : (
                <button
                  onClick={() => setIsClicked(true)}
                  className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
                >
                  수정하기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistsDetail;
