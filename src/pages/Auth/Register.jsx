import React, { useEffect, useState } from 'react'
import "./Auth.scss"
import { FaEyeSlash, FaEye, FaApple } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [messageValid, setMessageValid] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorEmail("Неверный формат email");
            valid = false;
        } else {
            setErrorEmail('');
        }

        if (password.length < 6) {
            setErrorPassword("Пароль должен содержать минимум 6 символов");
            valid = false;
        } else {
            setErrorPassword('');
        }

        if (valid) {
            console.log("Submit data:", { email, password });
            setMessageValid(true);

        }else{
            setMessageValid(false);
        }
        
    }
    
    useEffect(() => {
        if (messageValid) {
            const timer = setTimeout(() => {
                setMessageValid(false);
            }, 6000); 

            return () => clearTimeout(timer); 
        }
    }, [messageValid]);
    return (
        <div className="auth">
            <div className="auth__container1">
                <div className="auth__container1__logo">
                    <div className="logo">
                        <div className="logo__box logo__box--yellow">M</div>
                        <div className="logo__box logo__box--dark">M</div>
                        <div className="logo__text">
                            <div className="logo__text--top">MIND</div>
                            <div className="logo__text--bottom">mentor</div>
                        </div>
                    </div>
                </div>
                <div className="auth__container1__title">
                    <h1>РЕГИСТРАЦИЯ</h1>
                    <form action="">
                        {errorEmail && <p className="error-text">{errorEmail}</p>}
                        <input
                            type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errorEmail ? "error" : "" || messageValid ? "valid" : ""} />
                        {errorPassword && <p className="error-text">{errorPassword}</p>}
                        <div>
                            <input
                                type={!show ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={errorPassword ? "error" : "" || messageValid ? "valid" : ""}
                                placeholder='Новый пароль' />
                            <button type='button' onClick={() => setShow(!show)}>{!show ? <FaEye /> : <FaEyeSlash />}</button>
                        </div>
                        <button onClick={handleSubmit}>Подвердить</button>
                    </form>
                    {messageValid && <p className="messege-valid">Вы успешно зарегистрировались!</p>}
                </div>
                <div className="auth__container1__down__title">
                    <span onClick={() => navigate("/login")}>Вход</span>
                   
                </div>

            </div>
        </div>
    )
}

export default Register