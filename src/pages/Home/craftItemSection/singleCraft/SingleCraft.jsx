import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCraft = () => {



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src='' alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">fgd</h2>
                    <p className="line-clamp-2 font-medium">fd</p>

                    <div className="card-actions">
                        <Link ><button 
                     className="btn btn-primary">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleCraft.propTypes = {
    craft: PropTypes.object.isRequired,
};

export default SingleCraft;