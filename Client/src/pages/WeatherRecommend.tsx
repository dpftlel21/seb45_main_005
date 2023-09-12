import Header from '../components/Header';
import ContentBox from '../components/WeatherRecommendation/ContentBox';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

const WeatherRecommend = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed]">
      <Header />
      <div className="flex items-center justify-center mt-12">
        <ContentBox />
      </div>
      <div className="w-full flex justify-end">
        <PlaylistIcon />
      </div>
    </div>
  );
};

export default WeatherRecommend;
