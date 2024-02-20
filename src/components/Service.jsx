import React from 'react';

const Service = () => {
  return (
    <div className="text-white bg-cover bg-center h-full bg-[url('/src/assets/images/bg-2.png')]">
      <div className="container mx-auto px-40 py-12 flex flex-col  items-center gap-6">
        <h3 className="text-3xl pb-14 text-center">
          Эта услуга для Вас, если Вы:
        </h3>

        <div className='flex justify-center gap-16 flex-wrap '>

          <div className="w-60 text-white ">

            <div className='relative p-8 pt-16 bg-pink-400 rounded-2xl'>
              <div className="absolute top-[-2rem] right-4 left-4 text-center p-2 bg-gray-200 bg-opacity-90 text-lg font-bold rounded-2xl">Устали менять таргетологов</div>
              <div className="mb-4 ">Получите 6 digital специалистов по цене 1 таргетолога:</div>
              <ul className="">
                <li className="mb-2">✓ Маркетолог</li>
                <li className="mb-2">✓ Копирайтер</li>
                <li className="mb-2">✓ Мобилограф</li>
                <li className="mb-2">✓ Дизайнер</li>
                <li className="mb-2">✓ Digital маркетолог</li>
                <li className="mb-2">✓ Таргетолог</li>
                <li className="mb-2 text-center">+</li>
                <li className="mb-2">Искусственный Интеллект</li>
              </ul>
            </div>
          </div>

          <div className="w-60 text-white ">

            <div className='relative p-8 pt-16 bg-pink-400 rounded-2xl'>
              <div className="absolute top-[-2rem] right-4 left-4 text-center p-2 bg-gray-200 bg-opacity-90 text-lg font-bold rounded-2xl">Клиенты пишут, но не покупают</div>
              <div className="mb-4 ">Получайте
                только качественные заявки, благодаря нашей собственной методике ультраточного таргетирования Rocket Power</div>
            </div>
          </div>

          <div className="w-60 text-white ">

            <div className='relative p-8 pt-16 bg-pink-400 rounded-2xl'>
              <div className="absolute top-[-2rem] right-4 left-4 text-center p-2 bg-gray-200 bg-opacity-90 text-lg font-bold rounded-2xl">Цена за лид заоблочна</div>
              <div className="mb-4 ">Получите
                в 2 раза больше качественных лидов за тот же бюджет
                при помощи американских стратегий продвижения</div>
            </div>
          </div>

        </div>

        <a href="#" className=" text-center text-3xl bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white font-bold py-2 px-12 rounded-2xl shadow-lg">
          Запустить таргет
        </a>
      </div>
    </div>
  );
};

export default Service;