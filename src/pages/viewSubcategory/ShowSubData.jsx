import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowSubData = ({ id, loading }) => {
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const { photo, _id, item, subcategory, price, processing, description, rating, } = id;
    return (
        <div>
            <div className="card w-96 h-[600px] mt-6 glass">
                <figure><img src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item}</h2>
                    <p className='font-semibold text-green-500' >{subcategory}</p>
                    <p className='font-semibold' >{description}</p>
                    <p className='font-semibold text-green-400' >{price}</p>
                    <p className='flex items-center gap-2' > <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>{rating}</p>
                    <p className='' >Processing <span className='font-semibold text-green-500'>{processing}</span></p>

                    <div className="card-actions justify-end">
                        <Link to={`/viewmore/${_id}`}><button className='btn btn-primary'>View details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

ShowSubData.propTypes = {
    id: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default ShowSubData;