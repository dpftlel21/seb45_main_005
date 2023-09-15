import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../../redux/store';
import { myPlaylist } from '../../../redux/slice/PlaylistsSlice';

const PlaylistUpdateBtn = () => {
  const dispatch = useDispatch();

  const playlistId = useSelector((state: RootState) => state.playlists.selectedPlaylistId);
  const token = useSelector((state: RootState) => state.login.accessToken);
  const title = useSelector((state: RootState) => state.playlists.playlistTitle);

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

  const handleUpdate = () => {
    axios
      .patch(
        `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/playlist/${playlistId}`,
        { title, public: true, tag: [] },
        {
          headers: {
            'Authorization': token,
            'Access-Control-Allow-Origin':
              'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
          },
        }
      )
      .then((res) => {
        getPlaylists();
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
