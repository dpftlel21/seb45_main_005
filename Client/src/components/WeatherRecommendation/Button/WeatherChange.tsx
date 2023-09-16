import { useDispatch } from 'react-redux';
import { changeWeather } from '../../../redux/slice/WeatherSlice';

const WeatherChange = () => {
  const dispatch = useDispatch();

  // 날씨 변경 버튼
  const changeToClearWeather = () => {
    dispatch(changeWeather('Clear'));
  };

  const changeToRainWeather = () => {
    dispatch(changeWeather('Rain'));
  };

  const changeToSnowWeather = () => {
    dispatch(changeWeather('Snow'));
  };

  const changeToCloudyWeather = () => {
    dispatch(changeWeather('Clouds'));
  };

  return (
    <div className="w-[280px] flex justify-around">
      <button className="w-[60px] h-[40px] bg-[#9ac9e4]" onClick={changeToClearWeather}>
        Clear
      </button>
      <button className="w-[60px] h-[40px] bg-[#9ac9e4]" onClick={changeToRainWeather}>
        Rain
      </button>
      <button className="w-[60px] h-[40px] bg-[#9ac9e4]" onClick={changeToSnowWeather}>
        Snow
      </button>
      <button className="w-[60px] h-[40px] bg-[#9ac9e4]" onClick={changeToCloudyWeather}>
        Cloudy
      </button>
    </div>
  );
};

export default WeatherChange;
