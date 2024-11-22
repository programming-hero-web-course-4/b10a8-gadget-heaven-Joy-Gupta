import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


const Heading = ({ activeList, onShowCart, onShowWishList }) => {
    const { pathname } = useLocation();
    return (
        <div>
            
                {/* // 2 buton Cart and wishlist */}
                <div>
                    <div className='flex gap-4 my-6 justify-center'>
                        <button
                            className={`btn ${activeList === "cart" ? "bg-white text-[#9538E2]" : "btn-outline text-white"}`}
                            onClick={onShowCart}
                        ><IoCartOutline size={18} />
                            Cart
                        </button>
                        
                        <button
                            className={`btn ${activeList === "wishlist" ? "bg-white text-[#9538E2]" : "btn-outline text-white"}`}
                            onClick={onShowWishList}
                        ><CiHeart size={18} />
                            Wishlist
                        </button>
                    </div>
                </div>
            

        </div>
    );
};

Heading.propTypes = {
   
    activeList: PropTypes.string,
    onShowCart: PropTypes.func,
    onShowWishList: PropTypes.func,

};

export default Heading;


