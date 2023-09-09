import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

import plicon from '../assets/images/plicon.png';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [song, setSong] = useState('');
  const navigate = useNavigate();
  const accessToken = useSelector((state: RootState) => state.login.accessToken);
  // const refreshToken = useSelector((state: RootState) => state.login.refreshToken);
  // const dispatch = useDispatch();
  console.log(accessToken);

  const handleCancel = () => {
    navigate('../community');
  };

  const handlePost = async () => {
    // 등록 버튼 클릭 시 POST 요청을 보내는 함수
    try {
      const response = await axios.post(
        'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/posts',
        {
          memberId: 25,
          title,
          text: content,
        },
        {
          headers: {
            'Authorization': accessToken,
            'Access-Control-Allow-Origin':
              'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
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
            <div className="flex flex-col w-[250px] items-center">
              <img src={plicon} alt="플레이리스트아이콘" className="mt-2" />
            </div>

            <div className="flex flex-col w-[250px] h-[462px] items-center shadow-lg rounded-md bg-white">
              <input
                type="text"
                value={song}
                onChange={(e) => setSong(e.target.value)}
                className="mt-2 w-[200px] h-[50px] bg-white shadow-lg rounded-xl text-gray-700 border-2 border-solid-black text-center"
                placeholder="노래제목 검색"
              />
            </div>
          </div>
        </form>
        <PlaylistIcon />
      </div>
    </>
  );
};

export default Write;
