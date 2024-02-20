import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const MySwiper = () => {
  return (
    <Swiper

      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={4}
      loop={true}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <div className="bg-gradient-to-b from-pink-500 to-purple-500 p-8 rounded-2xl shadow-md">
          <div className="grid gap-4">
            <div className="border p-4 rounded-md uppercase text-center">До</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right mb-8"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="border p-4 rounded-md uppercase text-center">После</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-gradient-to-b from-pink-500 to-purple-500 p-8 rounded-2xl shadow-md">
          <div className="grid gap-4">
            <div className="border p-4 rounded-md uppercase text-center">До</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right mb-8"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="border p-4 rounded-md uppercase text-center">После</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-gradient-to-b from-pink-500 to-purple-500 p-8 rounded-2xl shadow-md">
          <div className="grid gap-4">
            <div className="border p-4 rounded-md uppercase text-center">До</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right mb-8"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="border p-4 rounded-md uppercase text-center">После</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-gradient-to-b from-pink-500 to-purple-500 p-8 rounded-2xl shadow-md">
          <div className="grid gap-4">
            <div className="border p-4 rounded-md uppercase text-center">До</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right mb-8"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="border p-4 rounded-md uppercase text-center">После</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-gradient-to-b from-pink-500 to-purple-500 p-8 rounded-2xl shadow-md">
          <div className="grid gap-4">
            <div className="border p-4 rounded-md uppercase text-center">До</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right mb-8"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="border p-4 rounded-md uppercase text-center">После</div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
            <div className="bg-white text-black border p-4 rounded-md text-right"><div className='font-semibold'>3.95$</div><div>За лиды на Facebook</div></div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default MySwiper;