import Header from '../components/Header';
import WeatherBackground from '../assets/images/GIF/sun.gif';
import ContentBox from '../components/WeatherRecommendation/ContentBox';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';
import Footer from '../components/Main/Footer';

const WeatherRecommend = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${WeatherBackground})`, // 배경 이미지
        backgroundPosition: 'center', // 이미지 위치
        backgroundSize: '1140px, 100vh', // 이미지 꽉차게
        backgroundRepeat: 'no-repeat', // 이미지 반복 지정
        height: '100vh',
      }}
    >
      <Header />
      <div className="flex items-center justify-center mt-12">
        <ContentBox />
      </div>
      <div className="w-full flex justify-end">
        <PlaylistIcon />
      </div>
      <Footer />
    </div>
  );
};

export default WeatherRecommend;
