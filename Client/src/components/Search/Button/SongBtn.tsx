const SongBtn = () => {
  return (
    <div className="flex justify-center">
      <button className="w-[150px] h-[50px] mb-4 mr-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
        추가
      </button>
      <button className="w-[150px] h-[50px] mb-4 ml-4 rounded-2xl border-2 border-purple-400 hover:bg-[#9574b1] hover:text-white">
        삭제
      </button>
    </div>
  );
};

export default SongBtn;
