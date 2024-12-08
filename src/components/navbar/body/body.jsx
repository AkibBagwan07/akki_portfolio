import React from 'react'
import styles from "./body.module.css"
import Hero from './section/hero'
import Skills from '../skills/skills'

const Body = () => {
  return (
      <div className={styles.bodyParent}>
      <Hero />
      <Skills/>
      </div>
  )
}

export default Body