import React, { useState } from 'react'
import styles from "./navbar.module.css"
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Bio } from '../../data/constants';

const Navbar = () => {
    const [menuIsOpen,setMenuIsOpen] = useState(false)
  return (
      <div className={ styles.navbarParent}>
          <div className={ styles.logo}><a href='/'>Portfolio</a></div>
          <div className={styles.infoBtns}>
              <a href='#About'>About</a>
              <a href='#Skills'>Skills</a>
              <a href='#Experience'>Experience</a>
              <a href='#Projects'>Projects</a>
              <a href='#Education'>Education</a>
          </div>
          <div className={styles.socialPlatformsBtn}>
              <a href={Bio.github} target='_Blank'><IoLogoGithub className={styles.githubIcon} /></a>
              <a href={Bio.linkedin} target='_Blank'><FaLinkedin className={styles.linkedinIcon} /></a>
              {/* <a href={Bio.github} target='_Blank'><BiLogoGmail className={styles.gmailIcon} /></a> */}
              <IoMdMenu onClick={()=>setMenuIsOpen(!menuIsOpen)} className={styles.menubar} />
              {menuIsOpen && <div><div className={ styles.infoBtnsMobile}>
              <a href='#About'>About</a>
              <a href='#Skills'>Skills</a>
              <a href='#Experience'>Experience</a>
              <a href='#Projects'>Projects</a>
              <a href='#Education'>Education</a>
              </div>
                  <div className={styles.mobileSocialLinks}>
                  <a href={Bio.github} target='_Blank'><IoLogoGithub className={styles.githubIconForMobile} /></a>
                  <a href={Bio.linkedin} target='_Blank'><FaLinkedin className={styles.linkedinIconForMobile} /></a>
                  </div>
              </div>}
          </div>
    </div>
  )
}

export default Navbar