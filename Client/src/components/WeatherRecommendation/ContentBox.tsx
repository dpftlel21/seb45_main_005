import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Today from '../../assets/images/todaymusic.png';
import SunBackground from '../../assets/images/GIF/sun.gif';
import RainyBackground from '../../assets/images/GIF/rainy.gif';
import SnowBackground from '../../assets/images/GIF/snow.gif';
import CloudyBackground from '../../assets/images/GIF/cloudy.gif';
import RecommendLists from './Genre/RecommendLists';
import Weather from './Weather';
import WeatherChange from './Button/WeatherChange';

export type WeatherData = {
  weatherDescription: string;
};

const ContentBox = () => {
  const weather = useSelector((state: RootState) => state.weather.value);
  console.log(weather);

  let backgroundImage = SunBackground; // 기본 이미지로 설정

  // 날씨에 따른 배경화면 처리
  if (weather === 'Clear') {
    backgroundImage = SunBackground;
  } else if (weather === 'Rain') {
    backgroundImage = RainyBackground;
  } else if (weather === 'Snow') {
    backgroundImage = SnowBackground;
  } else if (weather === 'Clouds') {
    backgroundImage = CloudyBackground;
  }

  return (
    <div
      className="w-[1230px] h-[720px] bg-[#3c84d633] bg-opacity-5 border-1 shadow-md"
      style={{
        backgroundImage: `url(${backgroundImage})`, // 변경된 이미지 경로를 설정
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full flex justify-between items-center mt-12">
        <WeatherChange />
        <Weather />
      </div>
      <div className="flex justify-center items-center">
        <img src={Today} alt="TodayMusic" className="w-[300px] h-[150px] mt-12" />
      </div>
      <RecommendLists />
    </div>
  );
};

export default ContentBox;
