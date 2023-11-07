import { useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import FeatureRoom from "../Components/FeatureRoom/FeatureRoom";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offer from "../Components/SpecialOffer/Offer";
import Testimonial from "../Components/Testimonial/Testimonial";
import ReviewHome from "../review/ReviewHome";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      });
    return(
        <div data-aos="zoom-in">
            <Helmet>
            <title>Home</title>
            </Helmet>
            
             <Banner/>
             <ReviewHome/>
             <Offer/>
             <FeatureRoom/>
             <Testimonial/>
             <NewsLetter/>
        </div>
    )}
export default Home;