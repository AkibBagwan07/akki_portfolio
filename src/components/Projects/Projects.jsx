import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import { projects } from '../../data/constants';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './leftNav';
import CarouselRight from './rightNav';

const Projects = () => {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setSwiperInstance(swiperRef.current.swiper);
    }
  }, [swiperRef]);

  return (
    <div id="Projects" className={styles.projectsParent}>
      <div className={styles.projectHeading}>
        <p className={styles.title}>Projects</p>
        <p className={styles.description}>
          Explore my portfolio to see a selection of projects that highlight my creativity and technical abilities
        </p>
      </div>
      <div className={styles.wrapper}>
        <Swiper
          ref={swiperRef}
          centeredSlides={true}
          initialSlide={0}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={40}
          allowTouchMove
          className={styles.swiperContainer}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.card} onClick={() =>  window.open(`${item.webapp}`, "_blank")}>
                <img src={item.image} className={styles.projectImage} alt="Project" />
                <div className={styles.details}>
                  <p className={styles.projectTitle}>{item.title}</p>
                  <p className={styles.projectDescription}>{item.description}</p>
                  <div className={styles.tagsContainer}>
                    {item.tags.map((tag, idx) => (
                      <p className={styles.tags} key={idx}>{tag}</p>
                    ))}
                  </div>
                </div>
                <a href={item.github} target="_blank" className={styles.viewCodeBtn} rel="noreferrer">
                  View Code
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {swiperInstance && (
          <>
            <CarouselLeft swiper={swiperInstance} />
            <CarouselRight swiper={swiperInstance} />
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
