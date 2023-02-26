import React from 'react';

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './slider.module.css';

//images
import arrowLeft from '../../../media/arrow-left.svg';
import arrowRight from '../../../media/arrow-right.svg';
import slide1 from '../../../media/slide2.webp';
import sliderVector from '../../../media/slider-vector.svg';

const Slider = () => {
    return (
        <div className={`flex ${styles.container}`}>
            <button className={`flex ${styles.btn}`}><img src={arrowRight} /></button>
            <div className={styles.slider}>
                 <img src={slide1} />
            </div>
            <button className={`flex ${styles.btn}`}><img src={arrowLeft} /></button>
            <img className={styles.sliderVector} src={sliderVector} />
        </div>
    );
};

export default Slider;