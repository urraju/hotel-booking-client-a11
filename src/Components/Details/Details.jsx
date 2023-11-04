import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FcNext } from "react-icons/fc";
const Details = () => {
    const data = useLoaderData()
    const {
        _id,
        img,
        name,
        price,
        description,
        pernight_price,
        room_size,
        special_offer,
        images,
      } = data;
    return(
        <div className="w-full my-20">
              <div className="max-w-7xl px-4 mt-10 mx-auto">
                <img className=" w-full md:w-[1000px] mx-auto rounded-xl border-b-4 border-blue-500" src={img} alt="" />
                 <Marquee   pauseOnHover={true}>
                 <div className="grid mt-6 gap-3 grid-cols-4">{images.map(img2 => 
                <img className="w-80 mr-2 border-l-4 border-rose-500 rounded" src={img2}/>)}
                </div>
                 </Marquee>
                <div className="mt-5 flex gap-20 flex-col md:flex-row imte font-josefin">
                   <div className="flex-1 border-l-2 px-3 border-success">
                   <p className="text-3xl font-bold">{name}</p>
                    <p className="font-roboto mt-2 leading-relaxed text-gray-500 w-2/3">{description}</p>
                   </div>
                   <div className="border-l rounded-t-2xl py-2 px-3 border-info">
                   <p className=" text-xl"> <span className="text-teal-800 font-bold">Special Offer</span> : {special_offer}</p>
                    <p><span className="text-cyan-600 font-bold">Room Size </span>: {room_size}</p>
                    <p><span className="font-bold">Full Price </span>: ${price}</p>
                    <p><span className="font-bold">Per Night</span> : ${pernight_price}</p>
                   </div>

                    <div>
                        <button className="bg-rose-500 px-5 py-1 rounded shadow-xl text-white flex gap-2 items-center">Book Now<FcNext className="text-white"/></button>
                    </div>
                </div>
              </div>
        </div>
    )}
export default Details;