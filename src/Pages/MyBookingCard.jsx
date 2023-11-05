

const MyBookingCard = ({data}) => {
    console.log(data);
    const {
        _id,
        img,
        name,
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
            <div className=" flex p-4  justify-between flex-col md:flex-row items-center bg-pink-100 rounded shadow-xl">
           
             <div className="flex flex-col items-center justify-center">
                <button className="bg-success text-white rounded px-3 py-1 font-roboto shadow-xl">Update Date</button>
                <button className="bg-orange-800 shadow-xl text-white rounded px-3 py-1 font-roboto mt-2">Cancel Booking</button>
             </div>
             <div className=" ">
             <img className=" rounded-2xl w-96" src={img} alt="" />
             </div>
             <div className=" font-roboto">
             <p className="text-2xl font-semibold">{name}</p>
              <p><span className="font-bold">Full Price : </span>${price}</p>
              <p>{pernight_price}</p>
              <p>{special_offer}</p>
              <p>{room_size}</p>
              <p>{bookingTime}</p>
             </div>
            </div>
        </div>
    )}
export default MyBookingCard;