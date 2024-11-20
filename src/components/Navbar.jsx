import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getCart } from "../Utils/AddToDB";
import { useEffect, useState } from "react";

const Navbar = () => {

    const { pathname } = useLocation();

    const navbarBgClass = pathname === '/' ? 'bg-[#9538E2]' : 'bg-white text-[#9538E2]';

    const getNavLinkActiveClass = ({ isActive }) => `${isActive ? 'font-bold underline' : 'hover:font-bold'}`;

    const [cartCount, setCartCount] = useState(0); // State to track the number of items in the cart

    // Retrieve and update the cart count whenever the component mounts
    useEffect(() => {
        const cartItems = getCart();
        setCartCount(cartItems.length);
    }, [])

    const links = <>
        <li>
            <NavLink className={getNavLinkActiveClass} to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className={getNavLinkActiveClass} to='/stats'>Statistics</NavLink>
        </li>
        <li>
            <NavLink className={getNavLinkActiveClass} to='/dashboard'>Dashboard</NavLink>
        </li>
        <li>
            <NavLink className={getNavLinkActiveClass} to='/faq'>FAQs</NavLink>
        </li>
    </>
    return (
        <div className={`navbar ${navbarBgClass} rounded-lg`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white/30 backdrop-blur-xl rounded-box z-[1] mt-3 w-40 p-2 shadow text-white gap-4">
                        {/* links */}
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {/* links */}
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link to='/dashboard' className="btn rounded-full "> <IoCartOutline size={18} />

                    {
                        cartCount > 0 && (
                            <span className="badge bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                {cartCount}
                            </span>
                        )
                    }
                </Link>
                <Link to='/dashboard' className="btn rounded-full" state={{ activeTab: 'wishlist' }}> <CiHeart size={18} /></Link>
            </div>
        </div>
    );
};

export default Navbar;