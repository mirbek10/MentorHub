import React, { useRef, useState, useEffect } from 'react';
import './Project.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCart from './project-cart/ProjectCart';
import { projects } from './data';
import "swiper/css";
import { Link } from 'react-router-dom';
import { IoPlayOutline } from "react-icons/io5";
import { RiPlayReverseLargeLine } from "react-icons/ri";

const Project = () => {
    const swiperRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    const getSlidesPerView = () => {
        if (windowWidth < 768) return 1;
        if (windowWidth < 1024) return 2;
        return 3;
    };

    return (
        <div className='projects'>
            <div className='container projects-header'>
                <h1>Проекты</h1>
                <div className="projects-controls">
                    <Link to={'projects'}>
                        <h4>Посмотреть все <IoPlayOutline/></h4>
                    </Link>
                    <button onClick={handlePrev} aria-label="Previous slide">
                        <RiPlayReverseLargeLine/>
                    </button>
                    <button onClick={handleNext} aria-label="Next slide">
                        <IoPlayOutline/>
                    </button>
                </div>
            </div>

            <div className="projects-body">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={20}
                    slidesPerView={getSlidesPerView()}
                    loop={true}
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <ProjectCart project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Project;
