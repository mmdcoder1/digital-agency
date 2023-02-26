import React from 'react';

//animation
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './about.module.css';

//components

import Content from '../content/Content';
import Slider from '../slider/Slider';

const About = () => {
    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <div className={`flex justify-space section-space ${styles.container}`}>
                <Content />
                <Slider />
            </div>
       </AnimationOnScroll>
    );
};

export default About;