import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDate = () => {
  const data = useLoaderData();
  const {bookingTime,_id} = data
  const navigater = useNavigate()
console.log(data);
  const handleDate = (e) => {
    e.preventDefault();
    const form = e.target;
    const time = form.date.value;

    const info = {time}

    fetch(`http://localhost:3000/mybooking/${_id}`, {
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
    <div>
      <div>
        <form onSubmit={handleDate}>
          <input type="date" name="date" id="" defaultValue={bookingTime} />
          <button type="submit">Update Date</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateDate;
