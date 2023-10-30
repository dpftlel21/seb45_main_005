import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { openSongAddModal } from '../../../redux/slice/ModalSlice';

const MyPliAddSongbtn = () => {
  const dispatch = useDispatch();

  const handleAddSong = () => {
    dispatch(openSongAddModal());
    toast.info('🎤노래 추가를 원하시면 넣으실 해당 플레이리스트를 클릭해주세요!', {
      position: 'bottom-left',
      // className:
    });
  };

  return (
    <>
      <button
        onClick={handleAddSong}
        className="w-[15vh] h-[5vh] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
      >
        내 플리에 추가하기
      </button>
    </>
  );
};

export default MyPliAddSongbtn;
