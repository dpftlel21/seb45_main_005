import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';
import MyPlayList from '../components/MyPlayList';
import Profile from '../components/Profile';
import MyCommunity from '../components/MyCommunity';
import Header from '../components/Header';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

export type UserIntro = {
  image: string;
  intro: string;
  memberId: number;
  nickname: string;
};

export type InsidePly = {
  title: string;
  memberId: number;
  playlistId: number;
};

export type Myprops = {
  data: InsidePly;
};

export type InsideCommu = {
  memberId: number;
  nickName: string;
  postId: number;
  title: string;
  text: string;
  viewCount: number;
};

const Mypage = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [selectedComponent, setSelectedComponent] = useState<number>(0);

  const [userIntro, setUserIntro] = useState<UserIntro | undefined>();
  const [myPlayList, setMyPlayList] = useState<InsidePly[]>([]);
  const [myCommunity, setMyCommunity] = useState<InsideCommu[]>([]);

  const accessToken = useSelector((state: RootState) => state.login.accessToken);

  const headers = {
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
    'Authorization': accessToken,
  };

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
    setSelectedComponent(buttonIndex);
  };

  const buttonClasses = (buttonIndex: number) => {
    return `px-4 py-2 rounded-full mr-2 ${
      selectedButton === buttonIndex ? 'bg-[#ac8af5]' : 'text-[black]'
    }`;
  };
  // 플레이 리스트
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/playlist/my?page=1&size=10`, { headers })
      .then((res) => {
        setMyPlayList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // 자기소개글
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/members/my_page/intro`, { headers })
      .then((res) => {
        setUserIntro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // 유저의 게시글
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/members/my_page/post`, { headers })
      .then((res) => {
        setMyCommunity(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed] h-screen">
        <Header />
        <div className="flex w-full h-[800px]">
          <div className="flex flex-col w-[200px] items-center mt-20 ml-10">
            <button className={buttonClasses(0)} onClick={() => handleButtonClick(0)}>
              Profile
            </button>
            <button className={buttonClasses(1)} onClick={() => handleButtonClick(1)}>
              My PlayList
            </button>
            <button className={buttonClasses(2)} onClick={() => handleButtonClick(2)}>
              내가 쓴 게시글
            </button>
          </div>
          {userIntro && (
            <div className="flex mt-10 w-full ">
              {selectedComponent === 0 && <Profile userIntro={userIntro} />}
              {selectedComponent === 1 && <MyPlayList myPlayList={myPlayList} />}
              {selectedComponent === 2 && <MyCommunity myCommunity={myCommunity} />}
            </div>
          )}
        </div>
        <PlaylistIcon />
      </div>
    </>
  );
};

export default Mypage;
