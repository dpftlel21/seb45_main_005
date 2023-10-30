import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Header';

const SurveyAdmin = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API_URL}/admin-suggest?q=12`)
      .then((res) => {
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen bg-[#35435e]">
      <Header />
      <div className="flex flex-col justify-center items-center mt-40">
        <div className="flex flex-row justify-between items-center w-[250px] ">
          <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
          <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full "></button>
          <button className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-full"></button>
          <button className="w-[20px] h-[20px] bg-[#797676] rounded-full border-2 border-red-100"></button>
        </div>
        <h1 className="flex my-8 font-['Anton-Regular'] text-[#d9d9d9] text-2xl font-semibold">
          두구두구둑두구,,,, 담당자가 뽑은 노래입니다 !! 마음에 드시면 좋겠네요 ㅎㅎ ~!
        </h1>
        <div>
          <h1 className="w-full flex justify-start my-8 ml-6 font-['Anton-Regular'] text-2xl text-[#d9d9d9] ">
            Recommend
          </h1>
          {state && (
            <div className="w-50vh justify-center flex flex-wrap">
              {state.map((el) => (
                <a
                  href={`${el.youtubeLink}`}
                  className="flex flex-col items-center justify-center mx-8 text-white"
                >
                  <div className="w-[150px] ">
                    <img src={el.thumbnailLink} className="w-[150px] h-[150px] my-4" />
                    <p className="h-[50px] text-center ">{el.artist}</p>
                    <p className="h-[50px] text-center ">{el.title}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyAdmin;
