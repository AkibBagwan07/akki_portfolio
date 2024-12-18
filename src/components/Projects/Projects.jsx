import React from 'react'
import styles from "./Projects.module.css"
import { projects } from '../../data/constants'

import  { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import CarouselLeft from './leftNav'
import CarouselRight from './rightNav'

const Controls = ({data}) => {
    let swiper = useSwiper();
    console.log(swiper)
    useEffect(() => {
        // swiper.slideTo(0)
    },[data])

    return <></>
}

const Projects = () => {
  return (
      <div id='Projects' className={styles.projectsParent}>
          <p className={styles.title}>Projetcs</p>
          <p className={styles.description}>Explore my portfolio to see a selection of projects that highlight my creativity and technical abilities</p>
      <div className={styles.wrapper}>
        <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
            <Controls data={projects} />
            <CarouselLeft />
            <CarouselRight />
            {projects.map(item => (
              <SwiperSlide>{<img src={item.image} alt="image2" />}</SwiperSlide>
            ))}
        </Swiper>
    </div>

    </div>
  )
}

export default Projects

