import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { playlistInfo } from '../redux/slice/PlaylistsSlice';

import Header from '../components/Header';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

import plicon from '../assets/images/plicon.png';

export type PlaylistInfo = {
  title: string;
  playlistId: number;
};

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedPly, setSelectedPly] = useState(0);

  const navigate = useNavigate();
  const accessToken = useSelector((state: RootState) => state.login.accessToken);
  const memberId = useSelector((state: RootState) => state.login.memberid);

  console.log(accessToken);
  console.log(memberId);

  const headers = {
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
  };

  const dispatch = useDispatch();

  const playlistsInfo: PlaylistInfo[] = useSelector((state: RootState) => state.playlists.value);

  // 플레이리스트 받아오기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/playlist`, {
        headers,
      })
      .then((res) => {
        dispatch(playlistInfo(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectPly = async (a: number) => {
    setSelectedPly(a);
    await console.log(selectedPly);
  };

  const handleCancel = () => {
    navigate('../community');
  };

  const handlePost = async () => {
    // 등록 버튼 클릭 시 POST 요청을 보내는 함수
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}/posts`,
        {
          memberId,
          title,
          text: content,
          playlistId: selectedPly,
        },
        {
          headers: {
            'Authorization': accessToken,
            'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
          },
        }
      );

      console.log('서버 응답:', response.data);
      console.log('postId', response.data.data.postId);
      console.log('이름', response.data.data.nickName);

      // POST 요청 성공 후 필요한 작업 수행
      // 예를 들어, 페이지 이동 또는 메시지 표시 등
      navigate(`../community/${response.data.data.postId}`);
    } catch (error) {
      console.error('POST 요청 실패:', error);
      // POST 요청 실패 시 처리할 내용 추가
      alert(error);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#d1d1d1]">
        <Header />
        <div className="flex justify-center mt-10">
          <div className="w-[745px]">
            <button className="mr-2 underline" onClick={handlePost}>
              등록
            </button>
            <button className="underline" onClick={handleCancel}>
              취소
            </button>
          </div>
          <div className="w-[255px]">←</div>
        </div>
        <form>
          <div className="w-full h-[1024px] flex justify-center mt-2">
            <div className="flex flex-col w-[500px] items-center">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-[500px] h-[60px] bg-white shadow-lg rounded-md text-gray-700 pl-5"
                placeholder="제목을 입력하세요."
              />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-[500px] h-[400px] bg-white shadow-lg rounded-md mt-1 text-gray-700 resize-none py-5 px-5"
                placeholder="내용을 입력하세요."
              />
            </div>
            <div className="w-[300px]"></div>

            {playlistsInfo && (
              <div className="flex flex-col w-[300px] h-[462px] items-center shadow-lg rounded-md bg-white ml-50">
                <div className="flex flex-col w-[300px] items-center">
                  <img src={plicon} alt="플레이리스트아이콘" className="mt-2" />
                </div>
                {playlistsInfo.map((el, idx) => (
                  <div className="h-[5vh] flex flex-row justify-start w-[290px]" key={idx}>
                    <input
                      className="w-[20px] h-[20px] mr-4"
                      checked={el.playlistId === selectedPly}
                      type="checkbox"
                      onChange={() => handleSelectPly(el.playlistId)}
                    />
                    <p>{el.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
        <PlaylistIcon />
      </div>
    </>
  );
};

export default Write;
