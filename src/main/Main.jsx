import React from 'react';
import styles from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"
const Main = () => {
    return (
        <section className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.photo}></div>

                <div className={styles.text}>
                    <span>👋 Привет</span>
                    <h1>Я Лидия Арбекова</h1>
                    <p>Frontend developer</p>
                </div>
            </div>
        </section>
    );
};

export default Main;