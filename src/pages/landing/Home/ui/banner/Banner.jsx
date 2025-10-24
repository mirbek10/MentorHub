import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

import input from "../../../../../../public/assets/input.svg";

const slides = [
  {
    bg: '#D5F6ED',
    title: 'Mentor Hub — место, где вы можете найти ментора и курсы, а также нужные проекты',
  },
//   {
//     bg: '#E1F3FF',
//     title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты',
//   },
//   {
//     bg: '#D5F6ED',
//     title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты',
//   },
//   {
//     bg: '#E2DBFA',
//     title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты'
//   },
];

const Banner = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/podbor');
  };
  return (
    <div className="container mx-auto mt-[60px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        allowTouchMove={false}
        className="rounded-[24px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[1180px] h-[432px] p-6 rounded-[24px] transition-all duration-300"
              style={{ backgroundColor: slide.bg }}
            >
              <h6 className="text-[24px] font-medium font-jost text-center text-[#333] mt-[66px]">
                Успехов тебе в начинаниях!🤗
              </h6>

              <h2 className="text-[32px] md:text-[42px] font-bold mt-[34px] text-center font-jost text-[#333]">
                {slide.title}
              </h2>

              <div className="mt-[32px] flex justify-center flex-wrap">
                <input
                  className="w-[580px] h-[64px] rounded-[20px] pl-[25px] text-[20px] font-jost bg-white font-medium text-[#6F6D73]"
                  type="text"
                  placeholder="Поиск, например курс для дизайнера"
                />
                <img
                  className="relative left-[-50px] mt-[10px] top-[25px] transform -translate-y-1/2 w-[24px] h-[24px]"
                  src={input}
                  alt="Search Icon"
                />
                <button
                  onClick={handleNavigate}
                  className="w-[158px] h-[64px] hero-btn text-white rounded-[24px] flex items-center justify-center transition duration-300 ml-[20px] z-1"
                >
                  Подобрать
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
