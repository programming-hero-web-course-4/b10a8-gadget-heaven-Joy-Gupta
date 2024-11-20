import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/CAtegories";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Home - Gadget Heaven</title>
                <meta name="description" content="Explore the latest gadgets on the home page of Gadget Heaven." />
            </Helmet>
            <Banner />
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