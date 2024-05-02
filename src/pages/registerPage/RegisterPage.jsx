
import { Link, useNavigate} from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import Lottie from "lottie-react";
import register from '../../../src/assets/register json.json'
import { useContext} from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';


const RegisterPage = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate= useNavigate();
    



    const handleRegister = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.photo.value;
        const newUser = { name, email, password, image }
        console.log(newUser);

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



        //create new user with email and password

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                //update user with name and photo
                updateUser(name, Image)
                    .then(() => {
                        // Navigate after sign in
                        navigate('/')


                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Register Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })
                form.reset()
            })


            .catch(error => {

                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                })



            })

    }


    return (
        <div>
            <section className="p-6 dark:text-gray-500 mt-28 md:flex  ">




                <form onSubmit={handleRegister}
                    className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-base-200 ">
                    <span className=' font-serif text-2xl  text-black font-bold'>
                        <Typewriter
                            words={['REGISTER Here...']}
                            loop={""}

                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}


                        />


                    </span>


                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" name='name' type="text" placeholder="Your name" required="" className=" w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" name='email' placeholder="Your email" required="" className="w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 ml-1">password</label>
                        <input id="password" type="password" name='password' placeholder="Your password" required="" className="w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg" />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-1 ml-1">photo</label>
                        <input id="text" type="text" name='photo' placeholder="Your photo url" required="" className="w-full p-2 border-b-2 fo dark:bg-gray-100 shadow-lg" />
                    </div>

                    <div>
                        <button type="submit" className="w-full btn font-bold bg-stone-600 p-2 border-b-2 fo dark:bg-gray-100 shadow-lg">REGISTER</button>
                    </div>
                    <p className='text-center '>Allready have an account <Link to={'/login'}><span className='font-bold border'>Login</span></Link></p>
                </form>
                <div>
                    <Lottie className='' animationData={register} loop={true}
                    ></Lottie>
                </div>


            </section>
        </div>
    );
};

export default RegisterPage;