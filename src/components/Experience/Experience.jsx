import React from 'react'
import styles from "./Experience.module.css"
import { experiences } from '../../data/constants'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cards from './ExperienceCard/Cards';

const Experience = () => {
    return (
        <div id='Experience' className={styles.experienceSection}>
            <p className={styles.title}>Experience</p>
            <VerticalTimeline>
                {experiences.map((experience,idx) =>
                    < Cards experience={experience} index={ idx} />
                )}
            </VerticalTimeline></div>
    )
}
export default Experience