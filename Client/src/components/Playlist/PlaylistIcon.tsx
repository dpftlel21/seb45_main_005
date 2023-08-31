import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/Slice/ModalSlice';
import SongLists from './SongLists';
import playIcon from '../../assets/images/playicon.png';
import PlaylistModal from '../Modal/PlaylistModal';

const playlistIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const isSongOpen = useSelector((state: any) => state.songLists.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <button onClick={handleOpenModal}>
        <img
          src={playIcon}
          alt="playIcon"
          className="fixed right-0 bottom-0 mr-8 mb-8 hover:animate-bounceIn"
        />
      </button>
      {isOpen && <PlaylistModal />}
      {isSongOpen && <SongLists />}
    </>
  );
};

export default playlistIcon;
