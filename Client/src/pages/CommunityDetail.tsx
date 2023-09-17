import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../redux/store';
import Header from '../components/Header';
import usericon from '../assets/images/user.png';
import musicicon from '../assets/images/Rectangle(1).png';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

interface Comment {
  commentId: number;
  memberId: number;
  nickname: string;
  postId: number;
  text: string;
}

interface Post {
  postId: number;
  title: string;
  voteCount: number;
  viewCount: number;
  text: string;
  nickName: string;
  memberId: number;
  comments: [];
}

const CommunityDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [posts, setPosts] = useState<Post>({
    postId: 0,
    title: '',
    viewCount: 0,
    voteCount: 0,
    text: '',
    nickName: '',
    memberId: 0,
    comments: [],
  });
  const [comment, setComment] = useState('');
  const currentUrl = new URL(document.location.toString());
  const communityParam = currentUrl.pathname.split('/').pop() || '';
  const postId = parseInt(communityParam, 10);
  console.log(postId);
  const accessToken = useSelector((state: RootState) => state.login.accessToken);
  const memberid = useSelector((state: RootState) => state.login.memberid);
  // const accessToken = useSelector((state: RootState) => state.login.accessToken);
  // const refreshToken = useSelector((state: RootState) => state.login.refreshToken);
  // const dispatch = useDispatch();
  const savedComment: Comment[] = posts.comments;
  console.log(savedComment);
  const navigate = useNavigate();
  const headers = {
    'Access-Control-Allow-Origin': 'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
  };

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  useEffect(() => {
    axios
      .get(`http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/posts/${postId}`, {
        headers,
      })
      .then((res) => {
        console.log(res);
        // setPosts(res.data.data);
        setPosts(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);

  const handleComment = () => {
    axios.post(
      `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/comments`,
      {
        memberid,
        postId,
        text: comment,
      },
      {
        headers: {
          'Authorization': accessToken,
          'Access-Control-Allow-Origin':
            'http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/',
        },
      }
    );
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');

    if (confirmDelete) {
      // 확인을 누르면 삭제 요청을 보냅니다.
      return axios
        .delete(
          `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/posts/${postId}`,
          {
            headers: {
              Authorization: accessToken,
            },
          }
        )
        .then((res) => {
          // 삭제 성공 시의 처리
          console.log('삭제가 완료되었습니다.', res.data);
          navigate('../community');
          // 여기에서 필요한 추가 작업을 수행할 수 있습니다.
        })
        .catch((err) => {
          // 삭제 실패 시의 처리
          console.error('삭제 중 오류가 발생했습니다.', err);
          // 여기에서 오류 처리를 할 수 있습니다.
        });
    }
    return <></>;
  };

  const handleEdit = () => {
    navigate('./edit');
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed] h-screen">
        <Header />

        <div className="flex flex-col items-center">
          <div className="w-[875px] mt-10">
            {/* 상단 제목과 이름 좋아요 바 */}
            <div className="w-[875px] h-[100px] border-b-[1px] border-solid border-black">
              <div className="w-[875px] h-[50px] flex justify-between">
                <span className="text-xl">{posts.title}</span>
                <div className="w-[150px] flex justify-center">
                  <button onClick={handleEdit} className="mr-5 text-xs">
                    수정
                  </button>
                  <button className="text-xs" onClick={handleDelete}>
                    삭제
                  </button>
                </div>
              </div>
              <div className="w-[875px] h-[50px] flex items-center">
                <img src={usericon} alt="유저아이콘" className="w-[40px] h-40px]" />
                <span className="inline-flex w-[80px] h-[50px] items-center justify-center">
                  {posts.nickName}
                </span>
                <div className="w-[625px]"></div>
                <div className="w-[150px] h-[50px] inline-flex items-center justify-center text-xs">
                  <span>{posts.voteCount}</span>
                  <button className="text-xl ml-2" onClick={handleLikeClick}>
                    {isLiked ? '❤️' : '🤍'}
                  </button>
                  <span className="ml-2">{posts.viewCount}</span>
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
              <span className="w-[800px] mb-10">{posts.text}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <form>
              <label id="answer">댓글 작성</label>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                id="answer"
                className="border-2 border-solid border-black w-[500px] h-[40px]"
              />
              <button onClick={handleComment}>등록</button>
            </form>
          </div>
        </div>
        {/* 댓글내용 */}
        <div>
          {savedComment.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-center items-center">
              <span className="w-[700px] h-[30px]">{item.nickname}</span>
              <span className="w-[700px] h-[50px]">{item.text}</span>
            </div>
          ))}
        </div>

        <hr />

        <PlaylistIcon />
      </div>
    </>
  );
};

export default CommunityDetail;
