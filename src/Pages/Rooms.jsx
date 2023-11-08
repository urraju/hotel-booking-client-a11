import { useEffect, useState } from "react";
import RoomsCard from "../Components/Rooms/RoomsCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Rooms = () => {
  const data = useLoaderData();
  const [sorting, setSorting] = useState([]);

  const handleSorting = (e) => {
    setSorting(e.target.value);
  };
  if (sorting === "high-to-low") {
    data.sort((a, b) => b.price - a.price);
  } else if (sorting === "low-to-high") {
    data.sort((a, b) => a.price - b.price);
  }

  return (
    <div className=" px-4 md:px-8">
      <Helmet>Rooms</Helmet>
      <div className="max-w-7xl mx-auto text-right">
        <select
          className=" bg-teal-500 border-l-4 border-gray-300 outline-none rounded mt-4 shadow-xl  font-normal tracking-wider px-2 py-1 text-white"
          onChange={handleSorting}
          value={sorting}
          id=""
        >
          <option defaultValue={data} value="filter">
            Filter
          </option>
          <option value="high-to-low">High To Low</option>
          <option value="low-to-high">Low To High</option>
        </select>
      </div>

      <div className="max-w-7xl my-20 mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data?.map((room) => (
          <RoomsCard key={room._id} data={room} />
        ))}
      </div>
    </div>
  );
};
export default Rooms;
