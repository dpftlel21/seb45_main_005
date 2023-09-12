import Weather from './Weather';
import Today from '../../assets/images/todaymusic.png';
import WeatherBackground from '../../assets/images/GIF/sun.gif';
import Pop from './Genre/Pop';

const ContentBox = () => {
  return (
    <>
      <div
        className="w-[1230px] h-[720px] bg-[#3c84d633] bg-opacity-5 border-1 shadow-md"
        style={{
          backgroundImage: `url(${WeatherBackground})`, // 배경 이미지
          backgroundPosition: 'center', // 이미지 위치
          backgroundSize: 'cover', // 이미지 꽉차게
          backgroundRepeat: 'no-repeat', // 이미지 반복 지정
        }}
      >
        <Weather />
        <div className="flex justify-center items-center">
          <img src={Today} alt="TodayMusic" className="w-[300px] h-[150px] mt-12" />
        </div>
        <Pop />
      </div>
    </>
  );
};

export default ContentBox;
