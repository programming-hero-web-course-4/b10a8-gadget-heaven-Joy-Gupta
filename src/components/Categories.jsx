import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {


    return (
        <div className='px-4'>
            <div className='border p-4 rounded-lg shadow-lg bg-white'>
                <div className='flex flex-col space-y-4'>
            
                    {
                        categories.map(category => (
                            <NavLink
                                key={category.category}
                                to={`/category/${category.category}`}
                                className={({isActive})=> `btn ${isActive?'bg-[#9538E2] text-white':'hover:bg-[#9538E2]/50 hover:text-white text-black'} `}
                            >
            
                                    {category.category}
            
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;


Categories.propTypes = {
    categories: PropTypes.array
};
