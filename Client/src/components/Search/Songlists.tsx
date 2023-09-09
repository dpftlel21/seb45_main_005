import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { selectedSonglist } from '../../redux/slice/SonglistsSlice';

const SongLists = () => {
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 항목을 저장할 상태

  const SongData = useSelector((state: RootState) => state.songlists.value);

  const dispatch = useDispatch();

  const handleSongClick = (el: object) => {
    const isSelected = selectedItems.includes(el);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== el));
    } else {
      setSelectedItems([...selectedItems, el]);
      dispatch(selectedSonglist(el));
    }
  };

  return (
    <>
      {/* 플리 앨범, 제목, 내용 */}
      <div className="w-full h-[80px] grid grid-cols-6 text-center items-center mt-8 font-['Anton-Regular'] border-y-2 border-solid border-gray-400">
        <h3 className="">#</h3>
        <h3 className="">No.</h3>
        <h3 className="">Artist</h3>
        <h3 className="">Album</h3>
        <h3 className="">Title</h3>
        <h3 className="">Time</h3>
      </div>

      {/* 플리 노래목록 */}
      <ul className="w-full h-[500px] flex flex-col overflow-y-scroll">
        {SongData.map((el, index) => (
          <li
            className={`w-full h-[100px] grid grid-cols-6 items-center text-center border-b-2 border-solid border-gray-400 border-opacity-20 ${
              selectedItems.includes(el) ? 'bg-blue-200' : ''
            }`}
            key={index}
            onClick={() => handleSongClick(el)} // li 요소 클릭 시 토글 함수 호출
          >
            <input
              type="checkbox"
              onClick={() => handleSongClick(el)}
              checked={selectedItems.includes(el)}
            />
            <h3>{index + 1}</h3>
            <div className="flex justify-center items-center text-center">
              <img src={el.imageUrl} className="w-[50px] h-[50px] mr-4" />
              <div className="h-[50px] flex flex-col items-center mt-6">
                <p className="text-sm">{el.artistName}</p>
              </div>
            </div>
            <h3>{el.albumName}</h3>
            <h3>{el.title}</h3>
            <h3>3:12</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SongLists;
