
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import axios from "axios";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then((res) =>  {
      console.log(res.user);
      const userEmail = {email}
      axios.post('https://assignmant-11-server.vercel.app/jwt',userEmail, {withCredentials : true})
      .then(res => {
        console.log(res.data);
        if(res.data) {
          toast.success('Success Login')
          navigate(location?.state ? location.state : "/")
        }
      })
    });
    if(user){
      form.reset()
    }
    
       
    }

  return (
    <div data-aos="flip-up" className="w-full p-4 h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className=" mt-10 md:w-6/12  p-3 h-[500px] rounded flex items-center justify-center mx-auto bg-gradient-to-r  from-rose-500 border-b-8 border-violet-600 to-gray-900">
        <form
          onSubmit={handleLogin}
          className="w-96 rounded-lg p-10 backdrop-blur bg-white/10 font-philospar"
        >
          <h1 className="text-center text-xl uppercase text-white">
            login Here
          </h1>
          <label className="text-white " htmlFor="">
            Email
            <input
              className="block rounded border-gray-500 outline-none bg-transparent px-3 py-2 border w-full mt-1"
              type="email"
              name="email"
              id=""
            />
          </label>
          <label className="text-white mt-5" htmlFor="">
            Password
            <input
              className="block rounded border-gray-500 outline-none bg-transparent px-3 py-2 border w-full mt-1"
              type="password"
              name="password"
              id=""
            />
          </label>
          <button
            type="submit"
            className="w-full text-white rounded bg-gradient-to-r  to-orange-700 from-sky-950 mt-4 py-1"
          >
            Login
          </button>

          <p className="mt-3 text-center text-gray-400" href="">
            You Have No Account -{" "}
            <Link className="text-rose-500" to="/register">
              Register
            </Link>
          </p>
           <SocialLogin/>
        </form>
      </div>
    </div>
  );
};

export default Login;
