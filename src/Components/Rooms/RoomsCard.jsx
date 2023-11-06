import { Link } from "react-router-dom";

const RoomsCard = ({ data }) => {
  // console.log(Object.keys(data).join(','));
  const {
    _id,
    img,
    name,
    price,
    room_count,
     
  } = data;
  return (
    <div className="px-5 mt-10 md:px-0">
      <Link to={`/details/${_id}`}>
        <div className="hoverImg w-full  relative">
          <img className=" rounded-xl object-fill" src={img} alt="" />
          <div className="absolute w-3/4 rounded-xl border border-orange-300 -bottom-10 left-12 p-4 backdrop-blur bg-black/20">
            <h1 className="  px-3 font-roboto   rounded border-l-2  text-white ">
              {name}
            </h1>
              <p className="text-rose-500  mt-2 border-r-2 border-rose-500  inline-block font-josefin rounded px-3">Price : ${price}</p>
              
          </div>
        </div>
         
      </Link>
    </div>
  );
};
export default RoomsCard;
