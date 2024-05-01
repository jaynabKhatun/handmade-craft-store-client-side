import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SingleSubCt = ({ sub }) => {
    const { photo, item, price, rating, _id } = sub;
   


    return (
        <div>


            <div>



                <div className="card w-96 h-[500px] glass shadow-2xl mb-6 transition hover:scale-105">
                    <figure><img src={photo} alt="car!" /></figure>
                    <div className="card-body space-y-4">
                        <h2 className="font-serif text-2xl">{item}</h2>
                        <h2 className="text-2xl text-green-400 font-semibold">{price}</h2>
                        <h2 className='flex items-center gap-2'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>{rating}</h2>


                        <div className="card-actions justify-end">
                            <Link to={`/view/${_id}`}> <button className="btn btn-primary">View More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleSubCt.propTypes = {
    sub: PropTypes.object.isRequired,
};

export default SingleSubCt;