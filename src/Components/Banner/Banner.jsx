import moment from 'moment/moment';
import banner from '../../assets/banner/banner.jpg'
import wave from '../../assets/banner/wave.svg'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
    return(
       <div className='w-full '>
        
         <div className='max-w-7xl   px-5 mt-10 gap-20 mx-auto flex flex-col md:flex-row items-center'>
              <div className='font-josefin lg:z-30'>
                 <h1 className='text-5xl leading-tight font-bold'>Explore Now our <span className='text-rose-500'>Mini Hotel</span></h1>
                 <p className='mt-2 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos sed blanditiis exercitationem, vero ipsum impedit?</p>
                 <button className='bg-rose-500 text-white px-5 py-1 mt-3 rounded shadow-xl'>Explore</button>
              </div>
              <div className=''>
                <img className=' w-full md:w-[1600px]' src={banner} alt="" />
              </div>
        </div>
        <div className='md:-mt-40 md:h-52 -z-50'>
            {/* {moment().format('MMMM Do YYYY, h:mm:ss a')} */}
            <img src={wave} alt="" />
        </div>
       </div>
    )}
export default Banner;