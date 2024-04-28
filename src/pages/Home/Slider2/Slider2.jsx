import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css'


import { Navigation, Autoplay, Parallax, Pagination, Scrollbar, A11y } from 'swiper/modules';

//photos import

import img1 from '../../../../src/photos/slider 1.jpg'
import img2 from '../../../../src/photos/slider 2.jpg'
import img3 from '../../../../src/photos/slider 3.jpg'
import img4 from '../../../../src/photos/slider 4.jpg'
import img5 from '../../../../src/photos/slider5.jpg'





const Slider2 = () => {
    return (
        <div className='mt-24'>
            <Swiper


                modules={[Navigation, Autoplay, Parallax, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                loop={true}




                parallax={true}
                speed={600}

                slidesPerView={1}
                centeredSlides={true}

                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                data-swiper-parallax="-23%"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}



            >



                <SwiperSlide>
                    
                    

                    <img className='bg-cover  rounded-3xl md:h-[600px] md:w-full' src={img1} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-cover rounded-3xl md:h-[600px] md:w-full' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-cover rounded-3xl md:h-[600px] md:w-full' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-cover rounded-3xl md:h-[600px] md:w-full' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-cover rounded-3xl md:h-[600px] md:w-full' src={img5} alt="" />
                </SwiperSlide>


            </Swiper>
        </div>

    );
};

export default Slider2;