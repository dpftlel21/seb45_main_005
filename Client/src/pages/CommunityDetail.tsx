import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../redux/store';
import Header from '../components/Header';
import usericon from '../assets/images/user.png';
// import musicicon from '../assets/images/Rectangle(1).png';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';
import playlistdisc from '../assets/images/playlistdisc.png';

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
  likeCount: number;
  viewCount: number;
  text: string;
  nickName: string;
  memberId: number;
  comments: [];
  playlistId: number;
  playlistTitle: string;
}

const CommunityDetail = () => {
  const [commentPosted, setCommentPosted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [posts, setPosts] = useState<Post>({
    postId: 0,
    title: '',
    viewCount: 0,
    likeCount: 0,
    text: '',
    nickName: '',
    memberId: 0,
    comments: [],
    playlistId: null,
    playlistTitle: '',
  });
  const [comment, setComment] = useState('');
  const [songs, setSongs] = useState([]);
  const currentUrl = new URL(document.location.toString());
  const communityParam = currentUrl.pathname.split('/').pop() || '';
  const postId = parseInt(communityParam, 10);

  const accessToken = useSelector((state: RootState) => state.login.accessToken);

  const memberId = useSelector((state: RootState) => state.login.memberid);
  const numMemberId = Number(memberId);

  const savedComment: Comment[] = posts.comments;

  const navigate = useNavigate();
  const headers = {
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
  };

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  // useEffect(() => {
  //   axios
  //     .patch(
  //       `${process.env.REACT_APP_BE_API_URL}/posts/${postId}/like`,
  //       {},
  //       {
  //         headers: {
  //           'Authorization': accessToken,
  //           'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
  //         },
  //       }
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [isLiked]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/posts/${postId}`, {
        headers: {
          'Authorization': accessToken,
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
        },
      })
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId, commentPosted]);

  const handleComment = async (e: any) => {
    e.preventDefault();
    await axios
      .post(
        `${process.env.REACT_APP_BE_API_URL}/comments`,
        {
          memberId: numMemberId,
          postId,
          text: comment,
        },
        {
          headers: {
            'Authorization': accessToken,
            'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate(`../community/${postId}`);
        setCommentPosted(!commentPosted); // 댓글이 등록되었음을 상태에 업데이트
      });
    setTimeout(function () {
      navigate(`../community/${postId}`);
    }, 500);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');

    if (confirmDelete) {
      // 확인을 누르면 삭제 요청을 보냅니다.
      return axios
        .delete(`${process.env.REACT_APP_BE_API_URL}/posts/${postId}`, {
          headers: {
            Authorization: accessToken,
          },
        })
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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/playlist/${posts.playlistId}`, { headers })
      .then((res) => {
        setSongs(res.data.data.playlistSongs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [posts, commentPosted]);

  const handleCommentDelete = async (a: number) => {
    console.log(a);
    await axios
      .delete(`${process.env.REACT_APP_BE_API_URL}/comments/${a}`, {
        headers: {
          'Authorization': accessToken,
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
        },
      })
      .then((res) => {
        setCommentPosted(!commentPosted);
        console.log(res);
      })
      .catch((err) => {
        alert('본인이 작성한 댓글이 아닙니다.');
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed] h-screen">
        <Header />
        <div className="h-[80vh] overflow-y-scroll">
          <div className="flex flex-col items-center">
            <div className="w-[120vh] mt-10">
              {/* 상단 제목과 이름 좋아요 바 */}
              <div className="w-[120vh] h-[10vh] border-b-[1px] border-solid border-black">
                <div className="w-[120vh] h-[5vh] flex justify-between">
                  <span className="text-xl">{posts.title}</span>
                  <div className="w-[30vh] flex justify-end">
                    <button onClick={handleEdit} className="mr-5 text-xs">
                      수정
                    </button>
                    <button className="text-xs" onClick={handleDelete}>
                      삭제
                    </button>
                  </div>
                </div>
                <div className="w-[120vh] h-[5vh] flex items-center">
                  <img src={usericon} alt="유저아이콘" className="w-[4vh] h-[4vh]" />
                  <span className="inline-flex w-[16vh] h-[10vh] items-center justify-center">
                    {posts.nickName}
                  </span>
                  <div className="w-[100vh]"></div>
                  <div className="w-[30vh] h-[5vh] inline-flex items-center justify-end text-xs">
                    <span>{posts.likeCount}</span>
                    <button className="text-xl ml-2" onClick={handleLikeClick}>
                      {isLiked ? '❤️' : '🤍'}
                    </button>
                    <span className="ml-2">{posts.viewCount}</span>
                    <span className="ml-2">views</span>
                  </div>
                </div>
              </div>
              {/* 플레이리스트 */}
              <div className="flex flex-col w-[120vh] h-[44vh] ">
                <div className="w-[120vh] h-[4vh] flex justify-end">
                  <button className="text-xs">내 플레이리스트에 추가 ⎋</button>
                </div>

                <div className="flex  items-center w-[120vh] h-[40vh] justify-center  flex-wrap">
                  <ul className="playlist-buttons   flex flex-row w-[120vh] h-[40vh] flex-wrap">
                    <div className="mr-4 w-[40vh] h-[30vh] flex flex-col justify-center backdrop-blur-md bg-opacity-10 shadow-xl rounded-xl bg-[#d8d5d5]">
                      <div className="text-center text-2xl">{posts.playlistTitle}</div>
                      <div className="flex justify-center">
                        <img
                          className="w-[20vh] h-[20vh] animate-spin-slow"
                          src={playlistdisc}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="flex flex-col flex-wrap h-[40vh]">
                      {songs.map((el, idx) => (
                        <li key={idx} className="inline-flex  my-4 w-[25vh] h-[5vh]">
                          <img
                            className="w-[6vh] h-[6vh] rounded-md mr-2"
                            src={el.imageUrl}
                            alt=""
                          />
                          <div className="flex flex-col">
                            <p className="font-['Anton-Regular']">{el.title}</p>
                            <p className="text-xs">{el.artistName}</p>
                          </div>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
              {/* 게시글내용 */}
              <div className="flex w-[120vh] justify-center border-b-[1px] border-solid border-black mt-8">
                <span className="w-[110vh] mb-10">{posts.text}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <form>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 작성해 보세요!"
                id="answer"
                className="rounded-md w-[80vh] h-[6vh] mt-4 mb-4 p-[4px]"
              />
              <button
                className="rounded-md w-[10vh] h-[6vh] ml-4 bg-[#ffffff]"
                onClick={(e) => handleComment(e)}
              >
                등록
              </button>
            </form>
          </div>

          {/* 댓글내용 */}
          <div className="flex flex-col justify-center items-center">
            {savedComment.map((item, idx) => (
              <div key={idx} className="flex flex-row justify-center items-center w-[85vh]">
                <div>
                  <img className="w-[4vh] h-[4vh] mr-2" src={usericon} alt="임시유저이미지" />
                </div>
                <div className="flex flex-col h-[6vh] items-center justify-center">
                  <span className="w-[70vh] h-[2vh] ">{item.nickname}</span>
                  <span className="w-[70vh] h-[2vh] ">{item.text}</span>
                </div>
                <button className="mr-2">답글</button>
                <button onClick={() => handleCommentDelete(item.commentId)}>삭제</button>
              </div>
            ))}
          </div>
        </div>

        <PlaylistIcon />
      </div>
    </>
  );
};

export default CommunityDetail;
