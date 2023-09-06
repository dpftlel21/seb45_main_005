import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import usericon from '../assets/images/user.png';
import musicicon from '../assets/images/Rectangle(1).png';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

interface Post {
  postId: number;
  title: string;
  voteCount: number;
  viewCount: number;
  text: string;
  nickName: string;
  memberId: number;
}

const CommunityDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const currentUrl = new URL(document.location.toString());
  const communityParam = currentUrl.pathname.split('/').pop() || '';
  const communityId = parseInt(communityParam, 10);

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  useEffect(() => {
    axios
      .get(
        'http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/posts?page=1&size=10'
      )
      .then((res) => {
        console.log(res);
        // setPosts(res.data.data);
        setPosts(res.data.data.filter((item: any) => item.postId === communityId));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [communityId]);

  return (
    <>
      <div className="bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed] h-[1024px]">
        <Header />
        {posts.map((item) => (
          <div className="flex flex-col items-center" key={item.postId}>
            <div className="w-[875px] mt-10">
              {/* 상단 제목과 이름 좋아요 바 */}
              <div className="w-[875px] h-[100px] border-b-[1px] border-solid border-black">
                <div className="w-[875px] h-[50px]">
                  <span className="text-xl">{item.title}</span>
                </div>
                <div className="w-[875px] h-[50px] flex items-center">
                  <img src={usericon} alt="유저아이콘" className="w-[40px] h-40px]" />
                  <span className="inline-flex w-[60px] h-[50px] items-center justify-center">
                    {item.nickName}
                  </span>
                  <div className="w-[625px]"></div>
                  <div className="w-[150px] h-[50px] inline-flex items-center justify-center text-xs">
                    <span>{item.voteCount}</span>
                    <button className="text-xl ml-2" onClick={handleLikeClick}>
                      {isLiked ? '❤️' : '🤍'}
                    </button>
                    <span className="ml-2">{item.viewCount}</span>
                    <span className="ml-2">views</span>
                  </div>
                </div>
              </div>
              {/* 플레이리스트 */}
              <div className="flex flex-col w-[875px] h-[400px] items-center">
                <div className="w-[875px] h-[20px] flex justify-end">
                  <button className="text-xs">내 플레이리스트에 추가 ⎋</button>
                </div>
                <div className="w-[875px] h-[150px]"></div>
                <div className="flex items-center w-[800px] h-[200px]">
                  <ul className="playlist-buttons relative top-5 items-center flex gap-[20px] ">
                    <li className="left-0 absolute w-[100px]">
                      <button className="shadow-xl hover:scale-[150%]">
                        <img
                          className="rounded-md w-[100px] h-[100px]"
                          src={musicicon}
                          alt="뮤직아이콘"
                        ></img>
                      </button>
                    </li>

                    <li className="left-20 absolute w-[100px]">
                      <button className="shadow-xl hover:scale-[150%]">
                        <img
                          className="rounded-md w-[100px] h-[100px]"
                          src={musicicon}
                          alt="뮤직아이콘"
                        ></img>
                      </button>
                    </li>

                    <li className="left-40 absolute w-[100px]">
                      <button className="shadow-xl hover:scale-[150%]">
                        <img
                          className="rounded-md w-[100px] h-[100px]"
                          src={musicicon}
                          alt="뮤직아이콘"
                        ></img>
                      </button>
                    </li>

                    <li className="left-60 absolute w-[100px]">
                      <button className="shadow-xl hover:scale-[150%]">
                        <img
                          className="rounded-md w-[100px] h-[100px]"
                          src={musicicon}
                          alt="뮤직아이콘"
                        ></img>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* 게시글내용 */}
              <div className="flex w-[875px] justify-center border-b-[1px] border-solid border-black">
                <span className="w-[800px] mb-10">{item.text}</span>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div>
          <div className="flex flex-col justify-center items-center">
            <form action="">
              <label id="answer">댓글</label>
              <input
                type="text"
                id="answer"
                className="border-2 border-solid border-black w-[500px] h-[40px]"
              />
            </form>
          </div>
          <div>
            <table></table>
          </div>
        </div>
        <PlaylistIcon />
      </div>
    </>
  );
};

export default CommunityDetail;
