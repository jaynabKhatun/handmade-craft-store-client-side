import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { photo, item, subcategory, price, processing, description, rating, customization, stockStatus } = data;


    return (

        <div className="mt-12">

            <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{item}</h1>
                        <img src={photo} alt="" />
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                                <p className="text-sm">{subcategory}</p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                        </div>
                    </div>
                    <div className="  text-gray-800">
                        <h1  className="font-bold" > Stock Status : <span className="text-green-500 font-bold">{stockStatus}</span></h1>
                            
                        <h1 className="font-bold">Customization : <span className="text-green-500 font-bold">{customization}</span></h1>
                        <h1 className="text-green-500 text-2xl font-bold">{price}</h1>

                        <h1 className="flex items-center gap-2"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><span className="text-green-500 font-bold">{rating}</span></h1>
                        <h1 className="font-black">Processing Time: <span className="text-green-500 font-bold" >{processing}</span> </h1>
                        <p className="mt-6 font-serif text-2xl font-semibold"> {description}</p>
                    </div>
                </article>
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#painting</a>
                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#art</a>
                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#photo</a>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold font-serif">you want to go</h4>
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                <Link to={'/'} rel="noopener noreferrer" href="#" className="hover:underline text-green-400 font-bold">Go Back home</Link>
                            </li>
                            <li>
                                <Link to={'/myArtAndCraft'} rel="noopener noreferrer" href="#" className="hover:underline text-green-400 font-bold">Show your Saved Item</Link>
                            </li>
                            <li>
                                <Link to={'/allArtAndCraft'} rel="noopener noreferrer" href="#" className="hover:underline text-green-400 font-bold">All Art List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;