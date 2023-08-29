import Header from '../components/Header';
import startBackground from '../assets/images/GIF/sun.gif';
import ContentBox from '../components/WeatherRecommendation/ContentBox';

const WeatherRecommend = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${startBackground})`, // 배경 이미지
        backgroundPosition: 'center', // 이미지 위치
        backgroundSize: 'cover', // 이미지 꽉차게
        backgroundRepeat: 'no-repeat', // 이미지 반복 지정
        height: '100vh',
      }}
    >
      <Header />
      <div className="flex items-center justify-center mt-12">
        <ContentBox />
      </div>
    </div>
  );
};

export default WeatherRecommend;
