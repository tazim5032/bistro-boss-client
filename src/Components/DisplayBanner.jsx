import img from '../assets/home/chef-service.jpg';

const DisplayBanner = () => {
    return (
        <div
            className="h-[600px] mb-12 bg-cover bg-center 
            flex items-center justify-center text-center text-black"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="bg-white bg-opacity-80 p-8 rounded mx-[6%]">
                <h1 className="text-4xl font-bold mb-4 uppercase">bistro boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt, quia ullam neque amet consequuntur ea, perferendis nostrum hic accusamus velit eaque ducimus itaque? Ducimus esse possimus placeat unde alias repellendus maxime exercitationem, nisi eius enim assumenda voluptatem consequatur dolorum dolore, voluptas sed omnis, maiores explicabo architecto debitis expedita adipisci.</p>
            </div>
        </div>
    );
};

export default DisplayBanner;
