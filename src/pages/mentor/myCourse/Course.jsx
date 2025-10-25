import React, { useState } from 'react';
import "./Course.scss";
import { Link } from 'react-router-dom';
// import CourseCard from '../../../components/courseCard/CourseCard.jsx'

// import icon from '../../../assets/svg/icon.svg'
// import iconCopy from "../../../assets/svg/iconCopy.svg";
// import icon2 from "../../../assets/svg/icon2.svg";
// import icon2copy from "../../../assets/svg/icon2copy.svg";
// import icon3 from "../../../assets/svg/icon3.svg";
// import icon3copy from "../../../assets/svg/icon3copy.svg";
// import icon4 from "../../../assets/svg/icon4.svg";
// import icon4copy from "../../../assets/svg/icon4copy.svg";
// import icon5 from "../../../assets/svg/icon5.svg";
// import icon5copy from "../../../assets/svg/icon5copy.svg";
// import icon6 from "../../../assets/svg/icon6.svg";
// import icon6copy from "../../../assets/svg/icon6copy.svg";
import icon7 from "../../../../public/assets/svg/icon7.svg";
import icon8 from "../../../../public/assets/svg/icon8.svg";
// import logOut from "../../../assets/svg/logOut.svg";
import search from "../../../../public/assets/svg/search.svg"
import icon12 from "../../../../public/assets/svg/icon12.svg"
import icon13 from "../../../../public/assets/svg/icon13.svg"

function Course() {
    const [showMyCourses, setShowMyCourses] = useState(false);

    const toggleCourses = () => {
        setShowMyCourses(!showMyCourses);
    };

    return (
        <div className='course'>

            {/* <div className='navSlidebar'>
                <div className='into'>



                    <div className='logo'>
                        <img src="/src/assets/md.svg" alt="logo" />
                    </div>

                    <div className='item'>
                        <div>
                            <img src={icon} alt="" />
                            <img className='img' src={iconCopy} alt="" />
                            <p>Студенты</p>
                        </div>

                        <div>
                            <img src={icon2} alt="" />
                            <img className='img' src={icon2copy} alt="" />
                            <p>Запросы</p>
                        </div>

                        <div onClick={toggleCourses} >
                            <img src={icon3} alt="" />
                            <img className='img' src={icon3copy} alt="" />
                            <p>Мои курсы</p>
                        </div>

                        <div>
                            <img src={icon4} alt="" />
                            <img className='img' src={icon4copy} alt="" />
                            <p>Мои технологии</p>
                        </div>

                        <div>
                            <img src={icon5} alt="" />
                            <img className='img' src={icon5copy} alt="" />
                            <p>Профиль</p>
                        </div>

                        <div>
                            <img src={icon6} alt="" />
                            <img className='img' src={icon6copy} alt="" />
                            <p>Отзывы</p>
                        </div>
                    </div>
                </div>

                <div className='logOut'>
                    <img src={logOut} alt="logout" />
                </div>
            </div>
            <div className='items'>
                <div>
                    <img src={icon} alt="" />
                    <img className='img' src={iconCopy} alt="" />
                    <p>Студенты</p>
                </div>

                <div>
                    <img src={icon2} alt="" />
                    <img className='img' src={icon2copy} alt="" />
                    <p>Запросы</p>
                </div>

                <div onClick={toggleCourses} >
                    <img src={icon3} alt="" />
                    <img className='img' src={icon3copy} alt="" />
                    <p>Мои курсы</p>
                </div>

                <div className='d'>
                    <img src={icon4} alt="" />
                    <img className='img' src={icon4copy} alt="" />
                    <p>Мои технологии</p>
                </div>

                <div>
                    <img src={icon5} alt="" />
                    <img className='img' src={icon5copy} alt="" />
                    <p>Профиль</p>
                </div>

                <div>
                    <img src={icon6} alt="" />

                    <img className='img' src={icon6copy} alt="" />
                    <p>Отзывы</p>
                </div>
            </div> */}

            {/* {showMyCourses && ( */}
                <div className='myPanel'>


                    <div className="myCoursesPanel">
                        <div className='search'>
                            <input
                                type="text"
                                placeholder="Поиск курса"
                            />
                            <img src={search} alt="" />

                        </div>

                        <div className='total'>
                            <button className='btn'>
                                <p>45 всего</p>
                                <Link to="/newcourse">
                                    <img src={icon7} alt="" />
                                </Link>

                            </button>

                            <div className='img'>
                                <img src={icon8} alt="" />
                            </div>
                        </div>


                    </div>
                    {/* <CourseCard /> */}
                    <div className='box'>
                        <div className='btn-box'>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>...</button>
                            <button>12</button>
                        </div>

                        <div className='icon-box'>
                            <button><img src={icon12} alt="" /></button>
                            <button><img src={icon13} alt="" /></button>
                        </div>
                    </div>



                </div>

            {/* )} */}
        </div>
    );
}

export default Course;
