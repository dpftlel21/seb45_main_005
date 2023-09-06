import Album from '../../../assets/images/Album.png';

const SurveyResult = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: '#35435e',
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-row justify-between items-center w-[250px] ">
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full "></button>
        <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
        <button className="w-[20px] h-[20px] bg-[#797676] rounded-full border-2 border-red-100"></button>
      </div>
      <h1 className="flex my-8 font-['Anton-Regular'] text-[#d9d9d9] text-2xl font-semibold">
        클래식하다라,,,, 이런 장르는 어떨까요 !?
      </h1>
      <div>
        <h1 className="w-full flex justify-start mt-8 ml-4 font-['Anton-Regular'] text-2xl text-[#d9d9d9]">
          Pop
        </h1>
        <div className="flex ">
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
        </div>

        <div className="flex ">
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
          <img
            src={Album}
            alt="Album"
            className="w-[200px] h-[200px] mt-8 hover:translate-y-[-15px] transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default SurveyResult;
