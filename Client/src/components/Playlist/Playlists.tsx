import { useDispatch, useSelector } from 'react-redux';
import { openSongLists } from '../../redux/slice/ModalSlice';
import { setSelectedPlaylistId } from '../../redux/slice/PlaylistsSlice';
import { RootState } from '../../redux/store';
import Album from '../../assets/images/Album.png';
import { PlaylistInfo } from './PlaylistsShowAll';
import PlaylistsDetail from './PlayListsDetail';

type PlaylistProps = {
  el: PlaylistInfo;
  playlistId: number;
};

const Playlists = ({ el }: PlaylistProps) => {
  const dispatch = useDispatch();

  const isOpenDetail = useSelector((state: RootState) => state.modal.isSongOpen);

  const handleOpenSong = () => {
    dispatch(openSongLists());
    dispatch(setSelectedPlaylistId(el.playlistId));
  };

  return (
    <>
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
      {isOpenDetail && <PlaylistsDetail />}
    </>
  );
};

export default Playlists;
