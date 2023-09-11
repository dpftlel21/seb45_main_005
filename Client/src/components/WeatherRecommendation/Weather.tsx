import axios from 'axios';
import { useEffect, useState } from 'react';

export type WeatherData = {
  temperature: number;
  weatherDescription: string;
};

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    weatherDescription: '',
  });

  useEffect(() => {
    // 현재 위치 받아오기
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      axios
        .get(
          `http://ec2-15-164-171-149.ap-northeast-2.compute.amazonaws.com:8080/weather/data?lat=${latitude}&lon=${longitude}`
        )
        .then(({ data }) => {
          const { temperature, weatherDescription } = data;
          setWeather({ temperature, weatherDescription });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  // 날씨별 이모티콘 처리
  const getWeatherEmoji = (weatherDescription: string) => {
    switch (weatherDescription) {
      case 'Clear':
        return '🌞';
      case 'Clouds':
      case 'Fog':
      case 'Haze':
        return '☁️';
      case 'Rain':
      case 'Drizzle':
        return '🌧️';
      case 'Snow':
        return '☃️';
      case 'Thunderstorm':
        return '⛈️';
      default:
        return '';
    }
  };

  return (
    <div className="flex justify-start text-2xl mt-12">
      <h1 className="mx-8">{getWeatherEmoji(weather.weatherDescription)}</h1>
      <h1>{weather.temperature}℃</h1>
    </div>
  );
};

export default Weather;
