import React from 'react';
import styles from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={props.style}>
                    <button className={styles.button} onClick={() => {alert('click')}}>Смотреть</button>
                </div>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>


        </div>
    );
};

export default Project;