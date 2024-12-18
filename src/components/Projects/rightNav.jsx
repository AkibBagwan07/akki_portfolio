import { FaArrowAltCircleRight } from "react-icons/fa";
import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import styles from './Projects.module.css'

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd)
        })
    })
  return (
    <div className={styles.rightNav}>
        {!isEnd && <FaArrowAltCircleRight onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation