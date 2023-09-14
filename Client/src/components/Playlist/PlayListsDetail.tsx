import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { closeSongLists } from '../../redux/slice/ModalSlice';
import { playlistDetail } from '../../redux/slice/PlaylistsSlice';
import { RootState } from '../../redux/store';
import backbtn from '../../assets/images/backbtn.png';
import Album from '../../assets/images/Album.png';
// import Logo from '../../assets/images/logo.png';
import PlaylistUpdateBtn from './Button/PlaylistUpdateBtn';
import SongDeleteBtn from './Button/SongDeleteBtn';

export type PlaylistData = {
  title: string;
  views: number;
  playlistId: number;
  memberId: number;
  playlistSongs: [];
  playlistTags: [];
};

export type SongData = {
  title: string;
  imageUrl: string;
  album: string;
  artistName: string;
  songId: number;
};

const PlaylistsDetail = () => {
  const headers = {
    'Access-Control-Allow-Origin': 'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
  };
  const [detailData, setDetailData] = useState<PlaylistData | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const dispatch = useDispatch();

  const playlistId = useSelector((state: RootState) => state.playlists.selectedPlaylistId);
  const addedSongs: SongData[] = useSelector((state: RootState) => state.playlists.detailInfo);
  const deletedSongs: number[] = useSelector((state: RootState) => state.songlists.deletedSongs);
  const filteredSongs = addedSongs.filter((song) => !deletedSongs.includes(song.songId));

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
        dispatch(playlistDetail(res.data.data.playlistSongs));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [playlistId]);

  return (
    <>
      <div className="fixed bottom-0 flex justify-center bg-opacity-1 ">
        <div className="w-[600px] h-[670px] mt-12 fixed right-8 top-40">
          <div className="h-[670px] flex flex-col justify-center items-center rounded-2xl bg-gradient-to-b from-[#000000f3] to-[#1d2435] shadow-xl text-[#b3b4ca]  ">
            {/* 플레이리스트 상단 */}
            <div className="flex justify-around mt-4">
              <button onClick={handleCloseSong} className="mr-10 mt-8 ">
                <img src={backbtn} className="w-[35px]" />
              </button>
              {/* 검색칸 */}
              <div className="flex mt-8">
                {!isClicked ? (
                  <h1 className="text-xl font-['Anton-Regular']">{detailData?.title}</h1>
                ) : // <input
                //   onChange={(e) => setTitle(e.target.value)}
                //   value={title}
                //   type="text"
                //   className="w-[200px] h-[50px] bg-[#444444d0] rounded-3xl border border-gray-500"
                // />
                null}
              </div>
            </div>
            {/* 앨범표지 */}
            <div className="w-full flex justify-start mt-8 bg-[#444] opacity-80 ">
              <img src={Album} className="w-[150px] h-[150px] ml-12" />
              <div className="w-full h-[150px] flex flex-col justify-around">
                <p>Album : </p>
                <p>Title : </p>
                <p>Artist : </p>
                <div className="flex items-center">
                  {/* {detailData.playlistTags.map((el) => (
                    <img src={Logo} className="w-[100px] h-[30px]" />
                  <p className="ml-4">{el.playlistTagId}</p>
                  ))} */}
                </div>
              </div>
            </div>
            {/* 플리 앨범, 제목, 내용 */}
            <div className="w-full grid grid-cols-5 text-center my-2 font-['Anton-Regular']">
              <h3>No.</h3>
              <h3>Album Image</h3>
              <h3>Title</h3>
              <h3>Artist Name</h3>
              <h3>Edit</h3>
            </div>
            {/* 플리 노래목록 맵핑 */}
            <ul className="w-full h-[700px] flex flex-col overflow-x-hidden ">
              {filteredSongs.map((selectedSongs, index) => (
                <li className="w-full h-[70px]  grid grid-cols-5 items-center text-center border-t-2 border-solid border-gray-200 border-opacity-20 hover:bg-[#47464680]">
                  {/* No */}
                  <h3 className="">{index + 1}</h3>
                  <div className="flex justify-center items-center">
                    <img src={selectedSongs.imageUrl} className="w-[50px] h-[50px]" />
                  </div>
                  {/* Title */}
                  <p className="text-sm">{selectedSongs.title}</p>
                  {/* Artist Name */}
                  <p className="text-sm">{selectedSongs.artistName}</p>
                  {isClicked ? <SongDeleteBtn songId={selectedSongs.songId} /> : null}
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8">
              {isClicked ? (
                <PlaylistUpdateBtn />
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
