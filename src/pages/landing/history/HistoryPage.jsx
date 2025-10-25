"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import down1 from "../../../../public/assets/down1.svg"
import mentor2 from "../../../../public/assets/mentor2.svg"
import mentor3 from "../../../../public/assets/mentor3.svg"
import mentor4 from "../../../../public/assets/mentor4.svg"
import mentor22 from "../../../../public/assets/mentor22.svg"

const HistoryPage = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
        console.log(`Page number ${index + 1} clicked`)
    }

    const handleShowMore = () => {
        console.log("Показать ещё нажато")
    }

    return (
        <div className="container w-full max-w-screen-xl mx-auto ">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-bold">Ваши заказы</h2>
                    <p className="text-gray-500 mt-6">12.02.25</p>
                </div>
                <div className="flex items-center gap-2 mt-[55px]">
                    <img src={down1 || "/placeholder.svg"} alt="" className="w-4 h-4"/>
                    <span className="text-gray-500">Сортировка</span>
                </div>
            </div>

            <div className="space-y-4">
                <div className="py-4 bg-gray-50 pr-3 pl-3 rounded-2xl">
                    <div className="flex gap-4">
                        <img src={mentor2 || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full"/>
                        <div className="flex-1">
                            <p>Личная консультация,проверка 2–3 проектов,советы по ошибкам и план развитие ваших
                                навыков</p>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500">Технология</span>
                                <span className="text-gray-500">3000 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 pr-3 pl-3 rounded-2xl bg-gray-50">
                    <div className="flex gap-4">
                        <img src={mentor3 || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full"/>
                        <div className="flex-1">
                            <p>Курс по UX/UI</p>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500">Курс</span>
                                <span className="text-gray-500">3000 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 bg-gray-50 pr-3 pl-3 rounded-2xl">
                    <div className="flex gap-4">
                        <img src={mentor4 || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full"/>
                        <div className="flex-1">
                            <p>Личная консультация,проверка 2–3 проектов,советы по ошибкам и план развитие ваших
                                навыков</p>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500">Технология</span>
                                <span className="text-gray-500">3000 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 bg-gray-50 pr-3 pl-3 rounded-2xl">
                    <div className="flex gap-4">
                        <img src={mentor22 || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full"/>
                        <div className="flex-1">
                            <p>Платформа для курс и менторов</p>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500">Проект</span>
                                <span className="text-gray-500">3000 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-gray-500 py-2">12.02.25</div>

                <div className="py-4 bg-gray-50 pr-3 pl-3 rounded-2xl">
                    <div className="flex gap-4">
                        <img src={mentor2 || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full"/>
                        <div className="flex-1">
                            <p>Личная консультация,проверка 2–3 проектов,советы по ошибкам и план развитие ваших
                                навыков</p>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500">Технология</span>
                                <span className="text-gray-500">3000 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 bg-gray-50 pr-3 pl-3 rounded-2xl">
                    <div className="flex gap-4">
                        <img src={mentor3 || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full"/>
                        <div className="flex-1">
                            <p>Курс по UX/UI</p>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500">Курс</span>
                                <span className="text-gray-500">3000 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex gap-2 items-center">
                    {[1, 2, 3, 4].map((page) => (
                        <button
                            key={page}
                            onClick={() => handleClick(page - 1)}
                            className={`h-10 px-6 flex items-center justify-center rounded-3xl  transition-colors duration-150 focus:outline-none
          ${
                                activeIndex === page - 1
                                    ? " text-black bg-gray-100  border border-gray-300"
                                    : " bg-gray-100 text-gray-500 "

                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className="h-10 px-5 flex items-center justify-center rounded-full bg-black text-white ml-2 focus:outline-none active:!bg-black"
                        onClick={() => activeIndex > 0 && handleClick(activeIndex - 1)}
                    >
                        <ChevronLeft size={18}/>
                    </button>

                    <button
                        className="h-10 px-5 flex items-center justify-center rounded-full bg-black text-white focus:outline-none active:!bg-black"
                        onClick={() => activeIndex < 3 && handleClick(activeIndex + 1)}
                    >
                        <ChevronRight size={18}/>
                    </button>
                </div>



            <button
                className="bg-black text-white px-[110px] py-3 rounded-full text-[16px] font-medium transition-all hover:bg-gray-800 w-full sm:w-auto"
                onClick={handleShowMore}
            >
                Показать ещё
            </button>
        </div>
</div>
)
}

export default HistoryPage
