import React, { useEffect, useState } from 'react'
import "./Auth.scss"
import { FaEyeSlash, FaEye, FaApple } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuth.';

function Register() {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [messageValid, setMessageValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Используем хук для регистрации
    const registerMutation = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorEmail("Неверный формат email");
            valid = false;
        } else {
            setErrorEmail('');
        }

        // Валидация пароля
        if (password.length < 6) {
            setErrorPassword("Пароль должен содержать минимум 6 символов");
            valid = false;
        } else {
            setErrorPassword('');
        }

        if (valid) {
            setIsLoading(true);
            
            try {
                // Отправляем данные на сервер
                await registerMutation.mutateAsync({
                    email: email,
                    password: password,
                    // Добавляем роль по умолчанию или можно добавить выбор роли
                    role: 'student' // или 'mentor' - можно добавить селектор
                });
                
                setMessageValid(true);
                
                // Редирект произойдет автоматически в хуке useRegister
                // на основе роли пользователя
                
            } catch (error) {
                // Обработка ошибок от сервера
                console.error('Registration error:', error);
                
                if (error.response?.data?.email) {
                    setErrorEmail(error.response.data.email[0]);
                } else if (error.response?.data?.password) {
                    setErrorPassword(error.response.data.password[0]);
                } else if (error.response?.data?.detail) {
                    setErrorEmail(error.response.data.detail);
                } else {
                    setErrorEmail("Ошибка регистрации. Попробуйте снова.");
                }
            } finally {
                setIsLoading(false);
            }
        } else {
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
                    <form onSubmit={handleSubmit}>
                        {errorEmail && <p className="error-text">{errorEmail}</p>}
                        <input
                            type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errorEmail ? "error" : "" || messageValid ? "valid" : ""}
                            disabled={isLoading}
                        />
                        {errorPassword && <p className="error-text">{errorPassword}</p>}
                        <div>
                            <input
                                type={!show ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={errorPassword ? "error" : "" || messageValid ? "valid" : ""}
                                placeholder='Новый пароль'
                                disabled={isLoading}
                            />
                            <button 
                                type='button' 
                                onClick={() => setShow(!show)}
                                disabled={isLoading}
                            >
                                {!show ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                        <button 
                            type="submit" 
                            disabled={isLoading}
                        >
                            {isLoading ? 'Регистрация...' : 'Подтвердить'}
                        </button>
                    </form>
                    {messageValid && <p className="messege-valid">Вы успешно зарегистрировались!</p>}
                    
                    {/* Показываем ошибки от сервера */}
                    {registerMutation.isError && !errorEmail && !errorPassword && (
                        <p className="error-text">
                            Ошибка регистрации. Попробуйте снова.
                        </p>
                    )}
                </div>
                <div className="auth__container1__down__title">
                    <span onClick={() => navigate("/login")}>Вход</span>
                </div>
            </div>
        </div>
    )
}

export default Register