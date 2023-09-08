import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { closeToastModal } from '../../redux/slice/ModalSlice';
import { createPlaylist } from '../../redux/slice/PlaylistCRUDSlice';
import { RootState } from '../../redux/store';

export type PlaylistInfo = {
  setReRendering: any;
};

const ToastModal = ({ setReRendering }: PlaylistInfo) => {
  const [isAddingPlaylist, setIsAddingPlaylist] = useState(false); // 추가 버튼 클릭 여부를 저장하는 상태
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.login.accessToken);

  const handleCloseToast = () => {
    dispatch(closeToastModal());
  };

  const handleAddPlaylist = () => {
    axios
      .post(
        'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/playlist',
        { title, public: true },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        // 성공적으로 요청을 처리한 후에 실행되는 코드
        alert('플리가 추가되었습니다.');
        dispatch(createPlaylist(res.data));
        dispatch(closeToastModal());
        setReRendering(title);
      })
      .catch((err) => {
        // 요청을 보낼 때 발생한 오류를 처리하는 코드
        console.error(err);
      });
  };

  useEffect(() => {
    if (isAddingPlaylist) {
      handleAddPlaylist();
    }
  }, [isAddingPlaylist]);

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
            onClick={() => setIsAddingPlaylist(true)}
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
