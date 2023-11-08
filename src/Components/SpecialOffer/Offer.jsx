import wave from "../../assets/svg/wave (5).svg";
import room from "../../assets/svg/rooom10.jpg";
import { MdLocationOn } from "react-icons/md";
import { BiLogoGmail,BiSolidPhone } from "react-icons/bi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Offer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      });
  return (
    <div data-aos="zoom-in" className="mt-20 p-5">
       <div className="text-center mb-20">
                <h1 className="first-letter:text-5xl first-letter:text-rose-500 mb-2 text-4xl font-bebas">Special Offers and Promotions</h1>
                <p className="text-gray-500 mt-4 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero explicabo nostrum <br /> inventore commodi quisquam adipisci doloremque esse,  fuga ratione.</p>
            </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <img className="md:h-[600px] rounded-t-lg w-full" src={room} alt="" />
          <img className="absolute bottom-0 " src={wave} alt="" />
          <div className="absolute bottom-20 backdrop-blur h-36 w-36 rounded-full text-white bg-white/40 border p-8 left-10">
          <h1 className="text-5xl text-center  font-josefin">35%</h1>
          <p className="uppercase font-bebas text-gray-200">discount</p>
        </div>
        </div>
        
        <div className="bg-[#E33467] p-5 flex-col md:flex-row  items-center flex gap-10">
          <div className="flex-1 p-5  ">
            <p className="text-white font-roboto uppercase">Very Cheapest Price</p>
            <h1 className="uppercase text-3xl text-orange-300 font-bold">The Hotel</h1>
            <p className="uppercase mt-1 text-white">For You & Your Family</p>
            <div className="flex bg-violet-600 rounded-md mt-3 text-white justify-between items-center w-full lg:w-1/2 py-5 px-5 gap-6">
               <div>
               <h1 className="text-4xl font-bebas">35%</h1>
                <p>Discount</p>
               </div>
               <h1 className="uppercase font-bebas text-3xl">session <br /> Special</h1>
            </div>
          </div>

          <div className="flex-1">
            <div>
              <h1 className=" uppercase text-3xl font-semibold font-bebas text-orange-300">Complete Facilities</h1>
              <p className="mt-2 text-gray-300 -tracking-tighter ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Praesentium  eos eaque voluptas nihil tempore saepe!
              </p>
            </div>
            <div className="mt-5 border-t py-2">
              <h1 className=" uppercase text-3xl font-semibold font-bebas text-orange-300">Spacious Room</h1>
              <p className="mt-2 text-gray-300 -tracking-tighter ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores  deserunt repudiandae dolor dolores tempora repellat?
              </p>
            </div>
          </div>
        </div>
          <div className="bg-[#E33467] rounded-b-lg p-4">
          <h1 className="w-full uppercase text-gray-300 text-center mb-2 ">The art of meeting your highest expectations</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="flex gap-1 text-white items-center"><BiSolidPhone className="text-orange-300 text-xl border-r"/>+8801824526072</p>
            <p className="flex gap-1 text-white items-center"><MdLocationOn className="text-orange-300 text-xl border-r"/>Special Offer.Shop Now</p>
            <p className="flex gap-1 text-white items-center"><BiLogoGmail className="text-orange-300 text-xl border-r"/>urraju@gmail.com</p>
          </div>
          </div>
      </div>
    </div>
  );
};
export default Offer;
