import { useLoaderData } from "react-router-dom";
import SingleSubCt from "./SingleSubCt";
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter'

const SubCetegory = () => {
    const subCategory = useLoaderData();
    
    console.log(subCategory);
    return (

        <div>
            <Marquee className='mt-14 mb-8'>
                <h1 className='font-serif font-black text-2xl mr-10'>Sub Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Sub Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Sub Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Sub Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Sub Categories</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Sub Categories</h1>
            </Marquee>
            <span className="text-6xl font-black font-serif flex justify-center mt-8 mb-8">
                <Typewriter
                    words={['Sub Categories']}
                    loop={""}

                    cursor
                    cursorStyle='!'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}


                />


            </span>
            

            <div className="grid md:grid-cols-3 gap-2 ">
                {
                    subCategory.slice(6, 13).map(sub => <SingleSubCt key={sub._id} sub={sub}></SingleSubCt>)
                }
            </div>
        </div>
    );
};

export default SubCetegory;
