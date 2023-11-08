import { useState } from "react";
import useAuth from "../Auth/useAuth";
import { useEffect } from "react";
import MyBookingCard from "./MyBookingCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyBooking = () => {
    const {user} = useAuth()
    const [bookData, setBookData] = useState([])
     
    useEffect(() => {
        const url = `https://assignmant-11-server.vercel.app/mybooking?email=${user.email}`
        if(user?.email){
            fetch(url, {credentials : "include"})
            .then(res => res.json())
            .then(data => setBookData(data))
        }

    },[user?.email])

    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://assignmant-11-server.vercel.app/mybooking/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((datadelete) => {
                console.log(datadelete);
    
                if (datadelete.deletedCount > 0) {
                  Swal.fire("Booking Canceled!", "Your file has been Cancel.", "Successfully");
                  const remaing = bookData.filter((del) => del._id !==  _id);
                  setBookData(remaing);
                }
              });
          }
        });
      };

    
    return(
        <div>
          <Helmet>
            <title>My Booking</title>
          </Helmet>
              <div className=" max-w-7xl mt-20 px-3 mx-auto grid grid-cols-1  gap-5">
                {bookData?.map(book => 
                <MyBookingCard key={book._id}
                 data={book}
                 handleDelete={handleDelete}
                  
                 />
                 
                 )}
              </div>
        </div>
    )}
export default MyBooking;