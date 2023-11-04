import React from "react";
import { Link, useNavigate } from "react-router-dom";
 
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../Auth/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { register, profile } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const info = { name, email, photo, password };

    // if (password.length < 6) {
    //   return toast.error("Password must be 6 characters!");
    // }
    // if (!/[A-Z]/.test(password)) {
    //   return toast.error("Password must be one uppercase!");
    // }
    // if (!/[@#$%^&+=!]/.test(password)) {
    //   return toast.error("Please put one special symbol!");
    // }
    register ? toast.success("Register Successfull!") : "";

    console.log(info);
    register(email, password)
      .then((res) => {
        const user = res.user;
        profile({
          displayName: name,
          photoURL: photo,
        })
          .then((up) => {
            console.log("update profile");
            form.reset();
          })
          .catch((err) => {
            console.log(err.message);
          });
        navigate("/");
      })

      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full p-4 h-screen">
      <div className=" md:w-6/12 p-3 mt-10 h-[550px] rounded flex items-center justify-center mx-auto bg-gradient-to-r  to-blue-700 from-violet-950">
        <form
          onSubmit={handleSubmit}
          className="w-96 rounded-lg p-10 backdrop-blur bg-white/10 font-philospar"
        >
          <h1 className="text-center text-xl uppercase text-white">
            Rgister Here
          </h1>
          <label className="text-white " htmlFor="">
            Name
            <input
              className="block rounded border-gray-500 outline-none bg-transparent px-3 py-2 border w-full mt-1"
              type="name"
              name="name"
              id=""
            />
          </label>
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
            Photo
            <input
              className="block rounded border-gray-500 outline-none bg-transparent px-3 py-2 border w-full mt-1"
              type="ulr"
              name="photo"
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
          <button className="w-full text-white rounded bg-gradient-to-r  from-blue-700 to-violet-950 mt-4 py-1">
            Register
          </button>

          <p className="mt-3 text-center text-gray-400" href="">
            You Have Already Account -{" "}
            <Link className="text-sky-500" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
