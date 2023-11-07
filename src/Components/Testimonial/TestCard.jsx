import { FcCheckmark } from "react-icons/fc";
import { BsFillPatchCheckFill,BsCheckAll } from "react-icons/bs";
import {  BiSolidQuoteAltRight } from "react-icons/bi";
import { AiOutlineStar,AiOutlineDollarCircle } from "react-icons/ai";
import qrcode from '../../assets/banner/grcode.png'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const TestCard = ({data}) => {
   
    const {name,worker_details,img,rating,salary,description} = data
    useEffect(() => {
        Aos.init({ duration: 2000 });
      });
    return(
        <div data-aos="fade-up" className="relative mt-10 ">
              <div className="backdrop-blur border border-gray-400 rounded-xl bg-white/10 p-5">
                <div className="absolute  -top-10 border rounded-full p-2 left-36">
                    <img className="w-28 h-28 border border-cyan-500 mx-auto rounded-full" src={img} alt="" />
                </div>
                <div className="mt-20 text-center text-white">
                    <p className="flex justify-center font-josefin text-2xl items-center gap-2">{name}<BsFillPatchCheckFill className="text-lg text-green-500"/></p>
                    <p className="font-josefin mt-2 font-light text-gray-200 ">{description.slice(0,160)}<BiSolidQuoteAltRight className=" text-4xl text-rose-300 opacity-60 mx-auto"/></p>
                    
                </div>
                <div className="flex justify-around items-center">
                    <div>
                    {worker_details?.map(work =>
                         <div>
                            <p className="flex mt-1 gap-2 items-center text-gray-200  font-josefin font-light"><BsCheckAll className=" text-lg text-green-400"/>{work}</p>
                         </div>
                         )}
                         <div className="  text-white opacity-60 ">
                            <p className="flex items-center gap-2"><AiOutlineStar/><span>Rating : </span>{rating}</p>
                            <p className="flex items-center gap-2"><AiOutlineDollarCircle/><span>Salary : </span>{salary}</p>
                            
                         </div>
                    </div>
                         <div>
                            <img className="w-24 backdrop-blur bg-white/20 opacity-50 rounded-xl " src={qrcode} alt="" />
                         </div>
                </div>
              
              </div>
             
        </div>
    )}
export default TestCard;