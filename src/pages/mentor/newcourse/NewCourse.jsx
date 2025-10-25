import React, { useState } from 'react';
import './NewCourse.scss';
import { useNavigate } from 'react-router-dom';
import icon14 from '../../../../public/assets/svg/icon14.svg';
import { BsCaretRight } from 'react-icons/bs';
import { toast } from 'react-toastify';

function NewCourse() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        courseName: '',
        description: '',
        price: '',
        courseAudiences: '',
    });

    const [selectedCompanies, setSelectedCompanies] = useState([]);

    const pagesnav = [
        { id: 1, title: 'Данные курса', link: '/newcourse' },
        { id: 2, title: 'Данные курса', link: '/datacourse' },
        { id: 3, title: 'Видео уроки', link: '/videolesson' },
    ];

    const [pagesActive, setPagesActive] = useState('/newcourse');

    const companyList = [
        { id: 1, name: 'Дизайнеры', color: '#23AFCE' },
        { id: 2, name: 'Владельцы интернет проектов', color: '#FABB05' },
        { id: 3, name: 'Frontend Разработчики', color: '#FF6B6B' },
        { id: 4, name: 'Backend Разработчики', color: '#6C63FF' },
    ];

    const handleNext = () => {
        const { courseName, description, price, courseAudiences } = form;

        if (!courseName || !description || !price || !courseAudiences) {
            toast.error('Пожалуйста, заполните все поля!');
            return;
        }

        if (isNaN(price) || +price <= 0) {
            toast.error('Введите корректную стоимость!');
            return;
        }

        localStorage.setItem('step1', JSON.stringify(form));
        navigate('/datacourse');
    };

    const toggleCompany = (company) => {
        const exists = selectedCompanies.some((c) => c.id === company.id);
        let updatedCompanies;

        if (exists) {
            updatedCompanies = selectedCompanies.filter((c) => c.id !== company.id);
        } else {
            updatedCompanies = [...selectedCompanies, company];
        }

        setSelectedCompanies(updatedCompanies);

        // Формируем строку из имён компаний
        const audiencesText = updatedCompanies.map((c) => c.name).join(', ');
        setForm((prev) => ({ ...prev, courseAudiences: audiencesText }));
    };

    return (
        <div className='newcourse'>
            <div className='new'>
                <div className='h'>
                    <img onClick={() => navigate(-1)} src={icon14} alt='icon' />
                    <p>Курс</p>
                </div>
                <button className='save-button' onClick={handleNext}>
                    <span>Далее</span>
                    <span className='arrow-right'>
                        <BsCaretRight />
                    </span>
                </button>
            </div>

            <div className='newdata'>
                <div className='category'>
                    {pagesnav.map((page) => (
                        <button
                            key={page.id}
                            className={page.link === pagesActive ? 'active' : ''}
                        >
                            {page.title}
                        </button>
                    ))}
                </div>

                <div className='name-price'>
                    <div className='name'>
                        <h3>Название курса</h3>
                        <input
                            onChange={(e) =>
                                setForm({ ...form, courseName: e.target.value })
                            }
                            name='courseName'
                            placeholder='Например, Курс по UX/UI'
                            value={form.courseName}
                        />
                    </div>
                    <div className='price'>
                        <h3>Стоимость</h3>
                        <input
                            name='price'
                            type='number'
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            placeholder='Введите стоимость'
                        />
                    </div>
                </div>

                <div className='description'>
                    <h3>Описание</h3>
                    <textarea
                        name='description'
                        value={form.description}
                        onChange={(e) =>
                            setForm({ ...form, description: e.target.value })
                        }
                        placeholder='Подробное описание курса...'
                    />
                </div>

                <div className='for-specials'>
                    <h3>Для кого этот курс</h3>
                    <input
                        name='courseAudiences'
                        value={form.courseAudiences}
                        onChange={(e) => setForm({ ...form, courseAudiences: e.target.value })}
                        readOnly
                        placeholder='например: дизайнеры, разработчики...'
                    />

                </div>

                <div className='company-tags'>
                    {companyList.map((company) => {
                        const isSelected = selectedCompanies.some(
                            (c) => c.id === company.id
                        );
                        return (
                            <small
                                key={company.id}
                                className='company-tag'
                                onClick={() => toggleCompany(company)}
                                style={{
                                    border: `1px solid ${company.color}`,
                                    backgroundColor: isSelected
                                        ? `${company.color}20`
                                        : '#FAFAFA',
                                    color: isSelected ? company.color : '#2D2D2D',
                                    cursor: 'pointer',
                                    padding: '6px 10px',
                                    margin: '5px',
                                    borderRadius: '8px',
                                    display: 'inline-block',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {company.name}
                            </small>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default NewCourse;
