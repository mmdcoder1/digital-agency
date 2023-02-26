import React from 'react';

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

//styles
import styles from './service.module.css';

const Service = ({ service }) => {
    return (
     <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={service.id * 100} duration={0.5}>
        <div className={`flex flex-column flex-align-start ${styles.container}`}>
            <div>
                <img className={styles.image} src={service.image} />
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.text}>{service.text}</p>
            </div>
            <a className={`btn btn-outline ${styles.btn}`} href='#'>ثبت سفارش</a>
        </div>
     </AnimationOnScroll>
    );
};

export default Service;