import { Link } from 'react-router-dom';
import error from '../assets/banner/404.png'
import { BsArrowRight } from "react-icons/bs";
const NotFound = () => {
    return(
        <div className="w-full p-8 mt-10 mx-auto lg:w-5/12 md:w-7/12">
      <img className="mx-auto" src={error} alt="" />
      <Link to="/">
        <button className=" text-red-500 w-full uppercase py-1 px-5 font-bold flex items-center font-roboto justify-center gap-2 rounded">
          Go Home <BsArrowRight className="   text-xl" />{" "}
        </button>
      </Link>
    </div>
    )}
export default NotFound;