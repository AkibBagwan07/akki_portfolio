import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import styles from './Projects.module.css';

const CarouselLeftNavigation = ({ swiper }) => {
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    const updateState = () => setIsBeginning(swiper.isBeginning);
    swiper.on("slideChange", updateState);
    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNav}>
      {!isBeginning && <FaArrowAltCircleLeft className={styles.Arrow} onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
