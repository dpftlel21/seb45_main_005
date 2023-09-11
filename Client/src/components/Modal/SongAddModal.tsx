import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { closeSongAddModal } from '../../redux/slice/ModalSlice';
// import { addSongToPlaylist } from '../../redux/slice/SonglistsSlice';
import { RootState } from '../../redux/store';

export type PlaylistInfo = {
  title: string;
  playlistId: number;
};

export type SongInfo = {
  songId: number;
  title: string;
  artistName: string;
  albumName: string;
  imageUrl: string;
};

const SongAddModal = () => {
  const dispatch = useDispatch();
  const playlistsInfo: PlaylistInfo[] = useSelector((state: RootState) => state.playlists.value);

  const token = useSelector((state: RootState) => state.login.accessToken);

  // SongLists 컴포넌트에서 선택한 노래 목록 가져오기
  const selectedSongs: SongInfo = useSelector((state: RootState) => state.songlists.songInfo);

  const handleCloseAddSong = () => {
    dispatch(closeSongAddModal());
  };

  const handleAddSong = (plyId: number) => {
    console.log(plyId);
    console.log(selectedSongs.songId);
    axios
      .post(
        `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/song/${selectedSongs.songId}/${plyId}/add`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full font-['Anton-Regular'] bg-[#4a4b4a42] text-[#838282]">
      <div className="w-[300px] h-[350px] flex flex-col justify-center items-center fixed bottom-0 bg-[#414052] border-2 border-gray-500 border-solid animate-fadeIn">
        <div className="my-8 text-[#ffff]">
          <div className="flex">
            <p className="mb-4">플리 리스트</p>
            <button
              onClick={handleCloseAddSong}
              className="w-[70px] h-[40px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
            >
              취소
            </button>
          </div>
          <ul className="w-full h-[200px] mt-6 flex flex-col overflow-y-scroll">
            {playlistsInfo.map((el) => {
              return (
                <li
                  className="flex justify-start items-center text-center hover:translate-y-[-15px] transition duration-300 ease-in-out"
                  onClick={() => handleAddSong(el.playlistId)}
                >
                  <div className="ml-2 cursor-pointer">
                    <h1 className="mt-4">{el.title}</h1>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SongAddModal;
