import Weather from './Weather';
import Today from '../../assets/images/todaymusic.png';

const ContentBox = () => {
  return (
    <>
      <div className="w-[1230px] h-[720px] bg-[#3c84d633] bg-opacity-5 border-1 shadow-md">
        <div className="flex justify-center items-center">
          <Weather />
          <img
            src={Today}
            alt="TodayMusic"
            className="w-[500px] h-[200px] mt-12"
          />
        </div>
      </div>
    </>
  );
};

export default ContentBox;
