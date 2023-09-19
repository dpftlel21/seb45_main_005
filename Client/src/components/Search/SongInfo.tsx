import { useSelector } from 'react-redux';
import Logo from '../../assets/images/logo.png';
import { RootState } from '../../redux/store';
import AlbumFirst from '../../assets/images/AlbumFirst.png';

const SongInfo = () => {
  const songInfo = useSelector((state: RootState) => state.songlists.songInfo);

  return (
    <>
      {/* 앨범표지 */}
      <div className="w-full h-[15vh] flex justify-start items-center my-2">
        <img src={songInfo.imageUrl || AlbumFirst} className="w-[100px] h-[100px] ml-12" />
        <div className="flex flex-col justify-around ml-4">
          <p className="text-sm font-['Anton-Regular']">Album : {songInfo.albumName}</p>
          <h1 className="text-2xl font-['Anton-Regular'] my-2">Title : {songInfo.title}</h1>
          <p className="text-sm font-['Anton-Regular']">Artist : {songInfo.artistName}</p>
          <div className="flex items-center">
            <img src={Logo} className="w-[90px] h-[30px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SongInfo;
