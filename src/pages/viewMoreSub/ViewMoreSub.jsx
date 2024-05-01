import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const ViewMoreSub = () => {
    const singleData = useLoaderData();
    console.log(singleData)
    const { photo, item, subcategory, description, rating } = singleData;
    return (
        <div className="mt-28">
            <div className="p-5 mx-auto   sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={photo} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6  lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block bg-gray-500 p-4 text-2xl font-semibold sm:text-3xl">{item}</a>
                            <p className="text-xs dark:text-gray-600">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{subcategory}</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-800">

                            <p className="flex items-center gap-2"><FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><span className="font-bold text-green-500">{rating}</span></p>
                            
                            <p>{description}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewMoreSub;