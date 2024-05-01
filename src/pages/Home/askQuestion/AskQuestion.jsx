import Lottie from "lottie-react";
import question from '../../../assets/question.json'
import { Typewriter } from 'react-simple-typewriter'
import Marquee from "react-fast-marquee";

const AskQuestion = () => {
    return (

        <div>
            <Marquee className='mt-14 mb-8'>
                <h1 className='font-serif font-black text-2xl mr-10'>Ask Anything</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Ask Anything</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Ask Anything</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Ask Anything</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Ask Anything</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Ask Anything</h1>
            </Marquee>
            <span className="text-6xl font-black flex justify-center mb-10 ">
                <Typewriter
                    words={['Ask a Question...']}
                    loop={""}

                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}


                />
            </span>
            <div className="grid md:grid-cols-2  justify-center items-center">
                <div className="space-y-10">

                    <div className="collapse border-b-4 border-black  bg-base-200">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What types of crafting supplies do you offer in your store?
                        </div>
                        <div className="collapse-content">
                            <p> We offer a wide range of crafting supplies including paints, brushes, canvases, yarn, beads, paper crafting materials, and much more!</p>
                        </div>
                    </div>

                    <div className="collapse bg-base-200 border-b-4 border-black">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Do you offer classes or workshops for aspiring artists?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we regularly host classes and workshops taught by experienced artists. Whether you're interested in learning a new technique or honing your skills, our classes offer something for everyone.</p>
                        </div>
                    </div>

                    <div className="collapse bg-base-200 border-b-4 border-black">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Can I purchase gift cards for your store?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we offer gift cards in various denominations that can be used to purchase any of our art supplies, kits, or classes. It's the perfect gift for the creative person in your life!</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 border-b-4 border-black">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Do you have any beginner-friendly crafting kits available?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! We have beginner-friendly crafting kits for various crafts such as painting, knitting, and jewelry making. These kits come with everything you need to get started on your creative journey.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 border-b-4 border-black">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            What is your store's address?
                        </div>
                        <div className="collapse-content">
                            <p> Our store is located at 123 Main Street, Anytown, USA.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 border-b-4 border-black">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            What are your store's operating hours?
                        </div>
                        <div className="collapse-content">
                            <p>Delivery times vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and standard shipping takes an additional 3-5 business days. However, expedited shipping options are available for faster delivery.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <Lottie className='' animationData={question} loop={true}
                        ></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskQuestion;