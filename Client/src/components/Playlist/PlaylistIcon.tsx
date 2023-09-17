import { KeyboardEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/slice/ModalSlice';
import playIcon from '../../assets/images/playicon.png';
import PlaylistModal from '../Modal/PlaylistModal';
import { RootState } from '../../redux/store';

const playlistIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  // 버튼에 대한 Ref 객체 생성
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Enter 키 입력 이벤트 핸들러 함수
  function handleEnterKeyPress(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Enter') {
      // Enter 키가 눌렸을 때 버튼 클릭 이벤트 실행
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        onKeyPress={handleEnterKeyPress}
        tabIndex={0}
        className="w-[10vh] h-[10vh] fixed right-0 bottom-0 mr-8 mb-8 z-30"
      >
        <img
          src={playIcon}
          alt="playIcon"
          className="fixed right-0 bottom-0 mr-8 mb-8 hover:animate-bounceIn w-[10vh] h-[10vh]"
        />
      </button>
      {isOpen && <PlaylistModal />}
    </>
  );
};

export default playlistIcon;
