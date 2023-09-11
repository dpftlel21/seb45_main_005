import { useEffect, useState } from 'react';
import axios from 'axios';
import MyPlayList from '../components/MyPlayList';
import Profile from '../components/Profile';
import MyCommunity from '../components/MyCommunity';
import Header from '../components/Header';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

const Mypage = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [selectedComponent, setSelectedComponent] = useState<number>(0);
  const [memberId, setMemberId] = useState('');
  setMemberId('d');

  const headers = {
    'Access-Control-Allow-Origin': 'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
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

  useEffect(() => {
    axios
      .get(
        `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/members/profile/${memberId}`,
        { headers }
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed] h-[1024px]">
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
          <div className="flex mt-10 w-full ">
            {selectedComponent === 0 && <Profile />}
            {selectedComponent === 1 && <MyPlayList />}
            {selectedComponent === 2 && <MyCommunity />}
          </div>
        </div>
        <PlaylistIcon />
      </div>
    </>
  );
};

export default Mypage;
