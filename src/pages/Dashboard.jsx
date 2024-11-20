import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import { getCart, getWishList } from "../Utils/AddToDB";
import { useLocation, useNavigate } from "react-router-dom";
import congratsImg from '/assets/congrats.png';
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [wishlist, setWishlist] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [activeList, setActiveList] = useState('cart');
    const [totalCost, setTotalCost] = useState(0);
    const [finalTotalCost, setFinalTotalCost] = useState(0);
    const location = useLocation();
    const [isSorted, setIsSorted] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const favorites = getWishList()
        setWishlist(favorites);

        const cartItems = getCart();
        setCartList(cartItems);

        // Calculate total cost of items in the cart
        const cost = (cartItems || []).reduce((acc, item) => acc + (item.price || 0), 0);
        setTotalCost(cost);

        // Set the active list based on state passed from Navbar (wishlist or cart)
        if (location.state?.activeTab === "wishlist") {
            setActiveList("wishlist");
        }

    }, [location.state])


    // Function to sort cart items by price in descending order
    const sortByPrice = () => {
        const sortedCart = [...cartList].sort((a, b) => b.price - a.price); // Sort descending
        setCartList(sortedCart); // Update state with sorted items
        setIsSorted(true); // Set sorted flag to true
    };

    // functions to toggle between cart and wishlist
    const handleShowCart = () => setActiveList('cart');
    const handleShowWishlist = () => setActiveList('wishlist')

    // Function to handle purchase
    const handlePurchase = () => {
        setFinalTotalCost(totalCost);
        // Show the modal
        document.getElementById('my_modal_5').showModal();

        // Clear the cart and reset total cost
        setCartList([]);
        setTotalCost(0);

        // Update local storage to clear cart
        localStorage.setItem("cart", JSON.stringify([]));
    };

    // Redirect to home page on modal close
    const handleCloseModal = () => {
        navigate("/"); 
    };

    return (
        <div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <Helmet>
                <title>Dashboard - Gadget Heaven</title>
                <meta name="description" content="Manage your gadgets, wishlist, and cart on the dashboard of Gadget Heaven." />
            </Helmet>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="flex justify-center items-center">
                        <img src={congratsImg} className="h-[100px] mx-auto" alt="" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-lg">Payment Successful</h3>
                        <p className="py-4">Thanks for purchasing</p>
                        <p>Total: ${finalTotalCost}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <div className="flex justify-center items-center">
                                    <button onClick={handleCloseModal} className="btn ">Close</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
            {/* {setCartList([])} */}
            {/* modal finishes */}

            <Navbar />
            <Heading title='Dashboard'
                subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                activeList={activeList}
                onShowCart={handleShowCart}
                onShowWishList={handleShowWishlist}
            />
            <div className="flex justify-between my-12 w-11/12 mx-auto items-center">
                <h3 className="font-bold text-xl">{activeList === "cart" ? "Cart" : "Wishlist"}</h3>
                <div className="flex items-center gap-6">
                    {activeList === "cart" && (
                        <h3 className="font-bold text-xl">Total Cost: ${totalCost}</h3>
                    )}

                    <div className="space-x-4">
                        {activeList === "cart" && (
                            <>
                                <button
                                    onClick={sortByPrice}
                                    className={`btn ${isSorted ? 'bg-gray-300' : 'btn-outline border-[#9538E2]'}`}
                                >
                                    Sort by Price
                                </button>

                                <button
                                    onClick={handlePurchase} // Replace with your purchase logic
                                    disabled={cartList.length === 0 || totalCost === 0}
                                    className="btn bg-[#9538E2] text-white"
                                >
                                    Purchase
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-4 ">
                {
                    activeList === "cart" && cartList.length > 0 && (cartList.map(gadget => (

                        <div key={gadget.id} className="flex gap-6 w-11/12 md:w-[70%] mx-auto border p-3 rounded-lg">
                            <div className=''><img src={gadget.image} alt={gadget.title} className='h-[200px] w-full' /></div>


                            <div className="space-y-4">
                                <h3 className="font-semibold text-2xl">{gadget.title}</h3>
                                <p className="opacity-40">{gadget.description} </p>
                                <p className="opacity-80 font-semibold text-xl">Price: ${gadget.price} </p>
                            </div>
                        </div>
                    )))
                }
                {/* wishlist */}
                {
                    activeList === "wishlist" && wishlist.length > 0 && (wishlist.map(gadget => (

                        <div key={gadget.id} className="flex gap-6 w-11/12 md:w-[70%] mx-auto border p-3 rounded-lg">
                            <div className=''><img src={gadget.image} alt={gadget.title} className='h-[200px] w-full' /></div>


                            <div className="space-y-4">
                                <h3 className="font-semibold text-2xl">{gadget.title}</h3>
                                <p className="opacity-40">{gadget.description} </p>
                                <p className="opacity-80 font-semibold text-xl">Price: ${gadget.price} </p>
                            </div>
                        </div>
                    )))
                }
            </div>

        </div>
    );
};

export default Dashboard;