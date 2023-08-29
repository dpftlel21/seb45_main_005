import userphoto from '../images/user.png';

const Profile = () => {
  return (
    <>
      <div className="flex flex-col w-60vw">
        <div className="flex h-[150px] w-80vw border-b-2 border-gray-500">
          <div className="flex w-[150px] h-[150px] justify-center items-center">
            <img
              className="w-[130px] h-[130px]"
              src={userphoto}
              alt="유저프로필"
            />
          </div>
          <div className="flex w-[600px] items-center ">
            <span className="w-40vw ml-4">이름</span>
          </div>
        </div>
        <div className="w-60vw h-[120px] border-t-2 border-[#363636] border-solid">
          내용 넣을것
        </div>
      </div>
    </>
  );
};

export default Profile;
