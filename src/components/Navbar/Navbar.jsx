import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/">FAQs</NavLink></li>
    </>

    return (
        <div className="navbar bg-white text-black">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
            <div class=" flex items-center gap-2 ">
                        <h1 class=" btn btn-circle bg-white"><FaShoppingCart /></h1>
                        <h1 class=" btn btn-circle bg-white"><GiEternalLove /></h1>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;