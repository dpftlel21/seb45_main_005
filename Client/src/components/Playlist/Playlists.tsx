import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { openSongLists } from '../../redux/slice/ModalSlice';
import { setSelectedMemberId, setSelectedPlaylistId } from '../../redux/slice/PlaylistsSlice';
import Album from '../../assets/images/Album.png';
import { PlaylistInfo } from './PlaylistsShowAll';
import { RootState } from '../../redux/store';

type PlaylistProps = {
  el: PlaylistInfo;
  playlistId: number;
  memberId: number;
  setReRendering: any;
};

const Playlists = ({ el, setReRendering }: PlaylistProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 삭제 버튼 클릭시 opacity 변경을 위한 상태
  const [isHovered, setIsHovered] = useState(false);

  const token = useSelector((state: RootState) => state.login.accessToken);

  const handleOpenDetail = () => {
    dispatch(openSongLists());
    dispatch(setSelectedPlaylistId(el.playlistId));
    dispatch(setSelectedMemberId(el.memberId));
  };

  const handleListDelete = () => {
    const shouldDelete = window.confirm('정말 삭제하시겠습니까?');

    if (shouldDelete) {
      return axios
        .delete(
          `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/playlist/${el.playlistId}`,
          {
            headers: {
              'Authorization': token,
              'Access-Control-Allow-Origin':
                'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
            },
          }
        )
        .then((res) => {
          setReRendering(el.playlistId);
          console.log(res);
        })
        .catch((err) => {
          if (err.response.status === 500) {
            navigate('/login');
          }
          console.log(err);
        });
    }
    return <></>;
  };

  return (
    <>
      <li
        className="w-[200px] h-[230px] relative flex flex-col justify-center items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out "
        onMouseEnter={() => setIsHovered(true)} // 호버 상태에 들어갈 때
        onMouseLeave={() => setIsHovered(false)} // 호버 상태에서 나올 때
      >
        <button
          onClick={handleListDelete}
          className={`w-[25px] h-[25px] flex justify-center text-center items-center relative top-12 -right-16 bg-[#fa1f1f81] text-white text-lg rounded-full ${
            isHovered ? 'opacity-100' : 'opacity-0' // 상태에 따라 opacity 변경
          }`}
          style={{ transition: 'opacity 0.3s' }}
        >
          X
        </button>
        {/* 플리 리스트들 */}
        <div onClick={handleOpenDetail} className="ml-2">
          <img src={Album} />
          <h1 className="mt-4 text-sm">{el.title}</h1>
        </div>
      </li>
    </>
  );
};

export default Playlists;
