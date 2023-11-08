import { Link, NavLink } from "react-router-dom";
import {} from 'react-icons/'
import logo from '../assets/logo.webp'
import userIcon from '../assets/user2.svg'
import useAuth from "../Auth/useAuth";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import DarkMode from "../DarkMode/DarkMode";
const MainLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const {user , logOut} = useAuth()
  const handleLogOut = () => {
    logOut()
    .then().catch()
  }

    const NavBar = <>
        <NavLink className={({isActive}) => isActive ? 'underline text-rose-500' : ''} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'underline text-rose-500' : ''} to='/rooms'>Rooms</NavLink>
        <NavLink className={({isActive}) => isActive ? 'underline text-rose-500' : ''} to='/mybooking'>My Booking</NavLink>
        {user?.email ?  <NavLink onClick={handleLogOut} className={({isActive}) => isActive ? 'underline text-rose-500' : ''} to='/login'>logout</NavLink> :  <NavLink className={({isActive}) => isActive ? 'underline text-rose-500' : ''} to='/login'>login</NavLink>}
    </>
   
    return(
      <div  data-aos="zoom-in" className="w-full px-6 md:px-10   ">
      <div className=" max-w-7xl mx-auto mt-6   px-3">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn text-rose-500 btn-ghost   lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-gradient-to-t to-blue-700 from-black w-52 rounded border border-gradient-to-tr  border-gray-600 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
              >
                {NavBar}
              </ul>
            </div>
            <NavLink to="/" className="  ">
               
                <img
                  className="w-28  "
                  src={logo}
                  alt=""
                />
              
               
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu font-bold menu-horizontal px-1  uppercase  gap-5 ">
              {NavBar}
            </ul>
          </div>

          <div className="navbar-end flex gap-2 items-center">
            <div>
              <DarkMode />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user ? user.photoURL : userIcon} alt="" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-black text-white  w-56 rounded-lg"
              >
                <li>{user ? user.displayName : ""}</li>
                <li>{user ? user.email : ""}</li>
              </ul>
            </div>

            {/* {user ? (
              <button
                onClick={handleLogOut}
                className="text-white font-philospar uppercase bg-rose-500  text-[12px] md:py-1 md:text-[16px] px-4  rounded py-[3px]"
              >
                Sing out
              </button>
            ) : (
              <Link to="/login">
                <button className="text-white md:py-1 text-[13px] uppercase font-philospar bg-rose-500 px-5 md:text-[16px] rounded py-[3px]">
                  Login
                </button>
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </div>
    )}
export default MainLayout;