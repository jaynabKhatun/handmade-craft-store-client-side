import PropTypes from 'prop-types';
import { FaStackExchange, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCraft = ({ c }) => {

    const { _id, photo, item, rating, stockStatus } = c;

    return (
        <div className="card w-96 glass shadow-2xl mb-6 transition hover:scale-105 ">
            <figure><img src={photo} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-2xl">{item}</h2>
                <p className='flex items-center gap-2 '><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{rating}</p>
                <p className='font-bold flex items-center gap-2 text-green-500'>{stockStatus}<FaStackExchange></FaStackExchange></p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

SingleCraft.propTypes = {
    craft: PropTypes.object.isRequired,
    c: PropTypes.object.isRequired,
};

export default SingleCraft;