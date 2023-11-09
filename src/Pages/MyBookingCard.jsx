import { Link, json, useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import useAuth from "../Auth/useAuth";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MyBookingCard = ({ data, handleDelete }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  
  const back = useNavigate();
  const { user } = useAuth();

  const {
    _id,
    img,
    name,
    userEmail,
    price,
    bookingDay,
    pernight_price,
    room_size,
    userName,
    bookingTime,
    special_offer,
     
  } = data;
  
  const handleReview = () => {
    document.getElementById("my_modal_3").showModal();
  };
  const handleRating = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const date = form.date.value;
    const comment = form.comment.value;

    const reviewValue = {
      userEmail: userEmail,
      photoURL: user?.photoURL,
      rating: rating,
      date: date,
      comment: comment,
      userName: user?.displayName,
    };

    fetch("https://assignmant-11-server.vercel.app/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          toast.success("Add Review Success!");
          back("/mybooking");
        }
        form.reset();
      });
  };

  return (
    <div data-aos="zoom-in-down" className="">
      <div className=" flex p-4  justify-around flex-col md:flex-row items-center   border border-teal-400 rounded shadow-xl">
        <div className="flex mb-4 md:mb-0 flex-col items-center justify-center">
          <Link to={`/updatedate/${_id}`}>
            <button className="bg-green-500 shadow-xl text-white rounded px-3 py-1 ">
              Update Date
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)} 
            className="bg-rose-400 shadow-xl text-white rounded px-3 py-1  mt-2"
          >
            Cancel Booking
          </button>

          <Link>
            <button
              onClick={handleReview}
              className="bg-teal-600 text-white py-1 rounded flex gap-2 items-center w-36 justify-center mt-2"
            >
              Add Review
              <AiOutlineStar />
            </button>
          </Link>
        </div>
        <div className=" ">
          <img className="mx-auto rounded-2xl w-96" src={img} alt="" />
        </div>
        <div className=" mt-4 md:mt-0 border-l-2 border-success px-2 font-roboto">
          <p className="text-2xl font-semibold">{name}</p>
          <p>
            <span className="font-bold">Name : </span>{userName}
          </p>
          <p>
            <span className="font-bold">Booking Day : </span>{bookingDay}
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
          <p>
            {" "}
            <span className="font-bold">Booking Date: </span>
            {bookingTime}
          </p>
           
        </div>
      </div>

      {/* modal part */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-xl text-teal-600 border-b-2 py-2 font-roboto flex justify-center gap-3 items-center">
            Add Review <AiOutlineStar />
          </h3>
          <div className="mt-3">
            <form onSubmit={handleRating}>
              <label className="block font-josefin font-semibold" htmlFor="">
                Rating
                <input
                  className="block font-light w-full mt-1 outline-none border border-teal-300 px-3 py-1 rounded"
                  type="number"
                  name="rating"
                  placeholder="Type Rating"
                  required
                />
              </label>
              <label className="block font-josefin font-semibold" htmlFor="">
                Date
                <input
                  className="block font-light w-full uppercase mt-1 outline-none border border-teal-300 px-3 py-1 rounded"
                  type="date"
                  name="date"
                  placeholder="Type Rating"
                  required
                />
              </label>
              <label className="font-josefin " htmlFor="">
                Comment
                <textarea
                  className="w-full text-lg   mt-1 border border-teal-300 px-2 rounded outline-none"
                  name="comment"
                  placeholder="Write Your Mind"
                  id=""
                  cols="10"
                  rows=""
                ></textarea>
              </label>
              <button
                className="flex gap-2 text-white rounded mx-auto mt-4 justify-center w-72 py-1 items-center bg-rose-500 "
                type="submit"
              >
                Add Review <AiOutlineStar />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default MyBookingCard;
