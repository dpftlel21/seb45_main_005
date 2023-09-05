import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/images/logo.png';
import Email from '../../assets/images/email.svg';
import Lock from '../../assets/images/lock.svg';
import Person from '../../assets/images/person.svg';
import Calendar from '../../assets/images/calendar.svg';

const SignUp = () => {
  interface IFormInput {
    email: string;
    password: string;
    name: string;
    birthdate: string;
    passwordconfirm: string;
  }

  const history = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    console.log(data);
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(data); // data 반환
      }, 1000);
    });
    // eslint-disable-next-line
    //alert(JSON.stringify(result));
    if (result) {
      history('/login');
    }
  };

  console.log(errors.email);
  return (
    <>
      <main className="bg-[#F2F2F2] h-screen">
        <div className=" flex flex-col justify-center items-center ">
          <img src={Logo} alt="" className="my-14" />
          <div className="flex flex-col border-2 border-solid border-none shadow-2xl rounded-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-[550px] h-[700px] ml-48 mt-6"
            >
              <div className="flex flex-row items-center text-xl">
                <img src={Email} alt="" className="w-10" />
                <label htmlFor="email">이메일</label>
              </div>
              <div className="flex flex-row justify-between">
                <input
                  type="text"
                  {...register('email', {
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: '이메일 형식에 맞지 않습니다.',
                    },
                  })}
                  className={`w-[330px] h-8 border-2 border-solid border-white shadow-lg ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                />
              </div>
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              <div className="flex flex-row items-center text-xl mt-6">
                <img src={Lock} alt="" className="w-10" />
                <label htmlFor="password">비밀번호</label>
              </div>
              <input
                type="password"
                {...register('password', {
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                    message: '비밀번호는 영문 숫자 8자리 이상이여야 합니다.',
                  },
                })}
                className={`w-[330px] h-8 border-2 border-solid border-white shadow-lg ${
                  errors.password?.message ? 'border-red-500' : ''
                }`}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}

              <div className="flex flex-row items-center text-xl mt-4">
                <img src={Person} alt="" className="w-10" />
                <label htmlFor="name">닉네임</label>
              </div>
              <input
                type="text"
                id="name"
                {...register('name', { required: '닉네임은 필수 입니다.' })}
                className="w-[330px] h-8 border-2 border-solid border-white shadow-lg"
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}

              <div className="flex flex-row items-center text-xl mt-4">
                <img src={Calendar} alt="" className="w-10" />
                <label htmlFor="birthdate">생년월일</label>
              </div>
              <input
                type="date"
                className={`w-52 rounded-lg ${errors.birthdate ? 'border-red-500' : ''}`}
                {...register('birthdate', { required: '생년월일은 필수 입니다.' })}
              />
              {errors.birthdate && <span className="text-red-500">{errors.birthdate.message}</span>}
              <div className="flex flex-col items-baseline mt-8">
                <div className="text-xl">비밀번호 찾기 질문</div>
                <input
                  type="text"
                  id="passwordconfirm"
                  {...register('passwordconfirm')}
                  className="w-[330px] h-8"
                ></input>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-16 mt-12 bg-[#C487F4] w-[270px] h-10 rounded-xl hover:bg-opacity-90 hover:bg-[#C487F4]"
              >
                회원가입
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
