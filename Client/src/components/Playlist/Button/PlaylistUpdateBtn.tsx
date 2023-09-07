import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../../redux/store';

const PlaylistUpdateBtn = () => {
  const playlistId = useSelector((state: RootState) => state.playlists.selectedPlaylistId);
  const token = useSelector((state: RootState) => state.login.accessToken);

  const handleUpdate = () => {
    axios
      .patch(`/playlist/${playlistId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log('수정 성공 !', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={handleUpdate}
        className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
      >
        수정
      </button>
      <button className="w-[150px] h-[50px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
        삭제
      </button>
    </div>
  );
};

export default PlaylistUpdateBtn;
