import React from 'react'
import styles from "./hero.module.css"
import { Bio } from '../../../../data/constants'
import Typewriter from "typewriter-effect"
import HeroImage from "../../../../images/IMG_3935.jpeg"
import HeroBgAnimation from "../../../../HeroBgAnimation/HeroBgAnimation"
import { motion } from "framer-motion"
import {headContentAnimation, headContainerAnimation, headTextAnimation } from '../../../../utils/motion' 

const Hero = () => {
  return (
    <motion.div {...headContainerAnimation} id='About' className={styles.heroParent}>
      <motion.div {...headContentAnimation} className={styles.heroAnimationBg}><HeroBgAnimation /></motion.div>
        <div className={styles.heroImageParent}>
        <img className={ styles.heroImage} src={ HeroImage} alt="Akib Bagwan" />
          </div>
        <motion.div {...headTextAnimation} className={styles.infoParent}>
        <p className={styles.name}>Hi, I am <br />{Bio.name}</p>
        <p className={styles.roles}>I am <span>
          <Typewriter options={{
            strings: Bio.roles,
            autoStart: true,
            loop:true
          }}/>
        </span></p>
        <motion.p {...headContentAnimation} className={styles.decription}>{ Bio.description}</motion.p>
        <button className={ styles.resumeBtn}>Check Resume</button>
        </motion.div>
       </motion.div>
  )
}

export default Hero