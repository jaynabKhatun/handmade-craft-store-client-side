import Lottie from "lottie-react";
import error from '../../../src/assets/4o4.json'

import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (

        <div className=" flex justify-center items-center">
            <Link to={'/'}>   <button className="btn font-bold" ><TiArrowBack className="text-6xl" />Home </button></Link>

            <Lottie className='w-[50%]' animationData={error} loop={true}
            ></Lottie>

        </div>


    );
};

export default ErrorPage;