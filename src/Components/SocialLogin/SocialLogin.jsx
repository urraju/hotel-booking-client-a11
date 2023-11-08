
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuth from "../../Auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { google, github } = useAuth();
  const handleButton = (google) => {
    google()
      .then((res) => {
        toast.success('login success')
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => console.log(error.message));
  };
  const githubHandler = (gitHub) => {
    gitHub()
    .then((res) => {
      toast.success('login success')
      navigate(location?.state ? location.state : "/")
    })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <div className="divider text-white">continue with</div>
      <div className=" flex justify-center gap-7">
        <button
          onClick={() => handleButton(google, github)}
          className="bg-white h-10 w-10 hover:bg-black transition delay-75 hover:text-white rounded-full"
        >
          <div className="flex justify-around">
            <FcGoogle />
          </div>
        </button>
        <button
          onClick={() => githubHandler(github)}
          className=" bg-white h-10 w-10 hover:bg-black transition delay-75 hover:text-white rounded-full"
        >
          <div className="flex justify-around">
            <BsGithub />
          </div>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
