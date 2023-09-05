import { useDispatch, useSelector } from 'react-redux';
import { openAlbumDetailModal } from '../../../redux/slice/ModalSlice';
import Album from '../../../assets/images/Album.png';
import AlbumModal from '../../Modal/AlbumModal';
import { RootState } from '../../../redux/store';

const Pop = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.modal.isAlbumDetailOpen
  );

  const handleOpenModal = () => {
    dispatch(openAlbumDetailModal());
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="mt-12 font-['Anton-Regular'] text-2xl">Pop</h1>
      <div className="flex ">
        <img
          onClick={handleOpenModal}
          src={Album}
          alt="Album"
          className="w-[200px] h-[200px] mt-12 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          tabIndex={0}
        />
        <img
          src={Album}
          alt="Album"
          className="w-[200px] h-[200px] mt-12 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          tabIndex={0}
        />
        <img
          src={Album}
          alt="Album"
          className="w-[200px] h-[200px] mt-12 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          tabIndex={0}
        />
        <img
          src={Album}
          alt="Album"
          className="w-[200px] h-[200px] mt-12 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          tabIndex={0}
        />
        <img
          src={Album}
          alt="Album"
          className="w-[200px] h-[200px] mt-12 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          tabIndex={0}
        />
      </div>

      {isOpen && <AlbumModal />}
    </div>
  );
};

export default Pop;
