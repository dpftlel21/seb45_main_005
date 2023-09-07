import Album from '../../assets/images/Album.png';
import Logo from '../../assets/images/logo.png';

const SongInfo = () => {
  return (
    <>
      {/* 앨범표지 */}
      <div className="w-full flex justify-start mt-8">
        <img src={Album} className="w-[150px] h-[100px] ml-12" />
        <div className="flex flex-col justify-around">
          <p>Playlist</p>
          <h1 className="text-3xl font-['Anton-Regular']">노래 제목</h1>
          <p>노래 내용</p>
          <div className="flex items-center">
            <img src={Logo} className="w-[100px] h-[30px]" />
            <p className="ml-4">~ likes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongInfo;
