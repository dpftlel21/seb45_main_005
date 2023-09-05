import Weather from './Weather';
import Today from '../../assets/images/todaymusic.png';
import Pop from './Genre/Pop';

const ContentBox = () => {
  return (
    <>
      <div className="w-[1230px] h-[720px] bg-[#3c84d633] bg-opacity-5 border-1 shadow-md">
        <Weather />
        <div className="flex justify-center items-center">
          <img
            src={Today}
            alt="TodayMusic"
            className="w-[300px] h-[150px] mt-12"
            tabIndex={0}
          />
        </div>
        <Pop />
      </div>
    </>
  );
};

export default ContentBox;
