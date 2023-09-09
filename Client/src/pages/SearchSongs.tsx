import SongLists from '../components/Search/Songlists';
import Header from '../components/Header';
import SongBtn from '../components/Search/Button/SongBtn';
import SongInfo from '../components/Search/SongInfo';
import SearchInput from '../components/Search/SearchInput';
import PlaylistIcon from '../components/Playlist/PlaylistIcon';

const SearchSongs = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-[#D5E5F0] to-[#87c4ed]">
        <Header />
        <SearchInput />
        <div className="w-[1100px] bg-gradient-to-b from-[#c5ccec] to-[#b6d4e7] shadow-md">
          <SongInfo />
          <SongLists />
          <SongBtn />
        </div>
      </div>
      <PlaylistIcon />
    </>
  );
};

export default SearchSongs;
