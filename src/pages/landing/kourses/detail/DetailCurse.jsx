import React from 'react';
import Star from "../../../../../public/assets/icons/star.svg";
import Avatar from "../../../../../public/assets/Avatar.svg";
import ShareIcon from "../../../../../public/assets/icons/share-icon.svg";
import LoveIcon from "../../../../../public/assets/icons/love.svg";
import Icon from "../../../../../public/assets/icons/icon2.svg";
// import Courses1 from "../Corses1/Courses1.jsx";

const CourseDetail = () => {
    return (
        <div className="container px-4 md:px-6 lg:px-0">
            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] mt-[40px] md:mt-[60px] mb-[30px] md:mb-[40px]">
                Курс по дизайну UX/UI Figma,Affter Effect
            </h3>

            <div className="flex flex-col lg:flex-row justify-between items-center mb-[60px] gap-6">
                <div className="w-full lg:w-[567px] bg-[rgb(45,45,45)] rounded-[24px] p-[20px] md:p-[30px] text-white">
                    <div className="flex justify-between items-center mb-[20px] md:mb-[28px]">
                        <p className="text-[16px] md:text-[18px] font-[700]">Курс</p>
                        <div className="flex items-center gap-[8px] md:gap-[16px]">
                            <p className="text-[14px] font-[500] text-[rgb(207,207,207)]">445 оценок</p>
                            <p className="text-[16px] md:text-[18px] font-[700]">4.5</p>
                            <img src={Star} alt="star"/>
                        </div>
                    </div>

                    <div className="flex justify-between mb-[20px] md:mb-[28px]">
                        <p className="text-[16px] md:text-[18px] font-[700]">Ментор</p>
                        <div className="flex gap-[8px] md:gap-[16px] items-center">
                            <p className="text-[14px] md:text-[16px] font-[600]">Марина Сополова</p>
                            <p className="text-[16px] md:text-[18px] font-[700]">4.9</p>
                            <img src={Star} alt="star"/>
                            <img className="w-[28px] md:w-[36px]" src={Avatar} alt="avatar"/>
                        </div>
                    </div>

                    <div className="flex justify-between mb-[20px] md:mb-[28px]">
                        <p className="text-[16px] md:text-[18px] font-[700]">Цена</p>
                        <h3 className="text-[20px] md:text-[24px] font-[700]">2000 С</h3>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row justify-between mb-[20px] md:mb-[28px] text-[14px] font-[500] text-[rgb(207,207,207)] gap-2">
                        <p> Последнее обновление: 09.2024</p>
                        <div className="flex items-center gap-[12px]">
                            <p>1200 студентов</p>
                            <p>Русский</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-4 flex-wrap sm:flex-nowrap">
                        <img className="ml-[10px] md:ml-[30px] cursor-pointer" src={ShareIcon} alt="icon"/>
                        <img className="cursor-pointer" src={LoveIcon} alt="icon"/>
                        <button
                            className="w-full sm:w-[250px] md:w-[355px] h-[50px] md:h-[64px] text-[16px] md:text-[20px] font-[700] bg-[rgb(250,250,250)] text-black shadow-[0px_10px_32px_-4px_rgba(24,39,75,0.1),0px_6px_14px_-6px_rgba(24,39,75,0.12)] rounded-[24px]">
                            Купить сейчас
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-[582px] h-[200px] md:h-[300px] lg:h-[341px] bg-gray-200 rounded-[24px]">
                    <video
                        src="/videos/ui-figma.mp4"
                        controls
                        className="w-full h-full rounded-[24px] object-cover"
                        poster="/images/preview.png"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mb-[60px] md:mb-[80px] gap-10">
                <div className="flex-1">
                    <h3 className="text-[20px] md:text-[24px] font-[700] mb-[20px] md:mb-[30px]">Чему вы научитесь</h3>
                    <ul className="w-full md:w-[554px] pl-0">
                        <li className="relative pl-4 mb-[16px] md:mb-[20px] text-[16px] font-[400] leading-[24px] tracking-[0px]">
                            <span className="absolute left-0 top-0 transform -translate-x-1/2">•</span>
                            Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами как
                            Figma, After Effects. Сделаем 3 полноценных проекта для вашего портфолио
                        </li>
                        <li className="relative pl-4 mb-[16px] md:mb-[20px] text-[16px] font-[400] leading-[24px] tracking-[0px]">
                            <span className="absolute left-0 top-0 transform -translate-x-1/2">•</span>
                            Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами как
                            Figma, After Effects. Сделаем 3 полноценных проекта для вашего портфолио
                        </li>
                        <li className="relative pl-4 mb-[24px] md:mb-[40px] text-[16px] font-[400] leading-[24px] tracking-[0px]">
                            <span className="absolute left-0 top-0 transform -translate-x-1/2">•</span>
                            Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами как
                            Figma, After Effects.
                        </li>
                    </ul>

                    <h3 className="text-[20px] md:text-[24px] font-[700] mb-[20px] md:mb-[30px]">Для кого этот курс</h3>

                    <div className="w-full md:w-[545px] flex flex-wrap gap-[10px] text-[16px] font-[500]">
                        <div className="border border-black rounded-[16px] py-[8px] px-[20px]">Дизайнеры</div>
                        <div className="border border-[rgb(35,175,206)] rounded-[16px] py-[8px] px-[20px]">Владельцы
                            интернет проектов
                        </div>
                        <div className="border border-[rgb(255,208,44)] rounded-[16px] py-[8px] px-[20px]">Frontend
                            Разработчики
                        </div>
                        <div className="border border-[rgb(204,255,215)] rounded-[16px] py-[8px] px-[20px]">Frontend
                            Разработчики
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-[20px] md:text-[24px] font-[700] mb-[20px] md:mb-[30px]">Данные курса</h3>
                    <div
                        className="flex flex-col sm:flex-row gap-[10px] md:gap-[20px] text-[rgb(111,109,115)] mb-[20px] md:mb-[30px]">
                        <p>22 раздела</p>
                        <p>22 лекций</p>
                        <p>21 ч 39 мин общая продолжителность</p>
                    </div>

                    <button
                        className="flex items-center gap-[12px] md:gap-[16px] text-[16px] font-[600] bg-[rgb(255,208,44)] px-[16px] py-[12px] md:py-[14px] rounded-[12px] mb-[30px] md:mb-[40px]">
                        Учебный план <img src={Icon} alt=""/>
                    </button>

                    <h3 className="text-[20px] md:text-[24px] font-[700] mb-[20px]">Описание</h3>

                    <div className="w-full md:w-[575px]">
                        <p className="text-[16px] font-normal leading-[24px] tracking-[0px]">
                            Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как
                            Figma,Affter Effect.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как
                            создавать сайты с нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для
                            вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами
                            как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с
                            нуля. Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашегоВы узнаете в
                            этом курсы,как создавать сайты с нуля.Научитесь работать програмами.Сделаем 3 полноценных
                            проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать
                            програмами как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как
                            создавать сайты с нуля.Научитесь работать програмами.
                        </p>
                    </div>
                </div>
            </div>

            {/*<div className="-ml-0 lg:-ml-[50px]">*/}
            {/*    <Courses1/>*/}
            {/*</div>*/}
        </div>
    );
};

export default CourseDetail;
