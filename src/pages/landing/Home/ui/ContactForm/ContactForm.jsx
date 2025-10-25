import React from 'react';
import './ContactForm.css';
import Img from '../../../../../../public/assets/images/img.png';
import Vector from '../../../../../../public/assets/icons/vector-icon.svg';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <div className="contact-form__image">
                <img src={Img} alt="Контакт картинка"/>
            </div>

            <div className="contact-form__content">
                <h2 className="contact-form__title">
                    Если есть вопросы — оставьте заявку и мы перезвоним вам
                </h2>

                <div className="contact-form__inputs-row">
                    <input type="text" placeholder="Ваше имя" className="contact-form__input"/>
                    <input type="text" placeholder="Ваш номер" className="contact-form__input"/>
                </div>

                <div className="contact-form__inputs-column">
                    <input type="text" placeholder="Ваш вопрос"/>
                    <div className="contact-form__icon">
                        <img src={Vector} alt="Send icon"/>
                    </div>
                </div>
            </div>
        </div>);
};

export default ContactForm;
