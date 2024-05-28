import Helmet from 'react-helmet';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import Card from '../Shared/Card';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const order = () => {
    const categories = ['salad','pizza', 'soup', 'desserts', 'drinks'];
    const {category} = useParams(); 
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>

            <Cover
                img={orderImg}
                title='Order Food'
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-12'>
                        {
                            salad.map(item => <Card key={item._id} item={item}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-12'>
                        {
                            pizza.map(item => <Card key={item._id} item={item}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-12'>
                        {
                            soup.map(item => <Card key={item._id} item={item}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-12'>
                        {
                            dessert.map(item => <Card key={item._id} item={item}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-12'>
                        {
                            drinks.map(item => <Card key={item._id} item={item}></Card>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default order;