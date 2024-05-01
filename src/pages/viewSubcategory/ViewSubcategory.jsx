import { useLoaderData } from "react-router-dom";
import ShowSubData from "./ShowSubData";


const ViewSubcategory = () => {
    const ids = useLoaderData();
    console.log(ids)
    return (


        <div className="mt-20 grid md:grid-cols-3 gap-2" >
            {
                ids.map(id => <ShowSubData key={id._id} id={id}></ShowSubData>)
            }
        </div >
    );
};

export default ViewSubcategory;