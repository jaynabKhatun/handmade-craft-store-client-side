import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";





const SingleMyCraft = ({ card, control, setControl }) => {



    const { item, photo, price, rating, customization, stockStatus, _id } = card;



    const handleDelete = (_id) => {

        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {



                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            setControl(!control)

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your saved Craft has been deleted.",
                                icon: "success",
                                confirmButtonText: "ok"
                            })
                        }
                    })


            }
        });

    }




    return (
        <div>
            <div className="card mb-6  card-compact hover:scale-105 hover:border hover:border-green-400 w-96 h-[500px] bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item}</h2>

                    <p className="font-serif text-2xl">{price}</p>
                    <p className="flex items-center gap-2"><FaStar></FaStar>{rating}</p>

                    <p> <span className="text-green-500 font-semibold">Customize:</span>  {customization}</p>
                    <p> <span className="text-green-500 font-semibold">stockStatus :</span>  {stockStatus}</p>

                    <div className="card-actions ">
                        <Link to={`/update/${_id}`} ><button className="btn btn-success">Update</button></Link>

                        <button onClick={() => handleDelete(_id)}
                            className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

SingleMyCraft.propTypes = {
    card: PropTypes.object.isRequired,
    control: PropTypes.bool.isRequired,
    setControl: PropTypes.func.isRequired,
};

export default SingleMyCraft;