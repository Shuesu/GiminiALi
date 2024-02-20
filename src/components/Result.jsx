import React from 'react';
import MySwiper from './MySwiper';


const Result = () => {
  return (
    <div className=" text-white bg-cover bg-center  bg-[url('/src/assets/images/bg-5.png')]">

      <div className="py-20 container mx-auto px-40 h-full items-center gap-6">
        
        <h3 className="mb-20 text-3xl text-center">
        Реальные результаты
        </h3>

        <MySwiper />        

      </div>

    </div>
  );
};

export default Result;