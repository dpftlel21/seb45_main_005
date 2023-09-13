import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { openAlbumDetailModal } from '../../../redux/slice/ModalSlice';
import Album from '../../../assets/images/Album.png';
import AlbumModal from '../../Modal/AlbumModal';
import { RootState } from '../../../redux/store';

const RecommendLists = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isAlbumDetailOpen);

  const handleOpenModal = () => {
    dispatch(openAlbumDetailModal());
  };

  // 날씨별 추천 리스트 가져오기
  useEffect(() => {
    axios
      .get(
        'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/weather/result?page=1&size=10&q=Haze'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="mt-12 font-['Anton-Regular'] text-2xl">RecommendLists</h1>
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

export default RecommendLists;
