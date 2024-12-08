import React from 'react'
import styles from "./skills.module.css"
import { skills } from '../../../data/constants'

const Skills = () => {
  return (
      <div className={styles.skillsParent}>
          <p className={styles.title}>Skills</p>
          <p className={styles.description}>Showcasing some of the skills i gained in past 3 years</p>
          <div className={styles.skillsContainer}>
              {skills.map((skill,index) => {
                  return <div key={index} className={ styles.skills}>
                      <p className={styles.techTitle}>{skill.title}</p>
                      <div className={ styles.skillItemParent}>
                          {skill.skills.map((skill,index) => 
                          <div key={index} className={ styles.skillItem}>
                              <img alt={skill.name} className={ styles.skillsImage} src={skill.image} />                              
                              <p className={ styles.skillName}>{ skill.name}</p>
                          </div>
                      )}
                      </div>                      
                  </div>
               })}
          </div>
    </div>
  )
}

export default Skills