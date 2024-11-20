import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import GadgetDetails from '../pages/GadgetDetails';

const Heading = ({ title, subtitle, activeList, onShowCart, onShowWishList }) => {
    const { pathname } = useLocation();
    return (
        <div className='flex flex-col w-full justify-center items-center my-1 bg-[#9538E2] p-6 py-10 text-white relative'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
                {title}
            </h1>
            <p className='text-xs md:text-base text-center w-3/4 md:w-1/2'>
                {subtitle}
            </p>
            {/* <GadgetDetails/> */}
            {!pathname.includes('/gadget/') && !pathname.includes('/faq') && (
                <div>
                    <div className='flex gap-4 my-6'>
                        <button
                            className={`btn ${activeList === "cart" ? "bg-white text-[#9538E2]" : "btn-outline text-white"}`}
                            onClick={onShowCart}
                        >
                            Cart
                        </button>
                        <button
                            className={`btn ${activeList === "wishlist" ? "bg-white text-[#9538E2]" : "btn-outline text-white"}`}
                            onClick={onShowWishList}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    activeList: PropTypes.string,
    onShowCart: PropTypes.func,
    onShowWishList: PropTypes.func,

};

export default Heading;


