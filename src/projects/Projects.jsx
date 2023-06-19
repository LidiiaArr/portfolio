import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/Title';
import todoImage from '../assets/image/project1.jpg';
import socialImage from './../assets/image/project2.jpg';

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
//интерполяция ${}
    };

    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <section className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                {/*<div className={styles.title}>*/}
                {/*    <h2 className={styles.title}>Мои проекты</h2>*/}
                {/*</div>*/}
                <Title text={'Мои проекты'}/>
                <div className={styles.projects}>
                    <Project style={social} title={"Социальная сеть"} description={"TypeScript React Yarn классная социальная сеть"}/>
                    <Project style={todolist} title={"ToDoList"} description={"TypeScript React Yarn Jest классный тудулист"}/>
                </div>


            </div>
        </section>
    );
};

export default Projects;

//псевдоэлементы это элементы которых нет в коде но они есть в css (сделаны cccом)