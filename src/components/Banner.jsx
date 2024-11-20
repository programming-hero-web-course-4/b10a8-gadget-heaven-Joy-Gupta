// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bannerImg from '/assets/banner.jpg'
// import GadgetDetails from "../pages/GadgetDetails";
const Banner = () => {
    // const { pathname } = useLocation();

    // const isGadgetDetailsPage = pathname.startsWith('/gadget/');
    return (
        <div className="relative lg:min-h-[1000px] md:min-h-[800px] min-h-[850px]">
            <div className="bg-[#9538E2] text-white rounded-xl md:p-8 p-3 pb-40 space-y-3 ">
                <Navbar />
                <div className="text-center space-y-7 md:w-2/3 w-4/5 mx-auto ">
                    <h1 className="text-4xl md:text-5xl font-bold leading-[50px]">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <h3 className="opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h3>
                    <Link to='/dashboard'>
                    <button className="btn text-[#9538E2]">Shop Now</button>
                    </Link>
                </div>

                {/* image */}
                <div className="absolute border rounded-lg p-5 w-3/4 md:w-1/2 transform -translate-x-1/2 left-1/2 translate-y-[8%] ">
                    <img src={bannerImg} alt="" className="rounded-lg" />
                </div>
            </div>
            {/* {
                    pathname === '/' && (
                        <div className="text-center">
                            <button className="btn text-[#9538E2]">Shop Now</button>

                            <div className="absolute border rounded-lg p-5 w-3/4 md:w-1/2 transform -translate-x-1/2 left-1/2 translate-y-[8%] ">
                                <img src={bannerImg} alt="" className="rounded-lg" />
                            </div>
                        </div>
                    )
                } */}
            {/* <div className="text-center">
                    {isGadgetDetailsPage ? (
                        <div className="absolute border rounded-lg p-5 w-3/4 md:w-1/2 transform -translate-x-1/2 left-1/2 translate-y-[8%]">
                            <GadgetDetails />
                        </div>
                    ) : (
                        <>
                            <button className="btn text-[#9538E2]">Shop Now</button>
                            <div className="absolute border rounded-lg p-5 w-3/4 md:w-1/2 transform -translate-x-1/2 left-1/2 translate-y-[8%]">
                                <img src={bannerImg} alt="Banner" className="rounded-lg" />
                            </div>
                        </>
                    )}
                </div> */}
            {/* <div className="absolute  rounded-lg p-5 w-3/4 md:w-1/2 transform -translate-x-1/2 left-1/2 translate-y-[8%]">
            <h2 className="text-2xl font-bold">{gadget?.title || "Gadget Details"}</h2>
            <p>{description}</p>
            <p>Specifications: {specification}</p>
            <p>Availability: {availability}</p>
            <p>Rating: {rating}</p>
        </div> */}
        </div>
    );
};

export default Banner;