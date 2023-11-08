import { Helmet } from "react-helmet";
import { Navigate, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDate = () => {
  const data = useLoaderData();
  const {id} = useParams()
  console.log(id);
  const {bookingTime,_id} = data
  console.log(_id);
  const navigater = useNavigate()
console.log(data);
  const handleDate = (e) => {
    e.preventDefault();
    const form = e.target;
    const time = form.date.value;

    const info = {time}

    fetch(`https://assignmant-11-server.vercel.app/mybooking/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfull!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
            
          });
          navigater('/mybooking')
          form.reset();
        }
      });
  };

  return (
    <div className="p-3 md:p-10">
      <Helmet>
        <title>update date</title>
      </Helmet>
      <div className="max-w-7xl px-3 h-96 rounded-xl mx-auto bg-gradient-to-l from-violet-100 flex flex-col justify-center items-center  to-teal-200 ">
         <h1 className="mb-4 font-roboto  font-bold md:text-3xl">If You want to Change Booking Date</h1>
        <div className="backdrop-blur  border border-teal-200  rounded flex justify-center items-center bg-white/30 h-2/3 w-full md:w-96">
        <form onSubmit={handleDate}>
          <input className="w-full bg-transparent px-3 py-2 uppercase outline-none border border-success rounded" type="date" name="date" id="" defaultValue={bookingTime} />
          <button className="bg-gradient-to-l from-teal-200 mt-3 w-full rounded py-2 to-violet-100 uppercase  " type="submit">Update Date</button>
        </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateDate;
