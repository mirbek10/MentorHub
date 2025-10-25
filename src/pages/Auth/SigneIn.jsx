import React, { useEffect, useState } from 'react'
import "./Auth.scss"
import { FaEyeSlash, FaEye, FaApple } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function SigneIn() {
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
            <div className="auth__container">
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
                <div className="auth__container__title">
                    <h1>ВХОД</h1>
                    <form onSubmit={handleSubmit}>
                        {errorEmail && <p className="error-text">{errorEmail}</p>}
                        <input
                            type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errorEmail ? "error" : "" || messageValid ? "valid" : ""}
                        />

                            {errorPassword && <p className="error-text">{errorPassword}</p>}
                        <div className="password-field">
                            <input
                                type={!show ? "text" : "password"}
                                placeholder='Пароль'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={errorPassword ? "error" : "" || messageValid ? "valid" : ""}
                            />
                            <button type="button" onClick={() => setShow(!show)}>
                                {!show ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>

                        <button type="submit">Подтвердить</button>
                    </form>
                    {messageValid && <p className="messege-valid">Вы успешно вошли в свой аккаунт!</p>}
                </div>
                <div className="auth__container__down__title">
                    <li onClick={() => navigate("/register")}>Регистрация</li>
                    <li>Забыли пароль?</li>
                    <div>
                        <button><FaApple /></button>
                        <button><AiFillGoogleCircle /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigneIn;
