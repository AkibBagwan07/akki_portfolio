import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Projects.module.css';

const CarouselRightNavigation = ({ swiper }) => {
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const updateState = () => setIsEnd(swiper.isEnd);
    swiper.on("slideChange", updateState);
    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNav}>
      {!isEnd && <FaArrowAltCircleRight className={styles.Arrow} onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
