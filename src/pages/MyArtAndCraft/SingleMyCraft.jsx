import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMyCraft = ({ card, control, setControl, index }) => {
    console.log(card);
  const { item, photo, price, stockStatus, _id } = card;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://handmade-craft-store-server-side.vercel.app/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setControl(!control);

              Swal.fire({
                title: "Deleted!",
                text: "Your saved Craft has been deleted.",
                icon: "success",
                confirmButtonText: "ok",
              });
            }
          });
      }
    });
  };

  return (
    <tr className="border-b  border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">{index + 1}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <img src={photo} className="w-20 h-20" alt="" />
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{item}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{price}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{stockStatus}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <Link to={`/update/${_id}`}>
          <button className="btn-ghost p-2">
            <FaEdit className="text-2xl text-green-600"></FaEdit>
          </button>
        </Link>
      </td>
      <td className="py-3 px-6 text-left">
        <button onClick={() => handleDelete(_id)} className="btn-ghost p-2">
          <FaTrash className="text-2xl text-red-600"></FaTrash>
        </button>
      </td>
    </tr>
  );
};

SingleMyCraft.propTypes = {
  card: PropTypes.object.isRequired,
  control: PropTypes.bool.isRequired,
  setControl: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleMyCraft;
