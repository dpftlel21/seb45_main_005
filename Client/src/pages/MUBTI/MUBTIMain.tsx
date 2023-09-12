import Header from 'src/components/Header';
import MUBTIBackground from '../../assets/images/GIF/MUBTI.gif';

const MUBTIMain = () => {
  return (
    <div className="bg-[#35435e]">
      <Header />
      <div
        style={{
          height: '100vh',
          background: '#35435e',
        }}
        className="flex flex-col justify-center items-center"
      >
        <img src={MUBTIBackground} alt="MUBTI" className="h-[550px]" />
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">
            당신의 음악 취향, 상황, 기분에 맞춰서 음악을 추천 해 드려요 !!{' '}
          </h1>
          <h2 className="text-2xl font-bold my-8">Shall We MUBTI !?</h2>
          <a
            href="./mubti/1"
            className="w-[200px] h-[50px] bg-[#efd0a0] inline-flex justify-center items-center text-black font-bold mb-4 rounded-full hover:animate-bounceIn"
          >
            MUBTI 바로가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MUBTIMain;
