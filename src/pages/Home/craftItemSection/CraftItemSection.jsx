
import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import SingleCraft from './singleCraft/SingleCraft';
import Marquee from "react-fast-marquee";



const CraftItemSection = () => {
    const card = useLoaderData();

    console.log(card)
    

    return (

        <div>
            <Marquee className='mt-14 mb-8'>
                <h1 className='font-serif font-black text-2xl mr-10'>Art Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Art Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Art Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Art Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Art Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Art Categories</h1>
            </Marquee>


          <span className="text-6xl font-black font-serif flex justify-center mt-8 mb-8">
                <Typewriter
                    words={['Art Categories']}
                    loop={""}

                    cursor
                    cursorStyle='!'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}


                />


            </span> 

            <div className='grid md:grid-cols-3 gap-2  '>
                {
                    card.slice(0,6).map(c => <SingleCraft key={c._id} c={c}></SingleCraft>)
                }
            </div>
        </div>
    );
};

export default CraftItemSection;