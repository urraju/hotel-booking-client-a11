import { useEffect, useState } from "react";
import RoomsCard from "../Components/Rooms/RoomsCard";
import { useLoaderData } from "react-router-dom";

const Rooms = () => {
    const data = useLoaderData()
   
//   const [data , setData] = useState([])
    const [displayRoom, setDisplayRoom] = useState([...data])
  const [search, setSearch] = useState([...data])
 
  const handleFilter = (e) => {
    const inputValue = parseInt(e.target.value)
    console.log(inputValue);
     const filterValue = search.filter((card) =>
     card.price === parseInt(inputValue))
     console.log(filterValue);
     setDisplayRoom(filterValue)
  }
//   useEffect(() => {
//     fetch('http://localhost:3000/rooms')
//     .then(res => res.json())
//     .then(data => setData(data))
//   },[])
    return(
        <div>
           
                <input onChange={handleFilter} type="text" name="filter" placeholder="Filter"/>
             
           <div className="max-w-7xl my-20 mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                {displayRoom?.map(room => <RoomsCard key={room._id} data={room} />)}
           </div>
        </div>
    )}
export default Rooms;