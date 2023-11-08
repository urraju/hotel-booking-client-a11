import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div  className="max-w-7xl px-5 mt-32 mx-auto">
      
       <div className="text-center mb-10">
       <h1 className="text-4xl font-josefin text-center mb-2">User All Review !</h1>
        <p className="text-gray-500 font-josefin">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cupiditate consectetur enim hic quisquam eaque nesciunt.</p>
       </div>
      <div data-aos="zoom-in" className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {review?.map((item) => (
          <div key={item._id}>

            <div className=" py-4 rounded-xl bg-gradient-to-t px-3 to-orange- border border-violet-200 from-violet-200">
              <img
                className="mx-auto rounded-full"
                src={item.photoURL}
                alt=""
              />
              <div className="text-center mt-3">
                <p className="font-bebas text-xl font-semibold">{item.userName}</p>
                <p className="font-josefin text-gray-500">{item.comment}</p>
                <p className="font-josefin text-gray-500">{item.date}</p>
                <p>
                  {item.rating > 0 ? (
                    <div className="rating rating-sm gap-1">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask  mask-star-2 bg-orange-500"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-orange-500"
                      />
                    </div>
                  ) : (
                    "No Add Rating"
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReviewCard;
