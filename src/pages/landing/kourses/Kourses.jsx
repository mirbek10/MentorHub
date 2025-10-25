"use client"
import { useEffect, useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import avi from "../../../../public/assets/avi.svg"
import courl2 from "../../../../public/assets/courl2.svg"
import courl3 from "../../../../public/assets/courl3.svg"
import cursava1 from "../../../../public/assets/cursava1.png"
import down1 from "../../../../public/assets/down1.svg"
import smile from '../../../../public/assets/img/Smile_rating.svg'
import left from "../../../../public/assets/left.svg"
import right from "../../../../public/assets/right.svg"
// import img from "../../assets/img.png"
import like11 from "../../../../public/assets/like11.svg"
import x11 from "../../../../public/assets/x11.svg"
import { useNavigate } from "react-router-dom"

const CoursesPage = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(null)
    const [showMore, setShowMore] = useState(false)
    const [activeTag, setActiveTag] = useState("#АНАЛИЗЫ")
    const [favorites, setFavorites] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("favoriteCourseIds")
            return saved ? JSON.parse(saved) : []
        }
        return []
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const swiperRef = useRef(null)

    const logAction = (action) => {
        console.log(`[${new Date().toISOString()}] User action: ${action}`)
    }

    const handleClick = (index) => {
        setActiveIndex(index)
        logAction(`Page number ${index + 1} clicked`)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            logAction(`Window resized to ${window.innerWidth}px`)
        }

        window.addEventListener("resize", handleResize)
        logAction("Component mounted")

        return () => {
            window.removeEventListener("resize", handleResize)
            logAction("Component unmounted")
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favoriteCourseIds", JSON.stringify(favorites))
        logAction(`Favorite course IDs updated: ${favorites.length} items`)
    }, [favorites])

    const toggleFavorite = (courseId) => {
        setFavorites((prev) => {
            if (prev.includes(courseId)) {
                logAction(`Course ${courseId} removed from favorites`)
                return prev.filter((id) => id !== courseId)
            } else {
                logAction(`Course ${courseId} added to favorites`)
                return [...prev, courseId]
            }
        })
    }

    const handleShowMore = () => {
        setShowMore(true)
        logAction("Show more button clicked")
    }

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop()
            logAction("Autoplay stopped on mouse enter")
        }
    }

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start()
            logAction("Autoplay started on mouse leave")
        }
    }

    const openModal = () => {
        setIsModalOpen(true)
        logAction("Modal opened")
    }

    const closeModal = () => {
        setIsModalOpen(false)
        logAction("Modal closed")
    }

    const courses = [
        {
            id: 1,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
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
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
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
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
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
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
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
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
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
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 7,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.7,
            students: 1500,
            language: "Русский",
            instructor: { image: avi, rating: 4.8 },
            image: cursava1,
            price: "2500 ₽",
            bgColor: "bg-green-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 8,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.6,
            students: 1300,
            language: "Русский",
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
            price: "2200 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 9,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.8,
            students: 1400,
            language: "Русский",
            instructor: { image: avi, rating: 4.7 },
            image: cursava1,
            price: "2300 ₽",
            bgColor: "bg-green-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 10,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1100,
            language: "Русский",
            instructor: { image: avi, rating: 4.9 },
            image: cursava1,
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 11,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.9,
            students: 1600,
            language: "Русский",
            instructor: { image: avi, rating: 4.8 },
            image: cursava1,
            price: "2400 ₽",
            bgColor: "bg-green-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 12,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.4,
            students: 1000,
            language: "Русский",
            instructor: { image: avi, rating: 4.6 },
            image: cursava1,
            price: "2100 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
    ]

    const visibleCourses = windowWidth < 768 ? (showMore ? courses : courses.slice(0, 3)) : courses

    const tags = [
        "#АНАЛИЗЫ",
        "#FRONTEND",
        "#BACKEND",
        "#DESIGN",
        "#DEVOPS",
        "#ТЕСТЕР",
        "#ДЕВЕЛОПЕР",
        "#АНАЛИЗ",
        "#СЕКЬЮРИТИ",
        "#UIUX",
    ]

    return (
        <div className="max-w-[1280px] m-auto px-4 py-8 bg-white overflow-hidden">
            <div className="mb-12 ml-[40px]">
                <div className="max-w-[1180px] flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">Курсы</h2>
                </div>
                {/* <div className="p-4 mb-6 gap-6">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={8}
                        slidesPerView={windowWidth < 422 ? 1 : windowWidth < 768 ? 1.5 : 5.5}
                        loop={true}
                        autoplay={{ delay: 1400, disableOnInteraction: false }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="w-full"
                    >
                        {tags.map((tag, index) => (
                            <SwiperSlide key={index}>
                                <button
                                    onClick={() => {
                                        setActiveTag(tag)
                                        logAction(`Tag ${tag} clicked`)
                                    }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`w-full px-5 py-3 rounded-[16px] text-[18px] font-semibold whitespace-nowrap transition-all duration-300 text-center uppercase shadow-md ${
                                        activeTag === tag
                                            ? "bg-yellow-400 text-black"
                                            : "bg-white text-black"
                                    }`}
                                    style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                                >
                                    {tag}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                </div> */}

                {windowWidth >= 768 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7">
                        {courses.map((course) => (
                            <div key={course.id}>{renderCourseCard(course, logAction, toggleFavorite, favorites, openModal)}</div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-1">
                        {visibleCourses.map((course) => (
                            <div key={course.id}>{renderCourseCard(course, logAction, toggleFavorite, favorites, openModal)}</div>
                        ))}
                        {!showMore && courses.length > 3 && (
                            <div className="mt-4 text-center">
                                <button className="text-gray-500 hover:text-black" onClick={handleShowMore}>
                                    Показать еще
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-6 ml-10 relative bottom-[40px]">
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map((num, index) => (
                        <p
                            key={index}
                            className={`pl-7 pt-2 pb-2 pr-7 rounded-[24px] bg-[rgba(250,250,250,1)] cursor-pointer ${
                                activeIndex === index ? 'text-black' : 'text-[rgba(111,109,115,1)]'
                            }`}
                            onClick={() => handleClick(index)}
                        >
                            {num}
                        </p>
                    ))}
                </div>
                <div className="flex relative right-[37px] top-[10px] flex-none">
                    <img src={left} alt="Left arrow" className="max-w-7xl"/>
                    <img src={right} alt="Right arrow" className="max-w-7xl relative right-[45px]"/>
                </div>
            </div>

            <div className="">
                <button
                    className="bg-black text-white ml-[860px] text-[20px] relative bottom-[120px] rounded-[23px] p-[15px] pl-[120px] pr-[120px] whitespace-nowrap"
                    onClick={() => {
                        handleShowMore()
                        logAction("Main Show more button clicked")
                    }}
                >
                    Показать ещё
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[380px] relative shadow-lg">
                        <img className="absolute top-8 right-7 text-xl font-bold text-black hover:text-gray-600" src={x11} alt=""
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
                                className="bg-black pl-[75px] pr-[80px] text-white px-10 py-4 rounded-[20px] font-semibold text-[16px] hover:bg-gray-800 transition-colors"
                                onClick={() => logAction("Buy Now button clicked")}
                            >
                                Купить сейчас
                            </button>
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                onClick={() => logAction("Heart icon clicked")}
                            >
                                <img className="text-[20px] bg-black  relative left-2 text-white bg-black rounded-[100px] p-4 " src={like11} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const renderCourseCard = (course, logAction, toggleFavorite, favorites, openModal) => {
    const navigate = useNavigate()
    const formatTitle = (title) => {
        const parts = title.split("UX/UI ")
        return (
            <>
                {parts[0]}UX/UI
                <br/>
                {parts[1]}
            </>
        )
    }

    const isFavorite = favorites.includes(course.id)

    return (
        <div
            className="bg-white w-full max-w-[378px] rounded-[25px] border border-gray-100 min-h-[400px] shadow-lg overflow-auto"
            style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
            <div className="relative">
                <div className="aspect-[16/9] relative p-[10px]">
                    <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full rounded-4xl object-cover"
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
                        onClick={()=>{
                            // logAction(`Details button clicked for course ${course.id}`)
                            navigate("/koursdetail/" + course.id)
                        }}
                    >
                        Подробно
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoursesPage