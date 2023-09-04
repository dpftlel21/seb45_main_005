import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

import plicon from '../assets/images/plicon.png';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [song, setSong] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('../community');
  };
  return (
    <>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#d1d1d1]">
        <Header />
        <div className="flex justify-center mt-10">
          <div className="w-[745px]">
            <button className="mr-2 underline">등록</button>
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
