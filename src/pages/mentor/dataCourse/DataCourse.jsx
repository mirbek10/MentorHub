import React, { useState, useEffect } from 'react';
import './DataCourse.scss';
import { Link, useNavigate } from 'react-router-dom';
import icon14 from '../../../../public/assets/svg/icon14.svg';
import icon18 from '../../../../public/assets/svg/icon18.svg';
import icon12White from '../../../../public/assets/svg/icon12white.svg';
import { toast } from 'react-toastify';

function DataCourse() {
    const navigate = useNavigate();
    const [pagesActive] = useState('/datacourse');

    const [form, setForm] = useState({
        point1: '',
        point2: '',
        point3: ''
    });

    // Загружаем данные из localStorage при монтировании
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('step2'));
        if (savedData) {
            setForm({
                point1: savedData.firstPoint || '',
                point2: savedData.twoPoint || '',
                point3: savedData.threePoint || ''
            });
        }
    }, []);

    const pagesnav = [
        { id: 1, title: 'Данные курса', link: '/newcourse' },
        { id: 2, title: 'Данные курса', link: '/datacourse' },
        { id: 3, title: 'Видео уроки', link: '/videolesson' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const { point1, point2, point3 } = form;

        if (!point1 || !point2 || !point3) {
            toast.error('Пожалуйста, заполните все пункты');
            return;
        }

        localStorage.setItem('step2', JSON.stringify({
            firstPoint: form.point1,
            twoPoint: form.point2,
            threePoint: form.point3
        }));

        navigate('/videolesson');
    };

    return (
        <div className='datacourse'>
            <div className='new'>
                <div className='h'>
                    <img
                        onClick={() => navigate(-1)}
                        src={icon14}
                        alt='Назад'
                        className='cursor-pointer'
                    />
                    <p>Курс</p>
                </div>

                <div className='hBtn'>
                    <button className='i'>
                        <Link to='/newcourse'>
                            <img src={icon12White} alt='' />
                        </Link>
                    </button>

                    <button className='b' onClick={handleSubmit}>
                        <span>Далее</span>
                        <img src={icon18} alt='' />
                    </button>
                </div>
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

                <h2>Чему вы научитесь:</h2>

                <div className='list-input'>
                    <div>
                        <h3>Первый пункт</h3>
                        <textarea
                            name='point1'
                            placeholder='Например, научитесь создавать сайты с нуля...'
                            onChange={handleChange}
                            value={form.point1}
                        />
                    </div>

                    <div>
                        <h3>Второй пункт</h3>
                        <textarea
                            name='point2'
                            placeholder='Например, освоите базовый UX анализ'
                            onChange={handleChange}
                            value={form.point2}
                        />
                    </div>

                    <div>
                        <h3>Третий пункт</h3>
                        <textarea
                            name='point3'
                            placeholder='Например, создадите 3 реальных проекта'
                            onChange={handleChange}
                            value={form.point3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataCourse;
