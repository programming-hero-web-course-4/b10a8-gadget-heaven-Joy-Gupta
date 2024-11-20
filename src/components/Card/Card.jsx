import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ gadget }) => {
    const {
        id,
        title,
        image,
        price,
    } = gadget;



    return (
        <div className='border rounded-lg p-4 shadow-lg bg-white'>
            <div className='space-y-4'>
                <div className=' p-3 rounded-lg '><img className= 'h-[200px]  object-cover rounded-lg' src={image} alt= {title} /></div>
                <h2 className='font-semibold text-2xl'>{title} </h2>
                <p className='opacity-60 font-medium text-xl'>Price: $ {price} </p>
                <Link to = {`/gadget/${id}`}>
                    <button className='btn border-[#9538E2] text-[#9538E2] my-4'> View Details </button>
                    {/* <p>{id}</p> */}
                </Link>
            </div>
        </div>
    );
};

export default Card;



Card.propTypes = {
    gadget: PropTypes.object
};
