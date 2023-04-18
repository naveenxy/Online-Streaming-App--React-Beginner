import React from 'react';
import Carousel from "react-elastic-carousel";
import ChevronRightIcon from './ChevronRightIcon';

import placeholderImg from './assets/thumbnail-top10-h.jpg';
import styles from './Segment.module.css';

const Segment = ({ title }) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
   
    // const btnpressprev = () => {
    //     console.log(box)
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft - width;
    //     console.log(width)
    // }

    // const btnpressnext = () => {
    //     console.log(box)
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft + width;
    //     console.log(width)
    // }
    return (
        <div className={styles.segment}>
         
            <p className={styles.title}>
                {title}
                <span className={styles.icon}>
                    <svg width="8" height="8" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.5 3L21 20.5L3.5 38"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </p>
            {/* <button className={styles.pre} onClick={btnpressprev}><p>&lt;</p></button>
            <button className={styles.next} onClick={btnpressnext}><p>&gt;</p></button> */}
            <div className={`product-container ${styles.row}`} >
            <Carousel breakPoints={breakPoints}>
                <img src="https://hips.hearstapps.com/hmg-prod/images/teen-movies-netflix-kissing-booth-2-1596718460.jpg" alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                </Carousel>
                {/* <button className={styles.button}>
                    <ChevronRightIcon />
                </button> */}
            </div>
        </div>
    );
};

export default Segment;
