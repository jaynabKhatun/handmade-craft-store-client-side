import { FaGithub, FaGoogle } from "react-icons/fa";
import Navber from "../shared/navber/Navber";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const LoginPage = () => {
  const { loginUser, githubLogIn } = useContext(AuthContext);
  const location = useLocation();
  console.log("there is location", location);
  const navigate = useNavigate();

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters!",
      });
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one lowercase letter and one uppercase letter!",
      });
      return;
    }

    //login user with email and password

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        //user navigate to home page

        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });

    //google log in
  };

  const handleGithubLogIn = () => {
    githubLogIn()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Navber></Navber>
      <div className="flex items-center justify-center mt-28 mb-4">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-base-300 dark:text-gray-800">
          <span className="mb-3 text-3xl font-semibold text-blue-400">
            <Typewriter
              words={["Login your Account Please"]}
              loop={""}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className="text-sm text-center dark:text-gray-600 mt-2">
            Dont have account?
            <a
              href="#"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              Sign up here
            </a>
          </p>
          <div className="my-6 space-y-4">
            <SocialLogin></SocialLogin>

            <button
              onClick={handleGithubLogIn}
              aria-label="Login with GitHub"
              role="button"
              className="flex items-center justify-center w-full p-4 shadow-2xl space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <FaGithub></FaGithub>
              <p>Login with GitHub</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>

          <form onSubmit={handleLogin} className="space-y-8 ">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg"
                />
              </div>
            </div>
            <input
              className="w-full btn font-bold bg-stone-600 p-2 border-b-2 fo dark:bg-gray-100 shadow-lg"
              type="submit"
              value="Log In"
            />
          </form>
          <p className="text-center">
            dont have account{" "}
            <Link to={"/register"}>
              <span className="font-bold border border-b-2 tracking-wide">
                Register
              </span>
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
