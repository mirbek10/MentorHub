import React, { useEffect } from 'react';
import './ProfileMentor.scss';
import { BsBuildings } from "react-icons/bs";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector,  } from 'react-redux';
// import { GetMentorPanel } from "../../mentor/mentorProfileComponents/ProfileMentor.jsx";


const ProfileMentor = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { mentorPanel, loading, error } = useSelector((state) => state.panelMentor);    
    // useEffect(()=> {
    //     dispatch(GetMentorPanel())
    // }, [dispatch])

    
// const el = mentorPanel
    // if (error) return <div>Ошибка: {error.message}</div>;
    return (
        // loading && <Loading/> ||
        <div className="container-profile">


            <section className="profile">
                <div className='profile__up'>

                    <div className="profile__avatar">
                        <img src="https://picsum.photos/570/340" alt="Avatar" />
                        <button type="button" aria-label="Play video">▶</button>
                    </div>

                    <div className="profile__info">
                        <div className="profile__info-photo">
                            <h1> fghjk</h1>
                            <img src={''} alt="" />
                        </div>


                        <div className="profile__info-stats stats">

                            <p>
                                 <span>445 оценок</span>
                            </p>
                            <div>
                                <p>студентов</p>
                                <p></p>

                            </div>

                            <p className="status">
                                Статус:  <span><AiFillExclamationCircle /></span>
                            </p>
                        </div>
                        <div className="info-buttons">
                            <button>Статус</button>
                            <button onClick={() => navigate('/ChangeInfoMentor')}>
                                <FaPencilAlt />
                            </button>
                        </div>

                    </div>
                </div>
                <div className='profile__down'>

                    <div className="profile__details">
                        <h1>Данные ментора</h1>
                        <div className="tags-profile">
                            <span className="tag">Опыт </span>
                            <span className="tag">Работает в </span>
                            <span className="tag"> Специалисть </span>
                        </div>

                        <div className="work">
                            <h1>
                                работы
                            </h1>
                            <div>
                                {/* {
                                    el.workplaceOld?.map((item, index) => (
                                        <div className="company" key={index}>
                                            <BsBuildings className="company-icon" />
                                            <p>{item}</p>
                                        </div>
                                    ))
                                } */}
                               
                            </div>
                        </div>
                    </div>

                    <div className="profile__desc">
                        <h1>Описание</h1>
                        <p>
                        hbb    {/* {el.descriptionAboutMentor} */}
                        </p>
                    </div>
                </div>

            </section>


        </div>
    );
};

export default ProfileMentor;
