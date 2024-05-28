import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const Card = ({ item }) => {
    const { _id, name, image, price, recipe } = item;

    const { user } = useAuth();

    const location = useLocation();

    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }

            //send cart item to db
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            // position: "top-end",
                            icon: "success",
                            title: `${name} Added to Your Cart Successfully!`,
                           // showConfirmButton: false,
                            //timer: 1500
                           
                        });

                        //refetch cart to update the cart items cnt
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-xl">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddToCart}
                        className="btn hover:bg-black border-b-4 border-b-4
                    border-yellow-500
                     text-yellow-600 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;