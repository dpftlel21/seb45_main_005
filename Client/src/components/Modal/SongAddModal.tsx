const SongAddModal = () => {
  return (
    <div className="w-full h-full fixed top-0 flex flex-col justify-center items-center font-['Anton-Regular'] bg-[#4a4b4a42] text-[#838282]">
      <div className="w-[300px] flex flex-col justify-center items-center bg-[#414052] border-2 border-gray-500 border-solid animate-fadeIn">
        <div className="my-8 text-[#ffff]">
          <p className="mb-4">플리 리스트</p>
          <input type="text" className="w-[250px] pl-2 rounded-2xl bg-[#6b6767]"></input>
        </div>
        <div>
          <button className="w-[70px] h-[40px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
            추가
          </button>
          <button className="w-[70px] h-[40px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongAddModal;
