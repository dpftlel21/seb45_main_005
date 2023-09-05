// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { openSongLists } from '../../redux/slice/ModalSlice';
// import { RootState } from '../../redux/store';
import Album from '../../assets/images/Album.png';
import { PlaylistInfo } from './PlaylistsShowAll';
// import { playlistDetail } from '../../redux/slice/PlaylistsSlice';

type PlaylistProps = {
  el: PlaylistInfo;
};

const Playlists = ({ el }: PlaylistProps) => {
  const dispatch = useDispatch();

  const handleOpenSong = () => {
    dispatch(openSongLists());
  };

  // const playListDetail = useSelector((state: RootState) => state.playlists.detailInfo);
  // console.log(playListDetail);

  // useEffect(() => {
  //   axios
  //     .get(`https://55e5-222-235-81-220.ngrok-free.app/playlist/${el.playlistId}`, {
  //       headers: { 'ngrok-skip-browser-warning': '69420' },
  //     })
  //     .then((res) => {
  //       dispatch(playlistDetail(res.data.data));
  //       console.log(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <li
      onClick={handleOpenSong}
      className="h-[230px] flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out "
    >
      {/* 플리 리스트들 */}
      <div className="ml-2">
        <img src={Album} />
        <h1 className="mt-4">{el.title}</h1>
      </div>
    </li>
  );
};

export default Playlists;
