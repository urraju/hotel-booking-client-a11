import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FcNext, FcCancel } from "react-icons/fc";
import { BsArrowRightShort } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import useAuth from "../../Auth/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import ReviewCard from "../../review/ReviewCard";
import axios from "axios";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Details = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
   
  const [day , setDay] = useState(0)
  const handleDay = (e) => {
    e.preventDefault()
    const form = e.target 
     const bookingDay = form.day.value
     setDay(bookingDay)
 }
  console.log(day);
  // const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const { user } = useAuth();
  // const bookingTime = moment().format("dddd, M/D/YYYY, h:mm:ss a");
  const data = useLoaderData();
   
  const {
    _id,
    img,
    name,
    price,
    description,
    pernight_price,
    room_size,
    room_count,
    seat_count,
    special_offer,
    images,
  } = data;
  const [seat, setSeat] = useState(seat_count);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const arr = new Array(seat);
    arr.fill(-1);
    setSeats(arr);
  }, [seat]);

  const sendBooking = {
    bookingTime: selectedDate,
    userEmail: user?.email,
    userName: user?.displayName,
    name: name,
    bookingDay : day,
    img: img,
    price: price,
    description: description,
    pernight_price: pernight_price,
    room_size: room_size,
    special_offer: special_offer,
    images: images,
    room_count: room_count,
  };

  const handleBooking = () => {
    setSeat(seat - 1);
    document.getElementById("my_modal_3").showModal();
    Swal.fire({
      title: `You Want to Bookin Now`,
      text: "You selected Confirmation",
      icon: "success",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Bookin it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/update?id=${_id}`, {
          method: "PATCH",
        
          credentials: "include",
        })
          .then((res) => {
            console.log("res data", res.data);
            setSeat(seat - 1);
          });
        fetch(`http://localhost:3000/mybooking`, {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(sendBooking),
          credentials: "include",
        })
          .then((res) => res.json())
          .then((postData) => {
            console.log(postData);

            if (postData.insertedId) {
              Swal.fire(
                "Booking!",
                "Your file has been Bookin.",
                "Successfull"
              );
            }
          });
      }
    });
  };

  return (
    <div data-aos="fade-in" className="w-full my-20">
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="max-w-7xl px-4 mt-10 mx-auto">
        <img
          className=" w-full md:w-[1000px] mx-auto rounded-xl border-b-4 border-blue-500"
          src={img}
          alt=""
        />
        <Marquee pauseOnHover={true}>
          <div className="grid mt-6 gap-3 grid-cols-4">
            {images?.map((img2, index) => (
              <img
                key={index}
                className="w-80 mr-2 border-l-4 border-rose-500 rounded"
                src={img2}
              />
            ))}
          </div>
        </Marquee>
        <div className="mt-5 flex gap-20 flex-col md:flex-row imte font-josefin">
          <div className="flex-1 border-l-2 px-3 border-success">
            <p className="text-3xl font-bold">{name}</p>
            <p className="font-roboto mt-2 leading-relaxed text-gray-500 w-2/3">
              {description}
            </p>
          </div>
          <div className="border-l rounded-t-2xl py-2 px-3 border-info">
            <p className=" text-xl">
              {" "}
              <span className="text-teal-800 font-bold">
                Special Offer
              </span> : {special_offer}
            </p>
            <p>
              <span className="font-bold">Room Size </span>: {room_size}
            </p>
            <p>
              <span className="font-bold">Full Price </span>: ${price}
            </p>
            <p>
              <span className="font-bold">Per Night</span> : ${pernight_price}
            </p>
            <p>
              {" "}
              <span className="text-violet-700 font-bold">Date : </span>
              {}
            </p>

            <div>
              {seats.map((el, i) => {
                return (
                  <button
                    onClick={() => handleUpdate(i)}
                    key={i}
                    className="mr-1 text-violet-800 border-b-2 border-success px-1  mt-3 "
                  >
                    Seats {i + 1}
                  </button>
                );
              })}
              
              {seats ? (
                <button className="bg-green-100 block px-2 border-l-2 border-green-600 text-green-600   mt-3 mb-2 rounded-sm">
                  Room is Available
                </button>
              ) : (
                <button className="bg-red-100 px-2 border-l-2 border-red-600 text-red-600 shadow-md mt-3 mb-2 rounded-sm">
                  Room is Not Available
                </button>
              )}
            </div>
          </div>

          <div>
            {seats && user?.email ? (
              <button
                onClick={handleBooking}
                className="bg-rose-500 px-5 py-1 rounded shadow-xl text-white flex gap-2 items-center"
              >
                Book Now
                <FcNext className="text-white" />
              </button>
            ) : (
              <button className="bg-rose-300 px-5 py-1 rounded  disabled shadow-xl text-white flex gap-2 items-center">
                Unavailable
                <FcCancel className="text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* modal part */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box py-">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-xl text-rose-500 border-b-2 py-2 font-roboto">
            Book details !
          </h3>
          <div className="mt-3">
            <p className="font-roboto text-teal-600 text-xl mt-2 mb-2">
              {name}
            </p>
            <p>
              <span className="font-bold">Full Price : </span>${price}
            </p>
            <p>
              <span className="font-bold">Per Night : </span>${pernight_price}
            </p>
            <p>
              {" "}
              <span className="font-bold">Special Offer : </span>
              {special_offer}
            </p>
            <p>
              {" "}
              <span className="font-bold">Room Size : </span>
              {room_size}
            </p>
            <form onSubmit={handleDay} className="font-josefin mt-1  items-center font-bold flex gap-2 ">
              Book day <BsArrowRightShort className="text-success text-xl"/>
               
                <input className="outline-none placeholder:font-light border px-2 w-24  border-success rounded-2xl" placeholder="type day" type="number" name="day"  id="" />
               <button>Send</button>
            </form>

            <p className="flex flex-col">
              <span className="font-josefin font-bold ">Select Date : </span>
              <DatePicker
                className="border outline-none px-2 py-1 border-violet-300 rounded mt-2"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/d/yyyy,h:mm:ss a"
              />
            </p>
          </div>
        </div>
      </dialog>
      <ReviewCard />
    </div>
  );
};
export default Details;
