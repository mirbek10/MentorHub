import React from 'react';
import Nazz from "../../assets/nazz.svg";
import kkk from "../../assets/kkk.svg";
import { useNavigate } from 'react-router-dom';
import boy from "../../assets/boy.svg";
import bilbeim from "../../assets/bilbeim.svg";
import adam from "../../assets/adam.svg";
import girl from "../../assets/girl.svg";
import xxx from "../../assets/xxx.svg"
import izi from "../../assets/izi.svg"
const Pokupka = () => {
    const navigate = useNavigate();

    const items = [
        {
            img: boy,
            title: "Курс по UX/UI",
            author: "Марина Сополова",
            price: "2000c",
            type: "Курс"
        },
        {
            img: bilbeim,
            title: "Платформа для курс и менторов",
            author: "Марина Сополова",
            price: "2000c",
            type: "Проект"
        },
        {
            img: adam,
            title: "Личная консультация, проверка 2–3 проектов, советы по o...",
            author: "Марина Сополова",
            price: "2000c",
            type: "Технология"
        },
        {
            img: girl,
            title: "Курс по UX/UI",
            author: "Марина Сополова",
            price: "2000c",
            type: "Курс"
        }
    ];

    return (
        <div className='container'>
            <div className='flex items-center'>
                <div
                    className='flex items-center text-[#000000] cursor-pointer'
                    onClick={() => navigate(-1)}
                >
                    <img className='w-[24px] h-[24px] mt-[10px]' src={Nazz} alt="назад" />
                    <h3 className='font-bold text-[20px] ml-[20px] mt-[10px]'>Назад</h3>
                </div>

                <div className='flex items-center mt-4'>
                    <h3 className='text-[#CFCFCF] text-[16px] font-medium ml-[30px]'>Главный</h3>
                    <img className='w-[24px] h-[24px] ml-[10px]' src={kkk} alt="стрелка" />
                    <h4 className='text-[12px] font-medium ml-[10px]'>Корзина</h4>
                </div>
            </div>

            <div className='flex gap-[80px]'>
                <div className="px-4 py-6">
                    <h1 className="text-[28px] font-bold mb-6">Ваши заказы</h1>

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4  rounded-[16px] w-full max-w-[681px] h-auto mb-4"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[90px] h-[90px] object-cover rounded-[12px]"
                            />
                            <div className="flex-1">
                                <p className="text-[18px] font-semibold truncate">{item.title}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[16px] font-medium">{item.author}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[16px] font-semibold te">{item.price}</p>
                                        <button className=" text-black w-[32px] h-[32px] rounded-full text-[20px] leading-none">
                                            <img src={xxx} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-[16px] font-medium text-gray-600 mt-1">{item.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
                

                <div className='w-[419px] h-auto bg-[#FAFAFA] mt-[20px] rounded-[24px] p-6 '>
                    <h2 className='text-[24px] font-bold mb-4'>Оплата</h2>

                    <label className='block text-[16px] font-medium mb-2'>Номер карты</label>
                    <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-[359px] h-[54px] px-4 rounded-[12px] border border-[#7357FF] focus:outline-none focus:ring-2 focus:ring-[#7357FF] text-[16px]"
                    />

                    <div className='flex gap-4 mt-4'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-[16px] font-medium mb-2'>Срок действия</label>
                            <input
                                type="text"
                                placeholder="MM/ГГ"
                                className="h-[54px] w-[167px] px-4 rounded-[16px] border border-[#7357FF] focus:outline-none focus:ring-2 focus:ring-[#7357FF] text-[16px]"
                            />
                        </div>

                        <div className='flex flex-col w-1/2'>
                            <label className='text-[16px] font-medium mb-2 flex items-center gap-2'>
                                CVV2
                                <img src={izi} alt="подсказка" className="w-4 h-4 ml-[100px]" />
                            </label>
                            <input
                                type="text"
                                placeholder="***"
                                className="h-[54px] w-[167px] rounded-[16px] px-4 border  border-[#7357FF] focus:outline-none focus:ring-2 focus:ring-[#7357FF] text-[16px]"
                            />
                        </div>

                    </div>

                    <div className="flex items-center gap-2 cursor-pointer mt-[30px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 18V6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18Z"
                                fill="#FFD02C"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.5018 2.44254C22.8096 2.71963 22.8346 3.19385 22.5575 3.50173L13.8199 13.0991C12.8454 14.1819 11.1955 14.3168 10.0579 13.4068L6.53151 10.5857C6.20806 10.3269 6.15562 9.85493 6.41438 9.53149C6.67313 9.20804 7.1451 9.1556 7.46855 9.41436L10.995 12.2355C11.512 12.6492 12.262 12.5878 12.705 12.0956L21.4426 2.49828C21.7197 2.1904 22.1939 2.16544 22.5018 2.44254Z"
                                fill="#2d2d2d"
                            />
                        </svg>

                        <p className="text-[16px] font-medium">Сохранить данные для следующего раза</p>
                    </div>
                    <div>
                        <div>
                            <h1 className='font-bold  mt-[30px] text-[18px] text-[#6F6D73]'> Общая сумма <span className='  font-bold  text-[18px]  ml-[180px] text-black'>8000c</span></h1>
                        </div>

                        <button className='bg-[#2D2D2D] w-[359px] h-[54px] text-white rounded-[24px] mt-[30px]'>Оплатить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokupka;