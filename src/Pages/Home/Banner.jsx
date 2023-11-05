import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/bundle'
import { A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

const Banner = () => {

    const swiperRules = {
        modules: [A11y],
        spaceBetween: 0,
        slidesPerView: 1,
        loop:true,
        // navigation: true,
        onSwiper: (swiper) => {
            // console.log(swiper)
            window.swiper = swiper
        },
        onSlideChange: () => console.log('slide change'),
    }

    setInterval(() => {
        goNext()
    }, 2000);

    function goNext() {
        if (window.swiper) {
            window.swiper.slideNext();
        }
    }
    function goPrev() {
        if (window.swiper) {
            window.swiper.slidePrev();
        }
    }

    return (
        <div className='banner relative overflow-hidden'>
            <Swiper
                // install Swiper modules
                {...swiperRules}
            >
                <SwiperSlide><img src='https://i.ibb.co/Rvv7j3Y/banner1.jpg'></img></SwiperSlide>
                <SwiperSlide><img src='https://i.ibb.co/qBBCvzC/banner2.jpg'></img></SwiperSlide>
                <SwiperSlide><img src='https://i.ibb.co/phD3vcF/banner3.jpg'></img></SwiperSlide>
                <SwiperSlide><img src='https://i.ibb.co/DYSwZwh/banner4.jpg'></img></SwiperSlide>

            </Swiper>  

            <div className='absolute top-0 w-1/2 z-10 flex items-center text-white bottom-0'>
                <div className=' border-l-2 border-crim ml-2 flex flex-col p-4 space-y-4 bg-gradient-to-r from-[#000] to-[#0000002f]'>
                    <h2 className='text-4xl font-bold text-white'>The <span className='text-crim'> Ocean</span> of Books,</h2>
                    <h2 className='text-4xl font-bold text-white'>The Ocean of Knowledge</h2>
                    <p className='my-7'>Libraries are invaluable institutions that promote knowledge, personal growth, empowerment, and community engagement. </p>
                    <div className=''>
                    </div>
                </div>
            </div>
            <div className='absolute z-50 w-full flex items-center justify-center bg-fadegray bottom-0 gap-4 p-2'> 
                <button onClick={goPrev} className=''>
                    <AiOutlineLeftCircle className='text-crim text-5xl'></AiOutlineLeftCircle>
                </button>
                <button onClick={goNext} className=''>
                    <AiOutlineRightCircle className='text-crim text-5xl'></AiOutlineRightCircle> 
                </button>
            </div>
        </div>
    );
};

export default Banner;