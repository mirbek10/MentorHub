import React from 'react';

const Hero2 = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[60px]">
      <h2 className="text-[32px] font-bold mb-[40px] text-[#333] mt-[60px] text-center">
        О наших сервисах
      </h2>

      {/* Flex контейнер */}
      <div className="flex justify-center items-start flex-wrap gap-[40px] max-w-[1300px] mx-auto mt-[30px]">
        {/* Карточка 1 */}
        <div className="w-[380px] bg-[#FAFAFA] rounded-[30px] p-6 font-jost">
          <h1 className="font-bold text-[64px] text-[#6F6D73]">01</h1>
          <h2 className="font-bold text-[24px] mt-[10px] text-[#333]">Менторы</h2>
          <p className="text-[#23AFCE] font-semibold text-[16px] mt-[25px]">Что вы получите:</p>
          <ul className="mt-[20px] space-y-[16px] text-[16px] font-medium text-[#555] list-disc pl-5">
            <li>Индивидуальные консультации с опытным ментором</li>
            <li>Поддержку и наставления в достижении ваших целей</li>
            <li>Регулярные встречи для обсуждения прогресса</li>
          </ul>
        </div>

        {/* Карточка 2 */}
        <div className="w-[380px] bg-[#FAFAFA] rounded-[30px] p-6 font-jost">
          <h1 className="font-bold text-[64px] text-[#6F6D73]">02</h1>
          <h2 className="font-bold text-[24px] mt-[10px] text-[#333]">Проекты</h2>
          <p className="text-[#23AFCE] font-semibold text-[16px] mt-[25px]">Что вы получите:</p>
          <ul className="mt-[20px] space-y-[16px] text-[16px] font-medium text-[#555] list-disc pl-5">
            <li>Участие в реальных проектах</li>
            <li>Опыт работы в команде и возможность применить полученные знания на практике</li>
            <li>Руководство опытных специалистов</li>
            <li>Дополнение к вашему портфолио</li>
          </ul>
        </div>

        {/* Карточка 3 */}
        <div className="w-[380px] bg-[#FAFAFA] rounded-[30px] p-6 font-jost">
          <h1 className="font-bold text-[64px] text-[#6F6D73]">03</h1>
          <h2 className="font-bold text-[24px] mt-[10px] text-[#333]">Курсы</h2>
          <p className="text-[#23AFCE] font-semibold text-[16px] mt-[25px]">Что вы получите:</p>
          <ul className="mt-[20px] space-y-[16px] text-[16px] font-medium text-[#555] list-disc pl-5">
            <li>Доступ к материалам курса 24/7</li>
            <li>Практические задания и упражнения</li>
            <li>Обратная связь от преподавателей</li>
            <li>Возможность общаться с другими участниками курса</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
