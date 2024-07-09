
import { Link } from "react-router-dom";
import propTypes from "propTypes";

const ShowAllCraft = ({ craft }) => {
  const { price, photo, rating, item, description, stockStatus,_id } = craft;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item}
          <div className="badge badge-secondary">{stockStatus}</div>
        </h2>
        <p>{description}</p>
        <div className="badge badge-outline">{rating}</div>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-secondary btn-xs ">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ShowAllCraft.prototype={
  price: 
}


export default ShowAllCraft;
