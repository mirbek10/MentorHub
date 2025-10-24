import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import './style.scss' // 👈 SCSS файлыңды кошобуз

const tags = [
  { text: '#ДИЗАЙН', color: '#D5F6ED' },
  { text: '#FRONTEND', color: '#FFE0CB' },
  { text: '#BACKEND', color: '#E1F3FF' },
  { text: '#ДИЗАЙН', color: '#FFE0CB' },
  { text: '#ДИЗАЙН', color: '#D5F6ED' },
  { text: '#FRONTEND', color: '#FFE0CB' },
]

const Card = () => {
  return (
    <div className="container mx-auto px-4 mt-[60px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={5.1}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1280: { slidesPerView: 5.1 },
          1024: { slidesPerView: 4.2 },
          768: { slidesPerView: 3.2 },
          640: { slidesPerView: 2.2 },
          0: { slidesPerView: 2 }, // 📱 Телефон — 2 карточка гана
        }}
      >
        {tags.map((tag, index) => (
          <SwiperSlide key={index}>
            <div
              className="tag-card w-[220px] h-[104px] font-bold text-[20px] rounded-[30px] shadow-lg transition hover:scale-105 flex items-center justify-center"
              style={{ border: `2px solid ${tag.color}` }}
            >
              {tag.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Card
