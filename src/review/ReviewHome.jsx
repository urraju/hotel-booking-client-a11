
import React, { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const ReviewHome = () => {
  const [review, setReview] = useState([]);
  console.log(review);
  useEffect(() => {
    fetch("http://localhost:3000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="max-w-7xl px-5 mt-10 mx-auto">
       <div className="text-center mb-10">
       <h1 className="text-3xl font-josefin text-center first-letter:text-4xl text-rose-500 mb-2">User All Review !</h1>
        
       </div>
     
        <Marquee pauseOnHover={true}>
        <div className="flex gap-">
        {review?.map((item) => (
          <div key={item._id}>

            <div className=" py-4 w-64 mr-4 rounded-xl bg-gradient-to-tr px-3 to-orange- border border-gray-200 from-gray-200">
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
        </Marquee>
    </div>
  );
};
export default ReviewHome;
