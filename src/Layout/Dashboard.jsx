import { FaBook, FaEnvelope, FaShoppingCart, FaThList,  FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaAd } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {

    const [cart] = useCart();

    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">


                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome />
                                    Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manageItems'>
                                    <FaThList></FaThList>
                                    Manage Items</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/users'>
                                   <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>


                        </>
                            :
                            <>

                                <li>
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome />
                                        User Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/history'>
                                        <FaCalendar />
                                        History</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart />
                                        My Cart ({cart.length})</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <FaAd />
                                        Add a Review</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/paymentHistory'>
                                        <FaList />
                                        Payment History</NavLink>
                                </li>

                            </>
                    }

                    <div className="divider"></div>


                    {/* shared navlinks */}

                    <li>
                        <NavLink to='/'>
                            <FaHome />
                            Home</NavLink>
                    </li>


                    <li>
                        <NavLink to='/order/salad'>
                            <FaSearch />
                            Menu</NavLink>
                    </li>


                    <li>
                        <NavLink to='/order/contact'>
                            <FaEnvelope />
                            Contact</NavLink>
                    </li>


                </ul>

            </div>

            {/* dashboard  content*/}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;