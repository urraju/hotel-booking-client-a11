import { Link } from "react-router-dom";


const MyBookingCard = ({data,handleDelete }) => {
    console.log(data);
    const {
        _id,
        img,
        name,
        userEmail,
        price,
        bookingTime,
        pernight_price,
        room_size,
        room_count,
        special_offer,
        images,
         
      } = data;

    return(
        <div className="">
            <div className=" flex p-4  justify-around flex-col md:flex-row items-center bg-gray-100 border border-teal-400 rounded shadow-xl">
           
             <div className="flex mb-4 md:mb-0 flex-col items-center justify-center">
                <Link to={`/updatedate/${_id}`}>
                <button  className="bg-success text-white rounded px-3 py-1 font-roboto shadow-xl">Update Date</button>
                </Link>

                <button onClick={() =>handleDelete(_id)} className="bg-orange-800 shadow-xl text-white rounded px-3 py-1 font-roboto mt-2">Cancel Booking</button>
             </div>
             <div className=" ">
             <img className="mx-auto rounded-2xl w-96" src={img} alt="" />
             </div>
             <div className=" mt-4 md:mt-0 border-l-2 border-success px-2 font-roboto">
             <p className="text-2xl font-semibold">{name}</p>
              <p><span className="font-bold">Full Price : </span>${price}</p>
              <p><span className="font-bold">Per Night : </span>${pernight_price}</p>
              <p> <span className="font-bold">Special Offer : </span>{special_offer}</p>
              <p> <span className="font-bold">Room Size : </span>{room_size}</p>
              <p> <span className="font-bold">Booking Date: </span>{bookingTime}</p>
             </div>
            </div>
        </div>
    )}
export default MyBookingCard;