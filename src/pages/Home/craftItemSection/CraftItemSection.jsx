
import SingleCraft from "./singleCraft/SingleCraft";
import { Typewriter } from 'react-simple-typewriter'



const CraftItemSection = () => {
   
    return (

        <div>


            <span className="text-6xl font-black flex justify-center mt-8 mb-8">
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
                    crafts.slice(0,6).map(craft => <SingleCraft
                        key={craft._id}
                        craft={craft}
                    ></SingleCraft>)
                }
            </div>
        </div>
    );
};

export default CraftItemSection;