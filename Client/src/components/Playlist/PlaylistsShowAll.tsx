import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { closeDetailModal } from '../../redux/slice/ModalSlice';
import { playlistInfo } from '../../redux/slice/PlaylistsSlice';
import xbtn from '../../assets/images/xbtn.svg';
import PlaylistsDetail from './PlayListsDetail';
import Playlists from './Playlists';
import ToastModal from '../Modal/ToastModal';
import { RootState } from '../../redux/store';
import PlaylistAddButton from './Button/PlaylistAddButton';

export type PlaylistInfo = {
  title: string;
  playlistId: number;
  memberId: number;
};

const PlaylistsShowAll = () => {
  const headers = {
    'Access-Control-Allow-Origin': 'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
  };
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [reRendering, setReRendering] = useState<string>('');

  const isDetailOpen = useSelector((state: RootState) => state.modal.isSongOpen);
  const isOpenToast = useSelector((state: RootState) => state.modal.isToastOpen);
  const playlistsInfo: PlaylistInfo[] = useSelector((state: RootState) => state.playlists.value);

  const handleCloseModal = () => {
    dispatch(closeDetailModal());
  };

  // 플레이리스트 받아오기
  useEffect(() => {
    axios
      .get(
        'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/playlist?page=1&size=80',
        { headers }
      )
      .then((res) => {
        dispatch(playlistInfo(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reRendering, setReRendering, title, setTitle]);

  return (
    <>
      <div className="w-[600px] h-[670px] fixed bottom-0 flex justify-center bg-opacity-1 ">
        <div className="w-[600px] h-[670px] mt-12 fixed right-8 top-40">
          <div className="h-[670px] flex flex-col justify-center items-center rounded-2xl bg-gradient-to-b from-[#000000f3] to-[#1d2435] shadow-xl text-[#b3b4ca]">
            {/* 플레이리스트 상단 */}
            <div className="flex justify-around">
              <button onClick={handleCloseModal} className="mr-10 mt-8 ">
                <img src={xbtn} className="w-[35px]" />
              </button>
              {/* 검색칸 */}
              <div className="flex mt-8">
                <input
                  type="text"
                  placeholder="   플레이리스트 이름을 입력해주세요"
                  className="w-[400px] h-[50px] bg-[#444444d0] rounded-3xl border border-gray-500"
                ></input>
              </div>
              <button className="mt-8"></button>
            </div>
            {/* 플레이리스트 */}
            <div className="w-full h-[50px] flex justify-between items-center mt-8 font-['Anton-Regular']">
              <h1 className="ml-8">My Playlists</h1>
            </div>
            {/* 플리 앨범, 제목, 내용 */}
            <ul className="w-[550px] h-[450px] flex flex-wrap overflow-y-scroll">
              {playlistsInfo.map((el) => (
                <Playlists
                  setReRendering={setReRendering}
                  el={el}
                  playlistId={el.playlistId}
                  memberId={el.memberId}
                />
              ))}
            </ul>
            <PlaylistAddButton />
          </div>
        </div>
      </div>
      {isDetailOpen && <PlaylistsDetail title={title} setTitle={setTitle} />}
      {isOpenToast && <ToastModal setReRendering={setReRendering} />}
    </>
  );
};

export default PlaylistsShowAll;
