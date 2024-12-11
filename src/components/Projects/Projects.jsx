import React from 'react'
import styles from "./Projects.module.css"

const Projects = () => {
  return (
      <div id='Projects' className={styles.projectsParent}>
          <p className={styles.title}>Projetcs</p>
          <p className={styles.description}>Explore my portfolio to see a selection of projects that highlight my creativity and technical abilities</p>
      </div>
  )
}

export default Projects