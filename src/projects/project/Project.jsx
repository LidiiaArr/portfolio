import React from 'react';
import styles from "./Project.module.css"
const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.iconContainer}>
            <div className={styles.icon}>
                <button className={styles.button}>Смотреть</button>
            </div>
            </div>
            <h3 >{props.title}</h3>
            <span className={styles.description}>{props.description}</span>


        </div>
    );
};

export default Project;