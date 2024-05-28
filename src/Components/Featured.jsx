import SectionTitle from "./SectionTItles/SectionTitle";
import img from '../assets/home/featured.jpg';
const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="bg-fixed text-white pt-8 mb-12">
            <SectionTitle
                heading="featured item"
                subHeading="Check It Out"
            >
            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36
            bg-slate-500 bg-opacity-30">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>June 01, 2024</p>
                    <p className="uppercase">Where i can get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam soluta inventore in nobis, est quia, voluptatibus id quis consectetur quas nulla cumque quibusdam labore non reiciendis pariatur itaque harum. Praesentium dolorum ex voluptas veniam blanditiis possimus libero, eveniet voluptatem accusantium numquam inventore quo consequuntur quam aliquid nemo neque dolore cumque.</p>
                    <button className="btn btn-outline border-0
                     border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;