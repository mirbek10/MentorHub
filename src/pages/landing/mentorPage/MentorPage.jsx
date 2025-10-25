import React, {useRef, useState, useEffect} from 'react';
import {TiMediaPlayOutline, TiMediaPlayReverseOutline, TiStarFullOutline} from "react-icons/ti";
import {SlControlPlay} from "react-icons/sl";
import {FaBasketShopping} from "react-icons/fa6";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './mentorPage.scss';
import component from '../../../../public/assets/Component 5.svg';
import Mavis from '../../../../public/assets/mentorkyz.png';
import smile from '../../../../public/assets/img/Smile_rating.svg';
import {mentorData} from './data';
import {useNavigate} from 'react-router-dom';

const MentorPage = () => {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const mentordetail = mentorData;
    const mentorInfo = mentordetail.basicInfo;
    const mentorCourses = mentordetail.courses;

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => swiperRef.current?.swiper.slidePrev();
    const handleNext = () => swiperRef.current?.swiper.slideNext();

    return (
        <div className="mentor-page">
            <div className="mentor-page__breadcrumb">
                <h1 onClick={() => navigate(-1)}>
                    <TiMediaPlayReverseOutline/> Назад
                </h1>
                <h1 onClick={() => navigate('/')} className="mentor-page__main">
                    Главный <TiMediaPlayOutline/>
                </h1>
                <h2 onClick={() => navigate('/mentors')}>Ментор</h2>
            </div>

            <div className="mentor-page__top w-[1280px] mx-auto justify-between">
                <div className="mentor-page__profile">
                    <img
                        src={mentorInfo.avatarImageUrl || Mavis}
                        alt={`${mentorInfo.firstName} ${mentorInfo.lastName}`}
                        className="mentor-page__photo"
                    />
                    <button className="mentor-page__play">
                        <SlControlPlay/>
                    </button>
                </div>

                <div className="mentor-page__info">
                    <h1>{mentorInfo.firstName} {mentorInfo.lastName}</h1>
                    <h5>Статус: Свободна</h5>
                    <div className="mentor-page__rating">
                        <div className="mentor-page__stars">
                            <p>{mentorInfo.countSpecialization} <TiStarFullOutline/></p>
                            <span>445 оценок</span>
                        </div>
                        <div className="mentor-page__meta">
                            <p>1200 студентов</p>
                            <p>Русский</p>
                        </div>
                    </div>
                    <h3>от 2000 C</h3>
                    <div className="mentor-page__buttons">
                        <button className="mentor-page__buy">Купить технологию</button>
                        <button className="mentor-page__like"></button>
                    </div>
                </div>

                <div className="mentor-page__details text-[black] w-[450px]">
                    <h2 className={"font-bold mb-[20px]"}>Данные ментора</h2>
                    <div className="flex flex-wrap gap-3">
                        <div className="bg-[#E2DBFA] px-4 py-2 rounded-2xl text-[#1C1C1C] ">
                            Опыт {mentorInfo.workExperience}
                        </div>
                        <div className="bg-[#D5F6ED] px-4 py-2 rounded-2xl text-[#1C1C1C] ">
                            Работает в {mentorInfo.company}
                        </div>
                        <div className="bg-[#E1F3FF] px-4 py-2 rounded-2xl text-[#1C1C1C] mb-[30px]">
                            Специалист {mentorInfo.specialty}
                        </div>
                    </div>
                    <h2 className={"font-bold"}>Место работы</h2>
                    <div className="mentor-page__company">
                        <img className={""} src={component} alt="Company logo"/>
                        <p>{mentorInfo.company}</p>
                    </div>
                </div>

                <div className="mentor-page__desc">
                    <h2>Описание</h2>
                    <p>
                    Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами как Figma,
                        After Effects. Сделаем 3 проекта для портфолио.
                    </p>
                </div>
            </div>

            <div className="container mentor-page__projects mx-auto">
                <div className="mentor-page__projects-header">
                    <h1>Проекты</h1>
                    <div>
                        <button onClick={handlePrev}>Prevt</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>

                <div className="mentor-page__projects-list">
                    {isMobile ? (
                        <div className="mentor-page__projects-grid">
                            {mentorCourses.map((p) => (
                                <div key={p.courseId} className="mentor-page__project-card">
                                    <div className="mentor-page__project-header">
                                        <div className="mentor-page__project-rating">
                                            <img src={smile} alt="rating"/>
                                            <span>{p.rating}</span>
                                        </div>
                                        <button><IoHeartSharp/></button>
                                    </div>
                                    <h3>{p.courseName}</h3>
                                    <p>Для этого проекта нужны специалисты:</p>
                                    <div className="mentor-page__tags-list">
                                        {p.specialists.map((t, i) => <span key={i}>{t}</span>)}
                                    </div>
                                    <div className="mentor-page__project-footer">
                                        <p>{p.coursePrice} <span>C</span></p>
                                        <button>Подробнее</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Swiper ref={swiperRef} slidesPerView={3} spaceBetween={30}>
                            {mentorCourses.map((p) => (
                                <SwiperSlide key={p.courseId}>
                                    <div className="mentor-page__project-slide">
                                        <h1>{p.courseName}</h1>
                                        <h3>{p.title}</h3>
                                        <p className="mentor-page__price">Стоимость: {p.coursePrice} C</p>
                                        <p className="mentor-page__who">Для кого это технология:</p>
                                        <span>{p.courseDescription}</span>
                                        <div className="mentor-page__project-actions">
                                            <button>Подробно</button>
                                            <button className="mentor-page__cart"><FaBasketShopping/></button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MentorPage;
