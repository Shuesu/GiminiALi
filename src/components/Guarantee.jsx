import React from 'react';

const Header = () => {
  return (

    <div className="text-white bg-cover bg-center h-full bg-blue-400 bg-[url('/src/assets/images/bg-3.png')]">

      <div className="py-20 container mx-auto px-40 flex flex-col items-center justify-center gap-8">
        <h3 className="text-3xl pb-14 text-center">
          Почему мы можем гарантировать Вам результат:
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-6 text-1xl">

          <div className="p-4 flex items-center flex-col md:flex-row bg-gray-200 bg-opacity-30 rounded-2xl">
            <div className="rounded-full w-16 h-16 mr-4 bg-cover bg-[url('/src/assets/images/image-pc.png')]" />
            <div className='text-center md:text-left'>
              <div className="">Применяем алгоритмы Исскусственного </div>
              <div className="">Интеллекта для точного таргетинга</div>
              </div>
          </div>

          <div className="p-4 flex items-center flex-col md:flex-row bg-gray-200 bg-opacity-30 rounded-2xl">
            <div className="rounded-full w-16 h-16 mr-4 bg-cover bg-[url('/src/assets/images/image-fire.png')]" />
            <div className='text-center md:text-left'>
              <div className="">Внедряем собственную методику продвижения</div>
              <div className="">Rocket Power</div>
              </div>
          </div>

          <div className="p-4 flex items-center flex-col md:flex-row bg-gray-200 bg-opacity-30 rounded-2xl">
            <div className="rounded-full w-16 h-16 mr-4 bg-cover bg-[url('/src/assets/images/image-cup.png')]" />
            <div className='text-center md:text-left'>
              <div className="">Используем проверенные американские стратегии</div>
              </div>
          </div>

        </div>

        <a href="#" className="text-center text-3xl bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white font-bold py-2 px-12 rounded-2xl shadow-lg">
          Запустить таргет
        </a>
      </div>

    </div>
  );
};

export default Header;