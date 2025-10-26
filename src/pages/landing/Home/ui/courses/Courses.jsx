"use client";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import avi from "../../../../../../public/assets/avi.svg";
import courl2 from "../../../../../../public/assets/courl2.svg";
import courl3 from "../../../../../../public/assets/courl3.svg";
import img from "../../../../../../public/assets/img.png";
import strel from "../../../../../../public/assets/strel.svg";
import strel2 from "../../../../../../public/assets/strel2.svg";
import strel3 from "../../../../../../public/assets/strel3.svg";
import smile from "../../../../../../public/assets/img/Smile_rating.svg";
import {Link, Navigate, useNavigate} from "react-router-dom";
import x11 from "../../../../../../public/assets/x11.svg";
import like11 from "../../../../../../public/assets/like11.svg";

const Courses = () => {
    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );
    const [showMore, setShowMore] = useState(false);
    const [favorites, setFavorites] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("favoriteCourseIds");
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const logAction = (action) => {
        console.log(`[${new Date().toISOString()}] User action: ${action}`);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            logAction(`Window resized to ${window.innerWidth}px`);
        };

        window.addEventListener("resize", handleResize);
        logAction("Component mounted");

        return () => {
            window.removeEventListener("resize", handleResize);
            logAction("Component unmounted");
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("favoriteCourseIds", JSON.stringify(favorites));
        logAction(`Favorite course IDs updated: ${favorites.length} items`);
    }, [favorites]);

    const getSlidesPerView = () => {
        if (windowWidth < 422) return 1;
        if (windowWidth < 768) return 1;
        if (windowWidth < 964) return 2;
        return 3.12;
    };

    const handleShowMore = () => {
        setShowMore(true);
        logAction("Show more button clicked");
    };

    const openModal = () => {
        setIsModalOpen(true);
        logAction("Modal opened");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        logAction("Modal closed");
    };

    const toggleFavorite = (courseId) => {
        setFavorites((prev) => {
            if (prev.includes(courseId)) {
                logAction(`Course ${courseId} removed from favorites`);
                return prev.filter((id) => id !== courseId);
            } else {
                logAction(`Course ${courseId} added to favorites`);
                return [...prev, courseId];
            }
        });
    };

    const courses = [
        {
            id: 1,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SoFX9UCzI398YpwZyymvxkS0LwZYQv.png",
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 2,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I6lxuS1l9WwQzneGwSFBWXht69dmGC.png",
            price: "2000 ₽",
            bgColor: "bg-green-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 3,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: img,
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 4,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SoFX9UCzI398YpwZyymvxkS0LwZYQv.png",
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 5,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I6lxuS1l9WwQzneGwSFBWXht69dmGC.png",
            price: "2000 ₽",
            bgColor: "bg-green-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 6,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TPhnYfBU9K0pOVIRh0E48inhLyqdFn.png",
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
    ];

    const visibleCourses = windowWidth < 768 ? (showMore ? courses : courses.slice(0, 3)) : courses;

    return (
        <div className="max-w-[1280px] mx-auto px-4 py-8 bg-white relative">
            <div className="mb-6">
                <div className="max-w-[1180px] flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">Курсы</h2>
                    <div className="flex items-center">
                        <button
                            className="flex hover:text-gray-700 rounded-[25px] bg-[rgba(250,250,250,1)] p-3 pl-5 pr-5">
                            <Link to="courses">Посмотреть все</Link>
                            <img className="ml-5" src={strel3} alt=""/>
                        </button>
                        {windowWidth >= 768 && (
                            <div className="flex gap-[5px] relative left-5">
                                <button
                                    className="w-[56px] h-[56px] rounded-full border border-gray-300 flex items-center justify-center mr-2 swiper-button-prev-courses"
                                    onClick={() => logAction("Previous slide button clicked")}
                                >
                                    <img src={strel2} alt=""/>
                                </button>
                                <button
                                    className="w-[56px] h-[56px] rounded-full border border-gray-300 flex items-center justify-center swiper-button-next-courses"
                                    onClick={() => logAction("Next slide button clicked")}
                                >
                                    <img src={strel} alt=""/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {windowWidth >= 768 ? (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={getSlidesPerView()}
                        navigation={{
                            prevEl: ".swiper-button-prev-courses",
                            nextEl: ".swiper-button-next-courses",
                        }}
                        className="courses-swiper w-full h-auto"
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course.id}>
                                {renderCourseCard(course, logAction, toggleFavorite, favorites, openModal, navigate)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Swiper
                        modules={[]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        className="w-full py-4"
                    >
                        {visibleCourses.map((course) => (
                            <SwiperSlide key={course.id}>
                                {renderCourseCard(course, logAction, toggleFavorite, favorites, openModal)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[380px] relative shadow-lg">
                        <img className="absolute top-8 right-10 text-xl font-bold text-black hover:text-gray-600"
                             src={x11} alt=""
                             onClick={closeModal}
                        />
                        <h3 className="text-[16px] font-bold mb-5 pt-3 text-black">Учебный план</h3>
                        <div className="space-y-3">
                            <div className={"flex ml-3"}><h1>1.</h1> Подготовка</div>
                            <div className="flex mt-6 justify-between items-center">
                                <p className="text-[16px] text-black">
                                    <span className=" mr-2">01</span> Как продать курс
                                </p>
                                <p className="text-[14px] text-gray-500">2:00 мин</p>
                            </div>
                            <div className="flex mt-8 justify-between items-center">
                                <p className="text-[16px] text-black">
                                    <span className=" mr-2">02</span> Сканы материалы
                                </p>
                                <p className="text-[14px] text-gray-500">2:00 мин</p>
                            </div>
                            <div className={"flex ml-3 mt-8"}><h1>2.</h1>Основы Figma</div>
                            <div className="flex mt-5 justify-between items-center">
                                <p className="text-[16px] text-black">
                                    <span className=" mr-2">03</span> Об обновлении Figma
                                </p>
                                <p className="text-[14px] text-gray-500">2:00 мин</p>
                            </div>
                            <div className="flex mt-8 justify-between items-center">
                                <p className="text-[16px] text-black">
                                    <span className="mr-2">04</span> Какие размеры у сайта
                                </p>
                                <p className="text-[14px] text-gray-500">2:00 мин</p>
                            </div>
                            <div className="flex mt-8 justify-between items-center">
                                <p className="text-[16px] text-black">
                                    <span className=" mr-2">05</span> Создать фрейм сайта
                                </p>
                                <p className="text-[14px] text-gray-500">2:00 мин</p>
                            </div>
                        </div>
                        <div className="flex mt-8 justify-between items-center mt-6">
                            <button
                                className="bg-black pl-[70px] pr-[70px] text-white px-10 py-4 rounded-2xl font-semibold text-[16px] hover:bg-gray-800 transition-colors"
                                onClick={() => logAction("Buy Now button clicked")}
                            >
                                Купить сейчас
                            </button>
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                onClick={() => logAction("Heart icon clicked")}
                            >
                                <img className="text-[20px] bg-black text-white bg-black rounded-[100px] p-4 "
                                     src={like11} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const renderCourseCard = (course, logAction, toggleFavorite, favorites, openModal, navigate) => {
    const formatTitle = (title) => {
        const parts = title.split("UX/UI ");
        return (
            <>
                {parts[0]}UX/UI
                <br/>
                {parts[1]}
            </>
        );
    };

    const isFavorite = favorites.includes(course.id);

    return (
        <div
            className="bg-white w-full max-w-[378px] rounded-[25px] border border-gray-100 min-h-[400px] shadow-lg"
            style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
        >
            <div className="relative">
                <div className="aspect-[5/3] relative p-[1px]">
                    <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full pt-2 pr-2 pb-2 pl-2 rounded-4xl object-cover"
                    />
                    <div className="absolute top-5 ml-5 pl-2 pr-2 bg-white rounded-[55px] px-1 flex items-center">
                        <span className="text-[19px] p-1 font-bold">{course.rating}</span>
                        <img src={smile} alt="Рейтинг" className="pt-[1px]"/>
                    </div>
                    <div className="absolute right-2 bg-white rounded-md px-2 py-1"></div>
                    <div className="absolute w-[45px] bottom-2 mb-3 mr-5 w-[23px] right-1 flex flex-col gap-4">
                        <img
                            className="bg-black rounded-3xl p-3 hover:bg-[rgba(35,175,206,1)] transition-colors duration-300 cursor-pointer"
                            src={courl2}
                            alt="Course icon 1"
                            onClick={openModal}
                        />
                        <img
                            className={`rounded-3xl p-3 transition-colors duration-300 cursor-pointer ${
                                isFavorite ? "bg-[rgba(35,175,206,1)]" : "bg-black"
                            } hover:bg-[rgba(35,175,206,1)]`}
                            src={courl3}
                            alt="Course icon 2"
                            onClick={() => toggleFavorite(course.id)}
                        />
                    </div>
                </div>
            </div>
            <div className="p-4 h-auto">
                <h3 className="font-bold text-lg mb-2">{formatTitle(course.title)}</h3>
                <div className="flex items-center mb-2">
                    <img
                        src={course.instructor.image || "/placeholder.svg"}
                        alt="Instructor"
                        className="w-8 h-8 rounded-[100px] h-6 rounded-full mr-2 object-cover"
                    />
                    <span className="text-sm font-bold mr-1">{course.instructor.rating}</span>
                    <span className="text-sm text-gray-500 mr-1">{course.students} студентов</span>
                    <span className="text-sm text-gray-500">{course.language}</span>
                </div>
                <div className="mb-3">
                    <p className="text-[15px] mb-2 font-bold">Для кого этот курс</p>
                    <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`text-[15px] px-3 pt-2 pr-5 pb-2 pl-5 rounded-[16px] border mt-1 ${
                                    tag === "Дизайнеры"
                                        ? "border-black"
                                        : tag === "Frontend Разработчики"
                                            ? "border-[rgba(255,208,44,1)]"
                                            : tag === "Backend Разработчики"
                                                ? "border-[rgba(35,175,206,1)]"
                                                : "border-gray-300"
                                }`}
                                onClick={() => logAction(`Tag ${tag} clicked for course ${course.id}`)}
                            >
                                    {tag}
                                </span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-2xl ml-2">{course.price}</span>
                    <button
                        className="bg-gray-800 text-white px-6 py-4 rounded-[21px] font-bold text-[16px] mr-4 transition-colors duration-300 ease-in-out hover:bg-gray-700"
                        onClick={() => {
                            // logAction(`Details button clicked for course ${course.id}`)
                            navigate("/koursdetail/" + course.id)
                        }}
                    >
                        Подробно
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;