import React from 'react'
import styles from "./body.module.css"
import Hero from './section/hero'

const Body = () => {
  return (
      <div className={styles.bodyParent}>
          <Hero />
      </div>
  )
}

export default Body