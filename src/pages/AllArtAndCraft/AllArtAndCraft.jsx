

import { FaDownLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";



const AllArtAndCraft = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser)
   


    const handleYes = () => {
        console.log("yes")
       
            

    }
    const handleNo = () => {
        console.log("no")

    }



    return (
        <div className="mt-28">

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Customization <FaDownLong></FaDownLong></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleYes}><a>yes</a></li>
                    <li onClick={handleNo}><a>no</a></li>
                </ul>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Customization</th>
                            <th>user email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedUser.map(user => {
                                return (
                                    <tr key={user._id}>
                                        <td>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.name}</td>
                                        <td>{user.customization}</td>
                                        <td>{user.userEmail}</td>
                                        <td>
                                            <Link to={`/details/${user._id}`}>
                                                <button className="btn btn-primary">Update</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraft;