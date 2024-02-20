import React from 'react';

const Header = () => {
  return (
    <div className="text-white bg-cover bg-center h-full bg-[url('/src/assets/images/bg-6.png')]">
      <div className="container mx-auto flex flex-col items-center justify-center h-screen gap-6">
        <h2 className="text-5xl font-bold uppercase text-center">
          ПОЛУЧИТЕ 1 МЕСЯЦ
          УСЛУГИ БЕСПЛАТНО!
        </h2>


        <h3 className="text-3xl text-center">
        Если мы не достигнем установленных результатов за 2 месяца
        </h3>

      </div>
    </div>
  );
};

export default Header;