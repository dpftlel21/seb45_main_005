import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { closeToastModal } from '../../redux/slice/ModalSlice';
import { myPlaylist } from '../../redux/slice/PlaylistsSlice';
import { RootState } from '../../redux/store';

const ToastModal = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.login.accessToken);

  const handleCloseToast = () => {
    dispatch(closeToastModal());
  };

  const getPlaylists = (): void => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/playlist/my?page=1&size=10`, {
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
        },
      })
      .then((res) => {
        dispatch(myPlaylist(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddPlaylist = () => {
    axios
      .post(
        `${process.env.REACT_APP_BE_API_URL}/playlist`,
        { title, public: true },
        {
          headers: {
            'Authorization': token,
            'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert('플리가 추가되었습니다.');
        getPlaylists();
        dispatch(closeToastModal());
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full fixed top-0 flex flex-col justify-center items-center font-['Anton-Regular'] bg-[#4a4b4a42] text-[#838282]">
      <div className="w-[300px] flex flex-col justify-center items-center bg-[#414052] border-2 border-gray-500 border-solid animate-fadeIn">
        <div className="my-8 text-[#ffff]">
          <p className="mb-4">플리 제목</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-[250px] pl-2 rounded-2xl bg-[#6b6767]"
          ></input>
        </div>
        <div>
          <button
            onClick={handleAddPlaylist}
            className="w-[70px] h-[40px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
          >
            추가
          </button>
          <button
            onClick={handleCloseToast}
            className="w-[70px] h-[40px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastModal;
