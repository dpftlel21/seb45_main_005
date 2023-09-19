import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
// import playlistimg from '../assets/images/Rectangle 64.png';
import { setCurrentPage } from '../redux/slice/CommunitySlice';
import 'animate.css';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';
import Wrapper from '../components/Wrapper/Wrapper';
// import Motherplayer from '../components/Main/Motherplayer';
import userIcon from '../assets/images/user.png';

interface Post {
  postId: number;
  title: string;
  voteCount: number;
  viewCount: number;
  text: string;
  nickName: string;
  memberId: number;
  likeCount: number;
}

const Community = () => {
  const headers = {
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(
        `${process.env.REACT_APP_BE_API_URL}/posts/search?page=${currentPage}&size=10&keyword=${searchQuery}`,
        { headers }
      )
      .then((res) => {
        setPosts(res.data.data);
        setTotalPages(res.data.pageInfo.totPages);
        dispatch(setCurrentPage(currentPage));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleWriteButton = () => {
    navigate('./write');
  };

  const handlePageChange = (pageNumber: number) => {
    setcurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  // 기본 순 나열
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BE_API_URL}/posts?page=${currentPage}&size=10&sort=postId,desc`,
        { headers }
      )
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data);
        setTotalPages(res.data.pageInfo.totPages);
        dispatch(setCurrentPage(currentPage));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const handleDefault = () => {
    axios
      .get(
        `${process.env.REACT_APP_BE_API_URL}/posts?page=${currentPage}&size=10&sort=postId,desc`,
        { headers }
      )
      .then((res) => {
        setPosts(res.data.data);
        setTotalPages(res.data.pageInfo.totPages);
        dispatch(setCurrentPage(currentPage));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 좋아요 순 나열
  const handleLikeCount = () => {
    axios
      .get(
        `${process.env.REACT_APP_BE_API_URL}/posts?page=${currentPage}&size=10&sort=likeCount,desc`,
        { headers }
      )
      .then((res) => {
        setPosts(res.data.data);
        setTotalPages(res.data.pageInfo.totPages);
        dispatch(setCurrentPage(currentPage));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 조회 순 나열
  const handleViewCount = () => {
    axios
      .get(
        `${process.env.REACT_APP_BE_API_URL}/posts?page=${currentPage}&size=10&sort=viewCount,desc`,
        { headers }
      )
      .then((res) => {
        setPosts(res.data.data);
        setTotalPages(res.data.pageInfo.totPages);
        dispatch(setCurrentPage(currentPage));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed] h-screen flex flex-col items-center">
        <div className="w-screen">
          <Header />
        </div>
        <Wrapper>
          <div className="flex flex-col w-[120vh] h-[65vh] items-center">
            <div className="flex w-full h-[10vh] items-center border-b-[1px] border-solid border-[#000000] justify-center">
              <button
                className="w-[28vh] text-center text-xs underline"
                onClick={handleWriteButton}
              >
                글쓰기
              </button>

              <form onSubmit={handleSearchSubmit} className=" w-[140vh] ]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="text-center text-xs w-[60vh] ml-10 rounded-xl h-[3vh] border-1 border-solid border-[#000000]"
                  placeholder="게시글 검색"
                />
              </form>

              <button onClick={handleDefault} className="w-[10vh] text-center text-xs underline">
                기본순
              </button>
              <button onClick={handleViewCount} className="w-[10vh] text-center text-xs underline">
                조회순
              </button>
              <button onClick={handleLikeCount} className="w-[10vh] text-center text-xs underline">
                좋아요순
              </button>
            </div>
            <div>
              <table className="flex flex-col w-[120vh] items-center justify-center ">
                {posts &&
                  posts.map((item, idx) => (
                    <tr
                      className="flex w-[120vh] h-[6vh] items-center border-b-[1px] border-solid border-[#bdc2f8] justify-center"
                      key={item.postId}
                    >
                      <td className="w-[10vh] text-center text-xs">{idx + currentPage * 10 - 9}</td>
                      <td className="w-[20vh] inline-flex justify-start items-center">
                        <img className="w-[4vh] h-[4vh]" src={userIcon} alt="유저이미지"></img>
                        <p className="text-xs">
                          <a href={`../othermypage/${item.memberId}`}>{item.nickName}</a>
                        </p>
                      </td>

                      <td className="w-[140vh] text-start  ml-10">
                        <a href={`./community/${item.postId}`}>{item.title}</a>
                      </td>
                      <td className="w-[10vh] text-center text-xs">{item.viewCount}</td>
                      <td className="w-[10vh] text-center text-xs">{item.likeCount}</td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="mr-2 px-2 py-1 border rounded"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              이전
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`mx-2 px-2 py-1 border rounded ${
                  currentPage === i + 1 ? 'bg-gray-300' : ''
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="ml-2 px-2 py-1 border rounded"
              onClick={handleNextPage}
              // disabled={currentPage === totalPages}
            >
              다음
            </button>
          </div>
        </Wrapper>
      </div>

      <PlaylistIcon />
    </>
  );
};

export default Community;
