import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from "react-fast-marquee";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css'
import { Typewriter } from 'react-simple-typewriter'



import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../../../photos/uc1.jpg'
import slide2 from '../../../photos/uc2.jpg'
import slide3 from '../../../photos/uc3.jpg'
import slide4 from '../../../photos/uc4.jpg'
import slide5 from '../../../photos/uc5.jpg'
import slide6 from '../../../photos/uc6.jpg'
import slide7 from '../../../photos/uc7.jpg'
import slide8 from '../../../photos/uc8.jpg'
import slide9 from '../../../photos/uc9.jpg'
import slide10 from '../../../photos/uc10.jpg'
import slide11 from '../../../photos/uc11.jpg'



const UpCommingEvent = () => {

    return (
        <div className=' mt-16'>
            <Marquee className='mt-14 mb-8'>
                <h1 className='font-serif font-black text-2xl mr-10'>Upcoming Painting Events</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Upcoming Painting Events</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Upcoming Painting Events</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Upcoming Painting Events</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Upcoming Painting Events</h1>
                <h1 className='font-serif font-black text-2xl mr-10'>Upcoming Painting Events</h1>
            </Marquee>


            <span className='text-6xl flex justify-center font-black'> <Typewriter
                words={['Upcoming Painting Events...']}
                loop={""}

                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}


            /></span>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide8} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide9} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide10} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide11} />
                </SwiperSlide>
            </Swiper>
        </div>
    );

}
export default UpCommingEvent;