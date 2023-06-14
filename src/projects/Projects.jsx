import React from 'react';
import styles from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";

const Projects = () => {
    return (
        <section className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Мои проекты</h2>
                <div className={styles.projects}>
                    <Project title={"Социальная сеть"} description={"TypeScript React Yarn классная социальная сеть"}/>
                    <Project title={"ToDoList"} description={"TypeScript React Yarn Jest классный тудулист"}/>

                </div>


            </div>
        </section>
    );
};

export default Projects;