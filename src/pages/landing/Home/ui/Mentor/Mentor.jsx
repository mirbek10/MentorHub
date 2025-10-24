import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import MentorCart from './Mentor-cart/MentorCart';
import { mentors } from './Data/Data'; 
import { IoPlayOutline } from "react-icons/io5";
import { RiPlayReverseLargeLine } from "react-icons/ri";

// import "swiper/css";
// import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Mentor = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth >= 760);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className='Mentor'>
      <div className='container item-mentor'>
        <h1>Менторы</h1>
        <div className="mentor-controls">
        <Link to={'mentors'}><h4>Посмотреть все <IoPlayOutline /></h4></Link>
          {isMobile && (
            <>
              <button onClick={handlePrev} aria-label="Previous slide">
                <RiPlayReverseLargeLine />
              </button>
              <button onClick={handleNext} aria-label="Next slide">
                <IoPlayOutline />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="Mentors">
        {isMobile ? (
      <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      spaceBetween={1}
      slidesPerView={3.1} 
      slidesPerGroup={1}
      centeredSlides={false} 
      loop={true}
      pagination={{ 
        clickable: true,
        dynamicBullets: true
      }}
      breakpoints={{
        200: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        770: {
          slidesPerView: 2.1,
        },
        1024: {
          slidesPerView: 3.1, 
        },
      }}
    >
      {mentors.map((mentor, index) => (
        <SwiperSlide key={mentor.id}>
          <MentorCart mentor={mentor} />
        </SwiperSlide>
      ))}
    </Swiper>
    
        ) : (
          <div className="mentor-grid">
            {mentors.map((mentor) => (
              <MentorCart key={mentor.id} mentor={mentor} />
            ))} 
           </div> 
         )} 
      </div>
      <button className='item-mentor-btn w-[100%]'>Показать все</button>
    </div>
  );
};

export default Mentor;
