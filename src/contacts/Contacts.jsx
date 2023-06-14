import React from 'react';
import styles from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <section className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Контакты</h2>
                <div className={styles.formButtonContainer}>
                    <form>
                        <div >
                            <input className={styles.input}/>
                        </div>
                        <div >
                            <input className={styles.input}/>
                        </div>
                        <div>
                            <textarea className={styles.textarea}></textarea>
                        </div>
                    </form>
                    <button className={styles.button}>Отправить</button>

                </div>
            </div>
        </section>
    );
};

export default Contacts;