import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from "react-router-dom";



const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <h2 className="font-extrabold md:text-4xl text-2xl w-3/4 mx-auto text-center my-6 pb-10">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-10">

            {/* categories section */}
            <Categories categories={categories} />

            {/* dynamic gadget section */}
            <Outlet />
            </div>

        </div>
    );
};

export default Home;