import React, { useRef, useState, useEffect } from 'react';
import '../Project.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCart from '../project-cart/ProjectCart';
import { projects } from '../data';
import { IoPlayOutline } from "react-icons/io5";
import { RiPlayReverseLargeLine } from "react-icons/ri";

import "swiper/css";
import "swiper/css/pagination";

const OtherProject = () => {
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
        <div className='projects !mt-[40px]'>
            <div className='container projects-header'>
                <h1>Другие проекты</h1>
                <div className="projects-controls">
                    <h4 className=''>Посмотреть все <IoPlayOutline /></h4>
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

            <div className="projects-body">
                {isMobile ? (
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={3.120}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        loop={true}
                        breakpoints={{
                            200: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            760: { slidesPerView: 2.120 },
                            1024: { slidesPerView: 3.120},
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCart project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCart key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
            <div className='item-mentor-btn '>
                <button>Показать все</button>
            </div>
        </div>
    );
};

export default OtherProject;
