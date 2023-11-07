import { useEffect, useState } from "react";
import TestCard from "./TestCard";

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/testimonial')
        .then(res => res.json())
        .then(data => setTestimonial(data))
    },[])
    return(
        <div className="mt-20">
            <div className="text-center">
                <h1 className="first-letter:text-5xl first-letter:text-rose-500 mb-2 text-4xl"> User Testimonial</h1>
                <p className="text-gray-500 mt-4 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero explicabo nostrum <br /> inventore commodi quisquam adipisci doloremque esse,  fuga ratione.</p>
            </div>
            <div className="mt-20 p-5 py-20  max-w-7xl mx-auto bg-gradient-to-r to-violet-900 from-rose-700">
            <div className=" max-w-4xl mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-10">
                {testimonial?.map(tes => <TestCard key={tes._id} data={tes}/>)}
            </div>
            <button className="text-white backdrop-blur bg-white/30  px-5 py-1 rounded shadow-xl flex justify-center items-center mt-8 mx-auto">View All</button>
        </div>
        </div>
    )}
export default Testimonial;