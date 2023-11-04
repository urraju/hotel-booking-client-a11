import { Link } from "react-router-dom";

const RoomsCard = ({ data }) => {
  // console.log(Object.keys(data).join(','));
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
  return (
    <div className="px-5 md:px-0">
      <Link to={`/details/${_id}`}>
        <div className="hoverImg w-full md:w-96 relative">
          <img className=" rounded object-fill" src={img} alt="" />
          <h1 className="absolute bottom-4 left-3 bg-black px-4 py-1 font-montserrat rounded border-l-4 border-rose-500 text-white ">{name}</h1>
          
        </div>
        <p>Price : {price}</p>
      </Link>
    </div>
  );
};
export default RoomsCard;
