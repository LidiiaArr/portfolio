import React from 'react';
import styles from "./Remote.module.css"
import styleContainer from "../common/styles/Container.module.css";

const Remote = () => {
    return (
        <div className={styles.remoteBlock}>
            <div className={`${styleContainer.container} ${styles.remoteContainer}`}>
                <h2 className={styles.title}>Рассматриваю варианты удаленной работы или в офисе в Москве</h2>
                <button className={styles.button}>Нанять меня</button>
            </div>
        </div>
    );
};

export default Remote;