import React from 'react'
import Slider from "react-slick";

const HeroBanner = () => {
    const settings = {
        // dots: true,
        infinite: true,
        // lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    const scrollDown = () => {
        window.innerWidth < 820 ? window.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth'
        }) : window.scrollTo({
            top: 400,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='flex flex-wrap items-center justify-center p-10 mt-0 mb-8 md:order-2 sm:order-2 rounded-b-full shadow-lg bg-gray-100'>
            <div className='lg:w-6/12 md:w-full sm:w-full p-8'>
                <p className='font-bold text-4xl mb-2'>Super Offers</p>
                <p className='text-gray-600 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum modi veniam totam cum doloribus suscipit tenetur facilis magni! Maxime tempore labore mollitia libero amet facilis porro est deserunt id reprehenderit.</p>
                <button onClick={() => scrollDown()} className='bg-blue-800 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition'>Explore Now</button>
            </div>
            <Slider className='lg:w-3/12 md:w-full sm:w-full' {...settings}>
                <img src="banner1.png" className='md:order-1 sm:order-1 lg:max-w-[80%] md:max-w-[100%]' alt="" />
                <img src="banner2.png" className='md:order-1 sm:order-1 lg:max-w-[80%] md:max-w-[100%]' alt="" />

            </Slider>
        </div>
    )
}

export default HeroBanner