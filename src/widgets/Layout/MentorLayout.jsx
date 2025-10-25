import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './MentorProfile.scss';

import { MdMenuBook } from 'react-icons/md';
import { HiMiniBellAlert } from 'react-icons/hi2';
import { TbDeviceTvOld } from 'react-icons/tb';
import { FaChalkboardTeacher, FaUserAlt, FaRegThumbsUp } from 'react-icons/fa';

const navItems = [
  { to: 'students', label: 'Студенты ', Icon: MdMenuBook },
  { to: 'requests', label: 'Запросы', Icon: HiMiniBellAlert },
  { to: 'course', label: 'Мои курсы', Icon: TbDeviceTvOld },
  { to: 'technology', label: 'Мои технологии', Icon: FaChalkboardTeacher },
  { to: 'profile', label: 'Профиль', Icon: FaUserAlt },
  { to: 'reviews', label: 'Отзывы', Icon: FaRegThumbsUp },
];

export default function MentorProfile() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  // Блокируем скролл при открытом меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="mentor-profile">
      {/* Оверлей */}
      {isOpen && <div className="overlay" onClick={toggleSidebar} />}

      {/* Бургер кнопка */}
      <button
        className={`burger-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Сайдбар */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="auth__container__logo">
          <div className="logo">
            <div className="logo__box logo__box--yellow">M</div>
            <div className="logo__box logo__box--dark">M</div>
            <div className="logo__text">
              <div className="logo__text--top">MIND</div>
              <div className="logo__text--bottom">mentor</div>
            </div>
          </div>
        </div>

        <nav className="nav-menu">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <Icon className="nav-icon" />
              {label}
            </NavLink>
          ))}
        </nav>

        <button className="nav-item back-button" onClick={() => navigate('/mentors')}>
          🔙 Назад
        </button>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
