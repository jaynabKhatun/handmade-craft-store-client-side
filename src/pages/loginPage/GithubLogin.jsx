import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const GithubLogin = () => {
  const { githubLogIn } = UseAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const handleGoogleSignIn = () => {
    githubLogIn()
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
      className="flex items-center justify-center w-full shadow-2xl hover:border-white space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
    >
      <div className="px-4 py-2">
        <FaGithub className="text-2xl"></FaGithub>
      </div>

      <span className="w-5/6 px-4 py-3 font-bold text-center">
        Sign in with Github
      </span>
    </div>
  );
};

export default GithubLogin;
