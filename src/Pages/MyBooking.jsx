import { useState } from "react";
import useAuth from "../Auth/useAuth";
import { useEffect } from "react";
import MyBookingCard from "./MyBookingCard";

const MyBooking = () => {
    const {user} = useAuth()
    const [bookData, setBookData] = useState([])
     
    useEffect(() => {
        const url = `http://localhost:3000/mybooking?email=${user.email}`
        if(user?.email){
            fetch(url, {credentials : "include"})
            .then(res => res.json())
            .then(data => setBookData(data))
        }

    },[user?.email])
    
    return(
        <div>
              <div>
                {bookData?.map(book => <MyBookingCard key={book._id} data={book}/>)}
              </div>
        </div>
    )}
export default MyBooking;