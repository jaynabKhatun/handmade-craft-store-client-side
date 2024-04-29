import { useLoaderData } from "react-router-dom";
import SingleCraft from "./singleCraft/SingleCraft";
import { Typewriter } from 'react-simple-typewriter'



const CraftItemSection = () => {
    const crafts = useLoaderData()
    console.log(crafts)
    return (

        <div>



            <span className="text-6xl font-bold text-red-700 flex justify-center mt-8 mb-8">
                <Typewriter
                    words={['Craft Categories']}
                    loop={""}

                    cursor
                    cursorStyle='!'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}


                />


            </span>
           
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    crafts.map(craft => <SingleCraft
                        key={craft._id}
                        craft={craft}
                    ></SingleCraft>)
                }
            </div>
        </div>
    );
};

export default CraftItemSection;