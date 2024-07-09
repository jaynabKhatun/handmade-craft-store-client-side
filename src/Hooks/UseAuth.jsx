import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UseAuth;

// import { useContext } from 'react'
// import { AuthContext } from '../Authprovider/AuthProvider'

// const UseAuth = () => {
//     const auth = useContext(AuthContext)
//     return auth
// }

// export default UseAuth
