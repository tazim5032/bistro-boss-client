import Helmet from "react-helmet";
import Cover from "../Shared/Cover";
import img from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTItles/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
     
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={img} title='Our menu'></Cover>

            <SectionTitle
                heading="Today's Offer"
                subHeading="Don't Miss"            >
            </SectionTitle>

            <MenuCategory
            items={offered}
            ></MenuCategory>

            <MenuCategory
            items={dessert}
            title='desserts'
            img={dessertImg}
            ></MenuCategory>

            <MenuCategory
            items={pizza}
            title='pizza'
            img={pizzaImg}
            ></MenuCategory>


            <MenuCategory
            items={salad}
            title='salad'
            img={saladImg}
            ></MenuCategory>

            <MenuCategory
            items={soup}
            title='soup'
            img={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;