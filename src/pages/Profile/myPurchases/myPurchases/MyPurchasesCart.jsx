import React, { useState } from 'react';
import styles from './MyPurchasesCart.module.scss';
import { BiSolidMessageRounded } from "react-icons/bi";
import Avatar1 from "../../../../../public/assets/Avatar.svg";

const MyPurchasesCart = () => {
    const colors = ["#E2DBFA", "#E1F3FF", "#FFE0CB"];

    const purchases = [
        {
            id: 1,
            avatar: Avatar1,
            username: "Алия Токтосунова",
            title: "Курс по веб-дизайну в Figma",
            description: "Освой современные подходы к веб-дизайну, научись создавать адаптивные макеты и работать с компонентами в Figma."
        },
        {
            id: 2,
            avatar: Avatar1,
            username: "Эрмек Садыков",
            title: "Полный курс JavaScript с нуля",
            description: "Разберись с основами JavaScript, научись работать с DOM, API и современными фреймворками."
        },
        {
            id: 3,
            avatar: Avatar1,
            username: "Айжан Калыкова",
            title: "Монтаж и цветокоррекция в Adobe Premiere Pro",
            description: "Научись профессионально монтировать видео, работать с эффектами и цветокоррекцией."
        }
    ];

    const [activeIcons, setActiveIcons] = useState({});

    const toggleIcon = (id) => {
        setActiveIcons(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className={`${styles.list} container`}>
            {purchases.map((item, index) => (
                <div
                    key={item.id}
                    className={styles.card}
                    style={{ backgroundColor: colors[index % colors.length] }}
                >
                    <div className={styles.user}>
                        <img src={item.avatar} alt={item.username} className={styles.avatar} />
                        <p className={styles.username}>{item.username}</p>
                        <div
                            className={styles.messageIcon}
                            onClick={() => toggleIcon(item.id)}
                            style={{
                                backgroundColor: activeIcons[item.id] ? "#FFD02C" : "#2D2D2D",
                                color: activeIcons[item.id] ? "#2D2D2D" : "#FAFAFA"
                            }}
                        >
                            <BiSolidMessageRounded />
                        </div>
                    </div>

                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.description}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MyPurchasesCart;
