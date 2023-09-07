import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../../redux/store';

export type updateProps = {
  title: string;
};

const PlaylistUpdateBtn = ({ title }: updateProps) => {
  const playlistId = useSelector((state: RootState) => state.playlists.selectedPlaylistId);
  const token = useSelector((state: RootState) => state.login.accessToken);

  const handleUpdate = () => {
    axios
      .patch(
        `/playlist/${playlistId}`,
        { title, public: true, tag: ['신나는', '발라드'] },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log('수정 성공 !', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      onClick={handleUpdate}
      className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
    >
      완료
    </button>
  );
};

export default PlaylistUpdateBtn;
