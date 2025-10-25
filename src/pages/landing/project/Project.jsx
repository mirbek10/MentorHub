import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ProjectCart from '../../../shared/Ui/ProjectCard/ProjectCard'

function Project() {
  const [currentPage, setCurrentPage] = useState(1)
  const [windowWidth, setWindowWidth] = useState(1024)
  const itemsPerPage = 12
  const swiperRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const tags = [
    "#АНАЛИЗЫ", "#FRONTEND", "#BACKEND", "#DESIGN", "#DEVOPS",
    "#ТЕСТЕР", "#ДЕВЕЛОПЕР", "#АНАЛИЗ", "#СЕКЬЮРИТИ", "#UIUX",
  ]

  const allProjects = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Проект ${i + 1}`,
    rating: 4.5,
    language: 'Русский',
    experience: '3 года',
    company: 'Google',
    specialty: 'Senior UX/UI дизайнер',
    description: 'Краткое описание проекта...',
    price: 2000,
    specialists: ['Дизайнеры', 'Frontend Разработчики', 'Backend Разработчики'],
  }))

  const totalPages = Math.ceil(allProjects.length / itemsPerPage)
  const currentProjects = allProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageClick = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold my-8 mb-[60px]">Проекты</h1>

      {/* Свайпер для тегов */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={8}
        slidesPerView={windowWidth < 768 ? 1.5 : 5.5}
        loop
        autoplay={{ delay: 1400, disableOnInteraction: false }}
        onSwiper={swiper => (swiperRef.current = swiper)}
        className="w-full mb-6"
      >
        {tags.map((tag, index) => (
          <SwiperSlide key={index}>
            <div className="w-full px-5 py-3 rounded-[16px] text-[18px] font-semibold whitespace-nowrap text-center uppercase bg-white text-black shadow-md">
              {tag}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-1 mt-[40px] sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {currentProjects.map(project => (
          <ProjectCart key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`px-[10px] py-2 rounded-[32px] w-[62px] h-[42px] rounded-[8px] text-lg font-semibold transition-all ${
                i + 1 === currentPage ? 'bg-[#FAFAFA] text-black' : 'bg-white text-black'
              } hover:bg-[#2D2D2D] hover:text-white`}
            >
              {i + 1}
            </button>
          ))}
 <button
            onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1  rounded-[32px] w-[62px] h-[42px] bg-[#2D2D2D] text-white shadow-lg  "
          >
            ←
          </button>
          <button
            onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1  rounded-[32px] w-[62px] h-[42px] bg-[#2D2D2D] text-white"
          >
            →
          </button>
          
        </div>
        <div>
          <button className="w-[380px] h-[64px] bg-[#2D2D2D] text-white rounded-full font-semibold ">
            Показать еще
          </button>
        </div>
      </div>
    </div>
  )
}

export default Project
