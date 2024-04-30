import Lottie from 'lottie-react';
import cart from '../../../src/assets/add cart.json';
import cart2 from '../../../src/assets/card logo.json'
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';
import { useContext } from 'react';

const AddCraftItems = () => {
    const { user } = useContext(AuthContext) || {};

    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const item = form.item_name.value;
        const subcategory = form.subcategory_Name.value;
        const price = form.price.value;
        const description = form.short_description.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.email.value;
        const name = form.name.value;
        const email = user.email;



        const newCraft = { photo, item, subcategory, price, processing, description, rating, customization, stockStatus, email, name, userEmail }

        console.log(newCraft);

        //post request

        fetch('http://localhost:5000/crafts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newCraft)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Added!",
                        text: "Craft has been added.",
                        icon: "success"
                    })
                }

                form.reset()
            })








    }


    return (
        <div>


            <section className="p-4 bg-base-300 mt-28 text-gray-900">
                <div className='flex justify-center -translate-y-10'>
                    <Lottie className='w-32  ' animationData={cart2} loop={true}
                    ></Lottie>

                </div>
                <span className='text-4xl font-bold  text-blue-800  flex justify-center items-center'>

                    <Typewriter
                        words={['Add  Craft']}
                        loop={""}

                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}


                    />

                </span>



                <form onSubmit={handleAddCraft}

                    className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className='flex justify-center items-center'>
                            <Lottie className='w' animationData={cart} loop={true}
                            ></Lottie>
                        </div>



                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">photo url</label>

                                <input name='photo' id=" photo" type="text" placeholder="photo url" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor=" item_name" className="text-sm"> item_name</label>
                                <input id="item_name" name='item_name' type="text" placeholder=" item_name" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="subcategory_Name" className="text-sm">subcategory_Name
                                </label>
                                <input id="subcategory_Name" name='subcategory_Name' type="text" placeholder="subcategory_Name" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">price
                                </label>
                                <input id="price" name='price' type="text" placeholder="price" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="short description" className="text-sm">short description</label>
                                <input name='short_description' id="short description" type="text" placeholder="short description" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="rating" className="text-sm">rating</label>
                                <input id="rating" name='rating' type="text" placeholder="rating" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="customization" className="text-sm">customization</label>

                                <input name='customization' placeholder='customization' className='w-full rounded-md border-b-2 border-black shadow-xl p-2' type="text" list="cars" />
                                <datalist id="cars">
                                    <option>Yes</option>
                                    <option>No</option>

                                </datalist>
                            </div>


                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="processing_time" className="text-sm">processing_time</label>
                                <input name='processing_time' id="processing_time" type="text" placeholder="processing_time" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="stockStatus" className="text-sm">stock Status</label>
                                <input name='stockStatus' placeholder='In stock' className='w-full rounded-md border-b-2 border-black shadow-xl p-2' type="text" list="order" />
                                <datalist id="order">
                                    <option>In stock</option>
                                    <option>Made to Order</option>

                                </datalist>
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="email" className="text-sm"> Email
                                </label>
                                <input name='email' id="email" type="email" placeholder="email" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="Name" className="text-sm">User Name
                                </label>
                                <input name='name' id=" Name" type="text" placeholder="name" className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                            </div>


                            <div className="col-span-full ">


                                <input value="Add" type="submit" placeholder="" className="w-full btn  font-bold  shadow-xl p-2" />

                            </div>
                        </div>


                    </fieldset>

                </form>


            </section>
        </div>
    );
};

export default AddCraftItems;