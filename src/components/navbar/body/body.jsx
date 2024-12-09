import React from 'react'
import styles from "./body.module.css"
import Hero from './section/hero'
import Skills from '../skills/skills'
import Experience from '../../Experience/Experience'
import Education from '../../Education/Education'

const Body = () => {
  return (
      <div className={styles.bodyParent}>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      </div>
  )
}

export default Body