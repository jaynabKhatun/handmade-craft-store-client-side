import PropTypes from 'prop-types';

const SingleCraft = ({ craft }) => {

    const { photo, item, description } = craft;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{item}</h2>
                    <p className="line-clamp-2 font-medium">{description}</p>

                    <div className="card-actions">
                        <button className="btn btn-primary">Show Details</button>
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