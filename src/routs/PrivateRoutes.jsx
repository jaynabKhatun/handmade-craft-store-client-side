import { useContext } from "react";

import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children, loading }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default PrivateRoutes;