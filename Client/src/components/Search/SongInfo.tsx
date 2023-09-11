import { useSelector } from 'react-redux';
import Logo from '../../assets/images/logo.png';
import { RootState } from '../../redux/store';

const SongInfo = () => {
  const songInfo = useSelector((state: RootState) => state.songlists.songInfo);

  return (
    <>
      {/* 앨범표지 */}
      <div className="w-full flex justify-start mt-8">
        <img src={songInfo.imageUrl} className="w-[150px] h-[100px] ml-12" />
        <div className="flex flex-col justify-around ml-4">
          <p className="font-['Anton-Regular']">Album : {songInfo.albumName}</p>
          <h1 className="my-2 text-3xl font-['Anton-Regular']">Title : {songInfo.title}</h1>
          <p className="font-['Anton-Regular']">Artist : {songInfo.artistName}</p>
          <div className="flex items-center">
            <img src={Logo} className="w-[90px] h-[30px]" />
            <p className="ml-4">~ likes</p>
            <p className="ml-4">~ likes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongInfo;
