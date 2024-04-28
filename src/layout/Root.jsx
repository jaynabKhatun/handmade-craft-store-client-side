import { Outlet } from "react-router-dom";
import Navber from "../pages/shared/navber/Navber";



const Root = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navber></Navber>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;