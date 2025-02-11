import { useEffect, useState } from "react";
import { addToCart,getCart, getWishList } from "../Database/AddToDB";
import { useLocation, useNavigate } from "react-router-dom";
import congratsImg from '../../assets/Group.png';
import PropTypes from 'prop-types';
import Heading from "../Heading/Heading";
import { IoCartOutline } from "react-icons/io5";



const Dashboard = () => {

    const [wishlist, setWishlist] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [activeList, setActiveList] = useState('cart');
    
    
    const [totalCost, setTotalCost] = useState(0);
    const [finalTotalCost, setFinalTotalCost] = useState(0);
    const location = useLocation();
    const [isSorted, setIsSorted] = useState(false);
    const navigate = useNavigate();
    const [isInCart, setIsInCart] = useState(false);


    useEffect(() => {
        const favorites = getWishList()
        setWishlist(favorites);

        const cartItems = getCart();
        setCartList(cartItems);

        // // Calculate total cost of items in the cart
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

    //     // Clear the cart and reset total cost
        setCartList([]);
        setTotalCost(0);

    //     // Update local storage to clear cart
        localStorage.setItem("cart", JSON.stringify([]));
     };

    // Redirect to home page on modal close
    const handleCloseModal = () => {
        navigate("/"); 
    };
    // handle add to cart btn link
    const handleAddToCart = gadget => {
        addToCart(gadget)
        setIsInCart(true)
    }

    return (
        <div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <div className="text-center bg-[#9538E2] text-white py-16">
                <h1 className='lg:text-5xl font-bold'>Dashboard</h1>
                <p>Make the purchase fast before the stock will empty duo to huge market demand!</p>

                <Heading
                activeList={activeList}
                onShowCart={handleShowCart}
                onShowWishList={handleShowWishlist}
            />
                
            </div>
                
            

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

            
                
            <div className="flex justify-between my-12 w-11/12 mx-auto items-center mb-18">
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


                            {/* Cart data display here */}
            <div className="space-y-4 my-10">
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
                {/* wishlist cart data show here */}
                {
                    activeList === "wishlist" && wishlist.length > 0 && (wishlist.map(gadget => (

                        <div key={gadget.id} className="flex gap-6 w-11/12 md:w-[70%] mx-auto border p-3 rounded-lg">
                            <div className=''><img src={gadget.image} alt={gadget.title} className='h-[200px] w-full' /></div>


                            <div className="space-y-4">
                                <h3 className="font-semibold text-2xl">{gadget.title}</h3>
                                <p className="opacity-40">{gadget.description} </p>
                                <p className="opacity-80 font-semibold text-xl">Price: ${gadget.price} </p>
                            </div>
                            {/* add to cart button in wishlist section */}
                            <div className="lg:flex mt-28 lg:mr-10">
                            <button
                            onClick={() => handleAddToCart(gadget)}
                            disabled={isInCart}
                            className="btn bg-[#9538E2] text-white">

                            {isInCart ? "In Cart" : "Add to Cart"}<IoCartOutline size={24} /></button>
                            </div>
                        </div>
                    )))
                }
            </div>

        </div>
    );
};


export default Dashboard;