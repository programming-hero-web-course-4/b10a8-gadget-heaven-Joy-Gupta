import bannerImg from '../../assets/banner.jpg'

import { Link } from "react-router-dom";

const Banner = () => {


    return (
        
        <div className="relative lg:min-h-[1000px] md:min-h-[800px] min-h-[850px]">
            <div className="bg-[#9538E2] text-white rounded-sm md:p-8 p-3 pb-40 space-y-3 ">
               
                <div className="text-center space-y-7 md:w-2/3 w-4/5 mx-auto ">
                    <h1 className="text-4xl md:text-5xl font-bold leading-[50px]">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <h3 className="opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h3>
                    <Link to='/Dashboard'>
                    <button className="btn text-[#9538E2]">Shop Now</button>
                    </Link>
                </div>

                {/* image */}
                    <div className="absolute border rounded-lg p-5 w-3/4 md:w-1/2  transform -translate-x-1/2 left-1/2 translate-y-[8%] ">
                        <img src={bannerImg} alt="" className="rounded-lg" />
                    </div>
            </div>
            
        </div>

    );
};

export default Banner;