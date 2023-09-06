const SurveySituation = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: '#35435e',
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-row justify-between items-center w-[250px] ">
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full "></button>
        <button className="w-[20px] h-[20px] bg-[#797676] rounded-full border-2 border-red-100 "></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
      </div>
      <h2 className="text-white text-2xl font-bold my-8">본인의 상황을 골라주세요!!</h2>
      <a
        href="./loading"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        운동
      </a>
      <a
        href="./loading"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        잠자리
      </a>
      <a
        href="./loading"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        공부, 독서
      </a>
      <a
        href="./loading"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        기타 (아무거나 추천)
      </a>
    </div>
  );
};

export default SurveySituation;
