import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeatureCard from "./FeatureCard";

const FeatureRoom = () => {
    const [feature , setFeature] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/featurerRoom')
        .then(res => res.json())
        .then(data => setFeature(data))
    },[])
    console.log(feature);
    return(
        <div className="mt-20 px-5">
            <div className="text-center mb-14 ">
                <h1 className="first-letter:text-5xl first-letter:text-rose-500 mb-2 text-4xl">Feature Room Comming Soon!</h1>
                <p className="text-gray-500 font-josefin">Lorem ipsum dolor, sit amet consectetur adipisicing elit.   Libero molestiae labore, <br /> odio explicabo voluptas omnis.</p>
            </div>
              <div className="max-w-7xl mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {feature?.map(room => <FeatureCard key={room._id}  data={room} />)}
              </div>
        </div>
    )}
export default FeatureRoom;