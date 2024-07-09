import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogIn } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleLogIn()
      .then((res) => {
        console.log(res.data);
        navigate(location.state || "/");
        toast.success("Login Successfull");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center text-gray-600 transition-colors duration-300 w-full hover:border-white shadow-2xl  border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
    >
      <div className="px-4 py-2">
        <FcGoogle className="text-2xl"></FcGoogle>
      </div>

      <span className="w-5/6 px-4 py-3 font-bold text-center">
        Sign in with Google
      </span>
    </div>
  );
};

export default SocialLogin;
