import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css'
import MentorCart from '../Home/ui/Mentor/Mentor-cart/MentorCart'
// import { fetchMentors } from '../../redux/mentorApi/mentorApiSlice'
// import Loading from '../../shared/Loading/Loading'

function MentorList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [windowWidth, setWindowWidth] = useState(1024)
  const [filter, setFilter] = useState('')

  const itemsPerPage = 12
  const swiperRef = useRef(null)
//   const dispatch = useDispatch()
//   const { mentors, error, loading } = useSelector(state => state.mentor)

//   useEffect(() => {
//     dispatch(fetchMentors(filter))
//   }, [dispatch, filter])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const tags = [
    { tagfilter: "#АНАЛИЗЫ", filter: "АНАЛИЗ" },
    { tagfilter: "#FRONTEND", filter: "Frontend Development" },
    { tagfilter: "#BACKEND", filter: "Backend Development" },
    { tagfilter: "#DESIGN", filter: "UI/UX Design" },
    { tagfilter: "#DEVOPS", filter: "DevOps" },
    { tagfilter: "#ТЕСТЕР", filter: "QA" },
    { tagfilter: "#ДЕВЕЛОПЕР", filter: "Developer" },
    { tagfilter: "#АНАЛИЗ", filter: "Data Science" },
    { tagfilter: "#СЕКЬЮРИТИ", filter: "Security" },
    { tagfilter: "#UIUX", filter: "UI/UX Design" },
    { tagfilter: "#ALL", filter: "" }
  ]
  const allProjects = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    img: 'https://s3-alpha-sig.figma.com/img/9f35/4c7d/09d6036a8242be914a62c1764f41d981?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XZCcepBrL5T4J8lgbSXR0XOejVj9c8MsSUsd9taNja2-evom2THztYvmbrxgAlLNgeu7zfEJtoL2FzoIqY3eoHnHj1wYSLk9tV39VH-spMkAau~lTj7G2tkqJNNs47R2Mu6lpJRmaUkn-D~DT~jUz5DvX1Lz9F88~2f-1QAQqsbFmqGXKPvM8LkQFm8Tdd1QmgQI2CT7GuKQiAc4QHt3gIlZth1qp1RtYtxvGdtnaJP1xGb-wE8uawMK3xUHHBnZMOOibDyS14pajIut0FDyi8Css2UeLrddGtIXl1uGOO2EqJ3V1uSLy~LuCmssylZqwzFCCUv50gfEaOT-MNk10Q__',
    name: 'Марина Сополова',
    students: 1200,
    language: 'Русский',
    experience: '3 года',
    company: 'Google',
    specialty: 'Senior UX/UI дизайнер',
    description: 'Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами Figma, After Effects.',
    price: 2000
  }))

  const totalPages = Math.ceil(allProjects.length / itemsPerPage)
  const currentProjects = allProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageClick = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

//   if (error) { return <div>Error: {error.message}</div> }

  return (
    <div className="w-[1180px] mx-auto ">
      <h1 className="text-3xl font-bold my-7 mb-[60px]">Менторы</h1>

      {/* <Swiper
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
            <div
              onClick={() => setFilter(tag.filter)}
              className="w-full px-5 py-3 rounded-[16px] text-[18px] font-semibold whitespace-nowrap text-center uppercase bg-white text-black shadow-md cursor-pointer hover:bg-[#2D2D2D] hover:text-white transition-all duration-300">
              {tag.tagfilter}
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      {/* {
        loading ? (
          <div className="flex justify-center items-center h-screen">
            <Loading />
          </div>
        ) : (
          <> */}
            {allProjects.length === 0 ? (
              <div className="flex justify-center items-center h-300px">
                <h1 className="text-3xl font-bold">Нет менторов</h1>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {allProjects.map((mentor) => (
                  <MentorCart key={mentor.id} mentor={mentor} />
                ))}
              </div>
            )}
          {/* </>
        )
      } */}



      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`px-[10px] py-2 rounded-[32px] w-[62px] h-[42px] rounded-[8px] text-lg font-semibold transition-all ${i + 1 === currentPage ? 'bg-[#FAFAFA] text-black' : 'bg-white text-black'
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

export default MentorList
