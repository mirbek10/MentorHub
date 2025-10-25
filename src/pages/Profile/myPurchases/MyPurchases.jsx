import React, { useState } from 'react';
import styles from './MyPurchases.module.scss';
import MyPurchasesCart from "./myPurchases/MyPurchasesCart.jsx";

const MyPurchases = () => {
    const [activeTab, setActiveTab] = useState('active');

    return (
        <div className="container">
            <div className={styles.header}>
                <h2 className={styles.title}>Мои курсы</h2>
                <div className={styles.filter}>
                    <button
                        className={`${styles.btn} ${activeTab === 'active' ? styles.active : ''}`}
                        onClick={() => setActiveTab('active')}
                    >
                        Активные
                    </button>
                    <button
                        className={`${styles.btn} ${activeTab === 'finished' ? styles.active : ''}`}
                        onClick={() => setActiveTab('finished')}
                    >
                        Закончены
                    </button>
                </div>
            </div>

            <div className={styles.cards}>
                <MyPurchasesCart activeTab={activeTab} />
            </div>
        </div>
    );
};

export default MyPurchases;
