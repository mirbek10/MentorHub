import React from 'react';
import smile from '../../../../../../../public/assets/img/Smile_rating.svg';
import { IoHeartSharp } from "react-icons/io5";
import { SlControlPlay } from "react-icons/sl";
import './style.scss';
import { Link } from 'react-router-dom';

const MentorCart = ({ mentor }) => {
  return (
    <div className='mentor-cart'>
      <div className='mentor-logo'>
        <button className='mentor-rating'>
          {(mentor.reviewsCount || 0)} <img src={smile} alt="Рейтинг" className="pt-[1px]" />
        </button>

        <div className="images-container">
          <img
            src={mentor.img}
            alt={`Ментор ${mentor.name}`}
            className="mentor-img"
            loading="lazy"
          />
        </div>

        <div className="mentor-btn">
          <button aria-label="Просмотреть">
            <SlControlPlay />
          </button>
          <button aria-label="Добавить в избранное">
            <IoHeartSharp />
          </button>
        </div>
      </div>

      <div className='item-m-cart'>
        <h3>{mentor.firstName} {mentor.secondName}</h3>
        <p> отзывов • рейтинг {mentor.avgRating }</p>

        <div className='opyt'>
          <div><h4>Опыт {mentor.workExperience}</h4></div>
          <div><h4>Работает в ID {mentor.id}</h4></div>
        </div>

        <div className='spec'>
          <h4>{mentor.specialty}</h4>
        </div>

        <p className='mentor-textp'>
          Описание недоступно
        </p>

        <div className='btn-price'>
        <p className="project-price">{mentor.price} <span>C</span> </p>
         <Link to={'/mentor-detail'}><button>Технологии</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default MentorCart;
