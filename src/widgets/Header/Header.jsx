"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import glaw1 from "../../../public/assets/glaw1.svg";
import glaw2 from "../../../public/assets/glaw2.svg";
import glaw3 from "../../../public/assets/glaw3.svg";
import glaw4 from "../../../public/assets/glaw4.svg";
import md from "../../../public/assets/md.svg";
import { Menu, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import play1 from "../../../public/assets/play1.svg";
// import img from "../../../public/assets/img.svg";
import x11 from "../../../public/assets/x11.svg";
import Logo from "../../shared/Ui/logo/Logo";
import { GoAlert } from "react-icons/go";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("Главная");
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeView, setActiveView] = useState("messages");
  const menuItems = ["Главная", "Курсы", "Менторы", "История"];

  const messages = [
    {
      id: 1,
      name: "Марина Соколова",
      title: "Личная консультация",
      isNew: true,
    },
    {
      id: 2,
      name: "Марина Соколова",
      title: "Курс по UX/UI",
      isNew: true,
    },
    {
      id: 3,
      name: "Платформа для курс и менторов",
      title: "Проект",
      isNew: true,
    },
    {
      id: 4,
      name: "Марина Соколова",
      title: "Личная консультация",
      isNew: true,
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "error",
      title: "Уведомление об ошибке",
      description:
        'К сожалению мы не смогли получить оплату и мы отменили ваш курс "Курс по UX/UI - Марина Соколова"',
      date: "12 ноября",
      time: "12:00",
    },
    {
      id: 2,
      type: "success",
      title: "Успешно!",
      description:
        '"Личная консультация - Марина Соколова" Успешно добавлен в ваш профиль! Напишите ментору для подробной информации',
      date: "12 ноября",
      time: "12:00",
    },
    {
      id: 3,
      type: "success",
      title: "Успешно!",
      description:
        '"Курс по UX/UI - Марина Соколова" Успешно добавлен в ваш профиль',
      date: "12 ноября",
      time: "12:00",
    },
  ];

  const getPath = (item) => {
    switch (item) {
      case "Главная":
        return "/";
      case "Курсы":
        return "/kours";
      case "Менторы":
        return "/mentorpage";
      case "История":
        return "/history";
      default:
        return "/";
    }

  };

  const openPopup = () => {
    setShowPopup(true);
    setActiveView("messages");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderMessagesView = () => {
    return (
      <>
        <div className="flex items-center justify-between p-5">
          <h2 className="text-2xl font-bold">Новое сообщение</h2>
          <img
            className="absolute top-8 right-10 text-xl font-bold text-black hover:text-gray-600"
            src={x11}
            alt=""
            onClick={closePopup}
          />
        </div>

        <div className="flex px-5 mb-5">
          <button
            className="py-2 px-10 mr-3 rounded-2xl font-medium bg-yellow-400 text-black"
            style={{ borderRadius: "10px" }}
          >
            Сообщения
          </button>
          <button
            className="py-2 px-10 font-medium text-black"
            style={{
              borderRadius: "10px",
              backgroundColor: "rgba(250, 250, 250, 1)",
            }}
            onClick={() => setActiveView("notifications")}
          >
            Уведомление
          </button>
        </div>

        <div className="px-5 pb-5">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-gray-50 rounded-xl p-4 mb-4"
              style={{ borderRadius: "16px" }}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-base">Марина Соколова</h3>
                <span className="text-cyan-500 text-sm font-medium">Новое</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-700 text-base font-normal">
                  {message.title}
                </p>
                <div className="text-gray-400">
                  <img src={play1} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderNotificationsView = () => {
    return (
      <>
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center">
            <button onClick={() => setActiveView("messages")} className="mr-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h2 clssName="text-xl font-bold">Уведомление</h2>
          </div>
          <img
            className="absolute top-8 right-10 text-xl font-bold text-black hover:text-gray-600"
            src={x11}
            alt=""
            onClick={closePopup}
          />
        </div>

        <div className="px-5 pb-5">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-gray-50 rounded-xl p-4 mb-3"
            >
              <h3
                className={
                  notification.type === "error"
                    ? "text-red-500"
                    : "text-cyan-500"
                }
              >
                {notification.title}
              </h3>
              <p className="my-2">{notification.description}</p>
              <div className="text-gray-500 text-sm">
                {notification.date} {notification.time}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <header className="w-full bg-white px-4 py-3 mt-[15px] relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="xl:hidden block mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Logo />
        </div>

        <nav className="hidden xl:flex gap-10 text-[19px] font-bold ">
          {menuItems.map((item) => (
            <Link to={getPath(item)} key={item}>
              <button
                onClick={() => {
                  setActiveMenu(item);
                  getPath(item);
                }}
                className={`px-4 py-1.5 rounded transition-colors duration-200 rounded-[10px] ${
                  activeMenu === item
                    ? "bg-black text-white"
                    : "bg-transparent text-black hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ld:gap-4 hidden sm:flex">
          <Link to={"/saved"}>
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <img src={glaw1} alt="calendar" className="w-[35px]" />
            </div>
          </Link>
          <div className="relative bg-black rounded-full w-10 h-10 flex items-center justify-center">
            <img src={glaw2} alt="bell" className="w-[35px]" />
            <span className="absolute top-1 right-1 bg-yellow-400 w-2 h-2 rounded-full" />
          </div>
          <Link to="/details">
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <img src={glaw3} alt="calendar" className="w-[35px]" />
            </div>
          </Link>

          <Link to="/login">
            <img
              src={glaw4 || "/placeholder.svg"}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Мобильное меню (при 768px и меньше) */}
      <div
        className={`xl:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-full left-[50%] translate-x-[-50%] w-[80%] bg-white py-4 z-10`}
      >
        <div className="flex items-center gap-3 ld:gap-4 mb-4 justify-center  sm:hidden">
          <Link to={"/saved"}>
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <img src={glaw1} alt="calendar" className="w-[35px]" />
            </div>
          </Link>
          <div className="relative bg-black rounded-full w-10 h-10 flex items-center justify-center">
            <img src={glaw2} alt="bell" className="w-[35px]" />
            <span className="absolute top-1 right-1 bg-yellow-400 w-2 h-2 rounded-full" />
          </div>
          <Link to="/details">
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <img src={glaw3} alt="calendar" className="w-[35px]" />
            </div>
          </Link>

          <Link to="/register-admin">
            <img
              src={glaw4 || "/placeholder.svg"}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </Link>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.6}
          className="swiper-container w-full overflow-hidden gap-2"
        >
          {menuItems.map((item) => (
            <SwiperSlide
              key={item}
              className=" flex justify-center mr-2"
              style={{ marginRight: "20px", width: "100px" }}
            >
              <Link to={getPath(item)}>
                <button
                  onClick={() => {
                    setActiveMenu(item);
                    // setIsOpen(false);
                    getPath(item);
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded font-semibold transition-colors duration-200 ${
                    activeMenu === item
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 sm:px-0">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={closePopup}
          ></div>
          <div
            className="relative bg-white shadow-lg w-full max-w-[400px] mx-auto overflow-hidden"
            style={{ borderRadius: "24px" }}
          >
            {activeView === "messages"
              ? renderMessagesView()
              : renderNotificationsView()}
          </div>
        </div>
      )}
    </header>
  );
}
