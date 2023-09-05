import { useDispatch } from 'react-redux';
import { closeToastModal } from '../../redux/slice/ModalSlice';

const ToastModal = () => {
  const dispatch = useDispatch();

  const handleCloseToast = () => {
    dispatch(closeToastModal());
  };

  return (
    <div className="w-full h-full fixed top-0 flex flex-col justify-center items-center font-['Anton-Regular'] bg-[#4a4b4a42] text-[#838282]">
      <div className="w-[300px] flex flex-col justify-center items-center border-2 border-gray-500 border-solid animate-fadeIn">
        <div className="my-8 text-[#ffff]">
          <p className="mb-4">플리 제목</p>
          <input type="text" className="w-[250px] pl-2 rounded-2xl bg-[#6b6767]"></input>
        </div>
        <div className="mb-8">
          <p className="mb-4 text-[#ffff]">플리 내용</p>
          <input type="text" className="w-[250px] pl-2 rounded-2xl bg-[#6b6767]"></input>
        </div>
        <div>
          <button className="w-[70px] h-[40px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
            추가
          </button>
          <button
            onClick={handleCloseToast}
            className="w-[70px] h-[40px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastModal;
