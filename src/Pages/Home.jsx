import Banner from "../Components/Banner/Banner";
import FeatureRoom from "../Components/FeatureRoom/FeatureRoom";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offer from "../Components/SpecialOffer/Offer";
import Testimonial from "../Components/Testimonial/Testimonial";
import ReviewHome from "../review/ReviewHome";

const Home = () => {
    return(
        <div>
             <Banner/>
             <ReviewHome/>
             <FeatureRoom/>
             <Offer/>
             <Testimonial/>
             <NewsLetter/>
        </div>
    )}
export default Home;