import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import GadgetDetails from '../pages/GadgetDetails';

const Heading = ({ activeList, onShowCart, onShowWishList }) => {
    const { pathname } = useLocation();
    return (
        <div>
            
            {/* <GadgetDetails/> */}
            {!pathname.includes('/gadget/') && !pathname.includes('/faq') && (
                // 2 buton Cart and wishlist
                <div>
                    <div className='flex gap-4 my-6 justify-center'>
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
   
    activeList: PropTypes.string,
    onShowCart: PropTypes.func,
    onShowWishList: PropTypes.func,

};

export default Heading;


