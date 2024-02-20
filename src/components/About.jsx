import React from 'react';

const Header = () => {
  return (
    <div className="text-white bg-cover bg-center h-full bg-blue-400 bg-[url('/src/assets/images/bg-4.png')]">

      <div className="py-20 container mx-auto px-40 flex flex-col items-center ">
        <h3 className="text-3xl pb-14 text-center">
          Для быстрого и качественного результата Вы получите:
        </h3>

        <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-6 text-1xl mb-16">

          <div className="flex items-center text-center p-8 lg:w-3/12 h-2/4 bg-yellow-200 bg-opacity-60 rounded-2xl">
            <div className=''>Ежедневный мониторинг Ваших показателей</div>
          </div>

          <div className="flex items-center text-center p-8 lg:w-3/12 h-2/4 bg-yellow-200 bg-opacity-60 rounded-2xl">
            <div className=''>Ежемесячный отчет
              о проделанной работе
              и результатах</div>
          </div>

          <div className="flex items-center text-center p-8 lg:w-3/12 h-2/4 bg-yellow-200 bg-opacity-60 rounded-2xl">
            <div className=''>Медиа - план под Ваш
              бюджет: прогнозирование
              количества заявок</div>
          </div>

          <div className="flex items-center text-center p-8 lg:w-3/12 h-2/4 bg-yellow-200 bg-opacity-60 rounded-2xl">
            <div className=''>97%-ное улучшение точности рекламы с помощью алгоритмов Искусственного Интеллекта</div>
          </div>

          <div className="flex items-center text-center p-8 lg:w-3/12 h-2/4 bg-yellow-200 bg-opacity-60 rounded-2xl">
            <div className=''>Реальный результат, благодаря применению американских стратегий продвижения</div>
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