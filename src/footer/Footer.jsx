import React from 'react';
import styles from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Лидия Арбекова</h2>
                    <div className={styles.iconsContainer}>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                    </div>
                <span>© 2023 Все права защищены</span>
            </div>
        </footer>
    );
};

export default Footer;