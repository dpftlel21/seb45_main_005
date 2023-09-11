import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/images/logo.png';

interface PwInput {
  pwfind: string;
}

const PwdFind = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<PwInput>();

  const onsubmit = async (data: PwInput) => {
    console.log(data);
    try {
      const response = await axios.post('/members/find/id', data);

      if (response.status === 200) {
        console.log('비밀번호 찾기 성공');
        // history('/signup')
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <>
      <div className="bg-[#F2F2F2] h-screen">
        <div className=" flex flex-col justify-center items-center ">
          <img src={Logo} alt="" className="my-20" />
          <div className="flex flex-col border-2 border-solid border-none shadow-2xl rounded-2xl w-[600px] h-[600px]">
            <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col">
              <div>비밀번호를 찾아 보실까요?</div>
              <input
                type="text"
                id="pwfind"
                {...register('pwfind', { required: '아이디는 뭘로 찾아야 하나요?' })}
              ></input>
              {errors.pwfind && <p style={{ color: 'red' }}>{errors.pwfind.message} </p>}
              <button type="submit" disabled={isSubmitting}>
                비밀번호 찾기
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PwdFind;
