import { Link } from "react-router-dom";

const FeatureCard = ({data}) => {
    const {img,room_size,special_offer, name} = data
    return(
        <div className="box ">
             <img className="rounded-lg object-fill" src={img} alt="" />
             <div className="content rounded-lg flex justify-center flex-col items-center">
                <p className="font-josefin text-xl">{name}</p>
                <p className="text-cyan-500"><span className="font-josefin text-white">Room Size : </span>{room_size}</p>
                <p className="font-roboto font-medium text-cyan-500">Quic Access Now Book</p>
                <Link to='/rooms'><button className="bg-cyan-600 mt-3 py-1 px-5 font-josefin  rounded ">Book Now</button></Link>

             </div>
        </div>
    )}
export default FeatureCard;