import { BiLogoGmail, BiSolidPhone } from "react-icons/bi";
import gmail from '../../assets/svg/gmail.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const NewsLetter = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      });
  return (
    <div data-aos="fade-down" className="mt-10">
      <div className="text-center">
        <h1 className="first-letter:text-5xl first-letter:text-rose-500 mb-2 text-4xl">
          Newsletter Signup
        </h1>
        <p className="text-gray-500 mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          explicabo nostrum <br /> inventore commodi quisquam adipisci
          doloremque esse, fuga ratione.
        </p>
      </div>
      <div className="max-w-7xl p-5 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        <div>
            <img className="w-[px]" src={gmail} alt="" />
        </div>
        <div className="bg-black/90 flex flex-col items-center h-96 relative p-4 rounded text-center justify-center  w-full  mt-20">
          <p className="text-white absolute h-20 w-20 p-4 rounded-full bg-gradient-to-t to-blue-600 border border-violet-400 from-violet-600 -top-7">
            <BiLogoGmail className="text-5xl text-white text-center" />
          </p>
          <h1 className="text-3xl font-josefin text-white">Newsletter</h1>
          <p className="uppercase text-gray-300 mt-5 mb-4">
            Stay up to date with our latest news and bookin
          </p>
          <div className="mt-5">
            <input
              className="bg-transparent text-white outline-none px-2 py-2 rounded border  border-gray-500"
              placeholder="Your Email Adress"
              type="email"
              name="email"
              id=""
            />
            <button className="uppercase ml-4  mt-4 md:mt-0 bg-blue-800 text-white px-5 py-2 rounded ">
              Subscrib
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
