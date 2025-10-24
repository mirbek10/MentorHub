import logo from "../../assets/logo.svg";
import face1 from "../../assets/face1.svg";
import face2 from "../../assets/face2.svg";
import face3 from "../../assets/face3.svg";
import face4 from "../../assets/face4.svg";

const Footer = () => {
    return (
        <footer className="w-full bg-white py-6 border-t border-gray-200">
            <div className="hidden container md:block w-full  mx-auto ">
                <div className="rounded-lg">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg mb-4">Ссылки</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-gray-600">Правила</a></li>
                                <li><a href="#" className="hover:text-gray-600">Лицензия</a></li>
                                <li><a href="#" className="hover:text-gray-600">Обратная связь</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center py-4 mb-6">
                            <div className="flex items-center mb-4">
                                <img src={logo} alt="Логотип"/>
                            </div>
                            <div className="flex space-x-3">
                                <img src={face1} alt="Соцсеть 1"/>
                                <img src={face2} alt="Соцсеть 2"/>
                                <img src={face3} alt="Соцсеть 3"/>
                                <img src={face4} alt="Соцсеть 4"/>
                            </div>
                        </div>

                        <div className="text-right">
                            <h3 className="font-bold text-lg mb-4">Вопросы</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-gray-600">О нас</a></li>
                                <li><a href="#" className="hover:text-gray-600">Частые вопросы</a></li>
                                <li><a href="#" className="hover:text-gray-600">Политика конфиденциальности</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Мобильная версия */}
            <div className="md:hidden px-4">
                <div className="rounded-lg">
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-3">Ссылки</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-600">Правила</a></li>
                                <li><a href="#" className="hover:text-gray-600">Лицензия</a></li>
                                <li><a href="#" className="hover:text-gray-600">Обратная связь</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center py-4 mb-6">
                            <div className="flex items-center mb-4">
                                <img src={logo} alt="Логотип"/>
                            </div>
                            <div className="flex space-x-3">
                                <img src={face1} alt="Соцсеть 1"/>
                                <img src={face2} alt="Соцсеть 2"/>
                                <img src={face3} alt="Соцсеть 3"/>
                                <img src={face4} alt="Соцсеть 4"/>
                            </div>
                        </div>

                        <div className="flex flex-col items-end">
                            <h3 className="font-bold text-lg mb-3">Вопросы</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-600">О нас</a></li>
                                <li><a href="#" className="hover:text-gray-600">Частые вопросы</a></li>
                                <li><a href="#" className="hover:text-gray-600">Политика конфиденциальности</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;