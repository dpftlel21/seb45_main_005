import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

interface IdInput {
  id: string;
}

const IdFind = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IdInput>();

  const onsubmit = async (data: IdInput) => {
    console.log(data);
    try {
      const response = await axios.post('/members/find/id', data);

      if (response.status === 200) {
        console.log('아이디 찾기 성공');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };
  return (
    <>
      <div className="bg-[#F2F2F2] h-screen">
        <div className=" flex flex-col justify-center items-center ">
          <Link to="/">
            <img src={Logo} alt="" className="my-20" />
          </Link>
          <div className="flex flex-col items-center border-2 border-solid border-none shadow-2xl rounded-2xl w-[600px] h-[600px]">
            <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col mt-12">
              <div className="text-xl">아이디 찾기</div>
              <input
                className="w-[400px] h-8 rounded-lg"
                placeholder="회원가입시 설정한 질문에 대한 답변을 입력해주세요."
                type="email"
                id="id"
                {...register('id', { required: '아이디는 뭘로 찾아야 하나요?' })}
              ></input>
              {errors.id && <p style={{ color: 'red' }}>{errors.id.message} </p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-20 mt-96 w-[250px] h-10 rounded-lg bg-[#C487F4]"
              >
                확인
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdFind;
