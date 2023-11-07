import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const RoomsCard = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const { _id, img, name, price, room_count } = data;
  return (
    <div data-aos="zoom-in" className=" px-5  mt-10 md:px-0">
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <Link to={`/details/${_id}`}>
        <div className="w-full  hoverImg  relative">
          <img className=" rounded-xl object-fill" src={img} alt="" />
          <div className="absolute w-3/4 rounded-xl border border-orange-300 -bottom-10 left-12 p-2 backdrop-blur bg-black/20">
            <h1 className="  px-3 font-roboto   rounded border-l-2  text-white ">
              {name}
            </h1>
            <p className="text-rose-500  mt-2 border-r-2 border-rose-500  inline-block font-josefin rounded px-3">
              Price : ${price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RoomsCard;
