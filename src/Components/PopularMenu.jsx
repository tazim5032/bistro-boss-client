import useMenu from "../Hooks/useMenu";
import MenuItem from "../Pages/Shared/MenuItem";
import SectionTitle from "./SectionTItles/SectionTitle";

const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-8">
                <button className="btn btn-outline border-0 border-b-4">
                    View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;