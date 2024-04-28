
import Marquee from "react-fast-marquee";

const MarqueSlider = () => {
    return (
        <div className="mt-4 mb-4">
            <Marquee className="bg-base-200 p-2 font-bold " pauseOnHover={true} >
                Welcome to our <span className="font bold mr-2 ml-2 text-2xl">LEATIC</span>  canvas of creativity! Dive into a world where every stroke tells a story, and every hue evokes emotion.
            </Marquee>
        </div>
    );
};

export default MarqueSlider;