import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { RootState } from '../../../redux/store';
import SongAddModal from '../../Modal/SongAddModal';
import { openSongAddModal } from '../../../redux/slice/ModalSlice';
import { myPlaylist } from '../../../redux/slice/PlaylistsSlice';

export type PlaylistInfo = {
  title: string;
  playlistId: number;
};

const SongBtn = () => {
  const dispatch = useDispatch();
  const openAddSong = useSelector((state: RootState) => state.modal.isSongAddOpen);
  const token = useSelector((state: RootState) => state.login.accessToken);

  const handleAddSong = () => {
    dispatch(openSongAddModal());
  };

  const getPlaylists = (): void => {
    axios
      .get(
        'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/playlist/my?page=1&size=10',
        {
          headers: {
            'Authorization': token,
            'Access-Control-Allow-Origin':
              'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
          },
        }
      )
      .then((res) => {
        dispatch(myPlaylist(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => handleAddSong()}
          className="w-[150px] h-[5vh] my-4 mr-4 rounded-2xl border-2 border-sky-400 bg-white hover:bg-[#85b5db] hover:text-white"
        >
          추가
        </button>
      </div>

      {openAddSong && <SongAddModal />}
    </>
  );
};

export default SongBtn;
