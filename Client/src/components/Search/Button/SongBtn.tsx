import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { RootState } from '../../../redux/store';
import SongAddModal from '../../Modal/SongAddModal';
import { openSongAddModal } from '../../../redux/slice/ModalSlice';
import { playlistInfo } from '../../../redux/slice/PlaylistsSlice';

export type PlaylistInfo = {
  title: string;
  playlistId: number;
};

const SongBtn = () => {
  const dispatch = useDispatch();
  const openAddSong = useSelector((state: RootState) => state.modal.isSongAddOpen);
  const headers = {
    'Access-Control-Allow-Origin': 'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
  };

  const handleAddSong = () => {
    dispatch(openSongAddModal());
  };

  useEffect(() => {
    axios
      .get('http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/playlist', {
        headers,
      })
      .then((res) => {
        dispatch(playlistInfo(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => handleAddSong()}
          className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
        >
          추가
        </button>
      </div>

      {openAddSong && <SongAddModal />}
    </>
  );
};

export default SongBtn;
