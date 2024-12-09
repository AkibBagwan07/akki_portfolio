import React from 'react'
import styles from "./Education.module.css"
import { education } from '../../data/constants'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cards from './EducationCard/Cards';

const Education = () => {
    return (
        <div id='Education' className={styles.experienceSection}>
            <p className={styles.title}>Education</p>
            <p className={ styles.lineBeforeEducation}>Driven by a commitment to continuous learning and excellence, my educational journey has equipped me with the skills and knowledge necessary to excel in the tech industry.</p>
            <VerticalTimeline>
                {education.map((education,idx) =>
                    < Cards education={education} index={ idx} />
                )}
            </VerticalTimeline></div>
    )
}
export default Education