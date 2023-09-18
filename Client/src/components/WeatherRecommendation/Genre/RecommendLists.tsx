import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { RootState } from '../../../redux/store';
import { weatherResult } from '../../../redux/slice/WeatherSlice';
import { openModal, openSongLists } from '../../../redux/slice/ModalSlice';
import { setSelectedPlaylistId } from '../../../redux/slice/PlaylistsSlice';
import playlistdisc from '../../../assets/images/playlistdisc.png';

const RecommendLists = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather.value);
  const RecommendResult = useSelector((state: RootState) => state.weather.Result);

  const headers = {
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_FE_HEADER_URL}`,
  };

  const handleDetailOpen = async (playlistId: number) => {
    dispatch(openModal());

    setTimeout(async () => {
      await dispatch(openSongLists());
      dispatch(setSelectedPlaylistId(playlistId));
    }, 1500);
  };

  // 날씨별 추천 리스트 가져오기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/weather/result?page=1&size=10&q=${weather}`, {
        headers,
      })
      .then((res) => {
        dispatch(weatherResult(res.data.data));
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [weather]);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="my-8 font-['Anton-Regular'] text-2xl">RecommendLists</h1>
        <div className="flex ">
          {RecommendResult.map((el) => (
            <div
              onClick={() => handleDetailOpen(el.playlistId)}
              className="flex flex-col justify-center w-[150px] bg-[#d8d5d5] bg-opacity-10 shadow-xl rounded-xl backdrop-blur-md mx-4 hover:translate-y-[-15px] transition duration-300 ease-in-out"
            >
              <img src={playlistdisc} className="animate-spin-slow w-[150px] h-[150px] my-4" />
              <p className="h-[60px] font-bold text-lg text-center">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendLists;
