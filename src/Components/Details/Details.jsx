import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FcNext,FcCancel } from "react-icons/fc";
import axios from "axios";
import moment from "moment/moment";
import useAuth from "../../Auth/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const Details = () => {
  const {user} = useAuth()
  const bookingTime = moment().format("dddd, M/D/YYYY, h:mm:ss a");
    const data = useLoaderData()
    const {
        _id,
        img,
        name,
        price,
        description,
        pernight_price,
        room_size,
        room_count,
        special_offer,
        images,
         
      } = data;
      const sendBooking = {
        bookingTime : bookingTime,
        userEmail : user.email,
        name : name,
        img : img,
        price : price,
        description : description,
        pernight_price : pernight_price,
        room_size : room_size,
        special_offer : special_offer,
        images : images,
        room_count : room_count

      }

      const handleBooking = () => {
        // axios.post(`http://localhost:3000/mybooking`,sendBooking)
        // .then(res => {
        //   console.log(res.data);
        //   if (res.insertedId) {
        //     Swal.fire({
        //       title: "Successfull!",
        //       text: "Added Successfully",
        //       icon: "success",
        //       confirmButtonText: "Done",
        //     });
        //   }
          
        // })
        // .catch(error => console.log(error))

        Swal.fire({
          
          title: `Are you sure?`,
          text: `
          Name : ${name}
          ______________________
          Full Price : $${price}
          ______________________
          Per Night : $${pernight_price}
          ______________________
          Room Size $: ${room_size}
          ______________________
          Special Offer : ${special_offer}
          ______________________
          Booking Time : ${bookingTime}
          ______________________
          `,
            
          
          
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Bookin it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/mybooking`, {
              method: "post",
              headers : {'content-type' : 'application/json'},
              body : JSON.stringify(sendBooking)
            })
              .then((res) => res.json())
              .then((postData) => {
                console.log(postData);
    
                if (postData.insertedId) {
                  Swal.fire("Booking!", "Your file has been Bookin.", "Successfull");
                  
                }
              });
          }
        });
      }
      


    return(
        <div className="w-full my-20">
              <div className="max-w-7xl px-4 mt-10 mx-auto">
                <img className=" w-full md:w-[1000px] mx-auto rounded-xl border-b-4 border-blue-500" src={img} alt="" />
                 <Marquee   pauseOnHover={true}>
                 <div className="grid mt-6 gap-3 grid-cols-4">{images.map((img2,index) => 
                <img key={index} className="w-80 mr-2 border-l-4 border-rose-500 rounded" src={img2}/>)}
                </div>
                 </Marquee>
                <div className="mt-5 flex gap-20 flex-col md:flex-row imte font-josefin">
                   <div className="flex-1 border-l-2 px-3 border-success">
                   <p className="text-3xl font-bold">{name}</p>
                    <p className="font-roboto mt-2 leading-relaxed text-gray-500 w-2/3">{description}</p>
                   </div>
                   <div className="border-l rounded-t-2xl py-2 px-3 border-info">
                   <p className=" text-xl"> <span className="text-teal-800 font-bold">Special Offer</span> : {special_offer}</p>
                    <p><span className="font-bold">Room Size </span>: {room_size}</p>
                    <p><span className="font-bold">Full Price </span>: ${price}</p>
                    <p><span className="font-bold">Per Night</span> : ${pernight_price}</p>
                    <p> <span className="text-violet-700 font-bold">Date : </span>{bookingTime}</p>

                    <div>
                      {room_count?.map((room,count,index) => 
                      <button key={room.index} className="mr-1 border-b-2 border-success px-1  mt-3 " >Room {count +1}</button>)}
                      {room_count ? <button className="bg-green-100 block px-2 border-l-2 border-green-600 text-green-600   mt-3 mb-2 rounded-sm">Room is Available</button> : <button className="bg-red-100 px-2 border-l-2 border-red-600 text-red-600 shadow-md mt-3 mb-2 rounded-sm">Room is Not Available</button>}
                      

                    </div>
                   </div>

                    <div>
                       {room_count && user?.email? <button onClick={handleBooking} className="bg-rose-500 px-5 py-1 rounded shadow-xl text-white flex gap-2 items-center">Book Now<FcNext className="text-white"/></button> :  <button  className="bg-rose-300 px-5 py-1 rounded  disabled shadow-xl text-white flex gap-2 items-center">Unavailable<FcCancel className="text-white"/></button>}
                    </div>
                </div>
              </div>
        </div>
    )}
export default Details;