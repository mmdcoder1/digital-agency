import { useState, useEffect } from 'react';

//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './columnRight.module.css';

//images
import arrow from '../../../media/arrow.svg';
import ellipseCircle from '../../../media/ellipse-circle.svg';

const component = <div className={styles.container}>
                                <img src={ellipseCircle} className={`animate__animated animate__rotateIn ${styles.ellipseCircle}`} />
                                <h2 className={`${styles.title} ${styles.titleLight} ${styles.title1}`}>آژانس دیجیتال مارکتینگ</h2>
                                <h2 className={`${styles.title} ${styles.titleBold} ${styles.title2}`}>قابل اطمینان و حرفه ای تحت لیسانس</h2>
                                <h2 className={`${styles.title} ${styles.titleBold} ${styles.title3}`}>ایالات متحــــده آمــــــریکا</h2>                                                                                            
                                <p className={`${styles.description}`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان...</p>

                                <a className={`btn flex justify-center ${styles.startButton}`}><span>شروع کنید</span> <img src={arrow} /></a>
                        </div>;

const ColumnRight = () => {
    return (component)
};

export default ColumnRight;