import { FaGithub, FaGoogle } from "react-icons/fa";
import Navber from "../shared/navber/Navber";

import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";



const LoginPage = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);
    }



    return (

        <div>
            <Navber></Navber>
            <div className="flex items-center justify-center mt-28 mb-4">

                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-base-300 dark:text-gray-800">
                    <span className="mb-3 text-3xl font-semibold text-blue-400">
                        <Typewriter
                            words={['Login your Account Please']}
                            loop={""}

                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}


                        />



                    </span>
                    <p className="text-sm text-center dark:text-gray-600 mt-2">Dont have account?
                        <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
                    </p>
                    <div className="my-6 space-y-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border-b-2 rounded-md focus:ring-2 focus:ring-offset-1 shadow-2xl dark:border-gray-600 focus:dark:ring-violet-600">
                            <FaGoogle></FaGoogle>
                            <p>Login with Google</p>
                        </button>
                        <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 shadow-2xl space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                            <FaGithub></FaGithub>
                            <p>Login with GitHub</p>
                        </button>

                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-gray-600">OR</p>
                        <hr className="w-full dark:text-gray-600" />
                    </div>


                    <form onSubmit={handleLogin}
                        className="space-y-8 ">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>

                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg" />
                            </div>
                        </div>
                        <input className="w-full btn font-bold bg-stone-600 p-2 border-b-2 fo dark:bg-gray-100 shadow-lg" type="submit" value="Log In" />

                    </form>
                    <p className="text-center">dont have account <Link to={'/register'}><span className="font-bold border border-b-2 tracking-wide">Register</span></Link> here</p>
                </div>
                

            </div>

            
       
           

        </div>
    );
};

export default LoginPage;