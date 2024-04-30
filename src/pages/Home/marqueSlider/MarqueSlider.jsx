
import Marquee from "react-fast-marquee";

import img from '../../../../public/logo2.png'
import img1 from '../../../../public/logo3.png'
import img2 from '../../../../public/logo4.png'
import img3 from '../../../../public/logo6.png'
import img4 from '../../../../public/logo7.png'

const MarqueSlider = () => {
    return (
        <div className="mt-10 mb-4">
            <Marquee speed={250} pauseOnHover={true} >

                <div className="font-bold text-4xl font-serif mr-10  px-20 py-4">LEATIC</div>

                <div className=" mr-10 font-bold font-bold text-4xl font-serif px-20 py-4">LEATIC</div>

                <div className=" mr-10 font-bold font-bold text-4xl font-serif  px-20 py-4">LEATIC</div>

                <div className=" mr-10 font-bold font-bold text-4xl font-serif px-20 py-4">LEATIC</div>



            </Marquee>
            <Marquee direction="right" speed={100}>
                <img className="mr-20" src={img} alt="" />
                <img className="mr-20" src={img1} alt="" />
                <img className="mr-20" src={img2} alt="" />
                <img className="mr-20" src={img3} alt="" />
                <img className="mr-20" src={img4} alt="" />
            </Marquee>
            
        </div>
    );
};

export default MarqueSlider;