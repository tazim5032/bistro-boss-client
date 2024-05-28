import Helmet from "react-helmet";
import Banner from "../Components/Banner";
import DisplayBanner from "../Components/DisplayBanner";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";
import Recommendation from "../Components/Recommendation";
import Testimonials from "../Components/Testimonials";
import Category from "./Category";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <DisplayBanner></DisplayBanner>
            <PopularMenu></PopularMenu>
            <Recommendation></Recommendation>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;