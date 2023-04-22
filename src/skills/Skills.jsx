import React from 'react';
import styles from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Скиллы</h2>
                <div className={styles.skills}>
                    <Skill title={"JS"} description={"Lorem jyfvj yhfj jhygkj ghkg jyg j g kgkug jfjf jyfg ytfgjkf gkug dfgvbk dfjgvbk"}/>
                    <Skill title={"CSS"} description={"Lorem jyfv jyhfj jhygkjg hkg jyg j gkg kug jfj jyfg ytfgjk fgkug fgbdfgblf ufgifuhi dfghdkf ughdkufg"}/>
                    <Skill title={"React"} description={"Lorem jyf vjyhfj jhygkjg hkg jygjg kgkug jfjfjyfg dfgdf dug diug ytfgj kfgkug"}/>
                    <Skill title={"JS"} description={"Lorem jyfvj yhfj jhygkj ghkg jyg j g kgkug jfjf jyfg ytfgjkf gkug dfgvbk dfjgvbk"}/>
                    <Skill title={"CSS"} description={"Lorem jyfv jyhfj jhygkjg hkg jyg j gkg kug jfj jyfg ytfgjk fgkug fgbdfgblf ufgifuhi dfghdkf ughdkufg"}/>
                    <Skill title={"React"} description={"Lorem jyf vjyhfj jhygkjg hkg jygjg kgkug jfjfjyfg dfgdf dug diug ytfgj kfgkug"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;