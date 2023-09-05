const Survey = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: '#35435e',
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-row justify-between items-center w-[250px] ">
        <button className="w-[20px] h-[20px] bg-[#797676] rounded-full border-2 border-red-100"></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full "></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
      </div>
      <h2 className="text-white text-2xl font-bold my-8">
        간단한 설문조사를 진행할 예정입니다. 본인의 현재 상황을 알려주세요 !
      </h2>
      <a
        href="./mood"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        기분
      </a>
      <a
        href="./situation"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        상황 (운동,공부,잠)
      </a>
      <a
        href="./liking"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        원하는 느낌
      </a>
      <a
        href="./result"
        className="inline-flex justify-center items-center w-[450px] h-[50px] bg-[#D9D9D9] text-black font-bold my-5 rounded-full hover:bg-[#EFD0A0]"
      >
        유튜버 플레이리스트
      </a>
    </div>
  );
};

export default Survey;
