import { useState, useEffect } from 'react';

//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './columnLeft.module.css';

//images
import barChart from '../../../media/barChart.svg';
import profile1 from '../../../media/profile1.png';
import profile2 from '../../../media/profile2.png';
import clock from '../../../media/clock.svg';
import mood from '../../../media/mood.svg';
import photo from '../../../media/photo.svg';
import toggle from '../../../media/toggle.svg';
import mouseArrow from '../../../media/mouse-arrow.svg';


const component = <div className={`${styles.container}`}>
                        <div className={`flex animate__animated animate__fadeInUp ${styles.profiles} ${styles.position1}`}>
                            <img className={styles.profile} src={profile1} alt='پروفایل' />
                            <img className={styles.profile} src={profile2} alt='پروفایل' />
                            <span className={styles.profile}>
                                ۵k+
                            </span>
                        </div>

                        <div className={`flex animate__animated animate__fadeInUp ${styles.popup} ${styles.rowGAP} ${styles.position2}`}>
                            <img src={barChart} alt='chart' />
                            <div className={`${styles.columnPopup} flex flex-column`} style={{ alignItems: 'flex-start' }}>
                                <h4 className={styles.popupTitle}> ۷۵ درصد</h4>
                                <p className={styles.popupContent}>افزایش بازدید کنندگان سایت</p>
                            </div>
                        </div>

                        <div className={`flex animate__animated animate__fadeInUp ${styles.popup} ${styles.rowGAP} ${styles.position3}`}>
                            <img src={clock} alt='clock' />
                            <div className={`${styles.columnPopup} flex flex-column`} style={{ alignItems: 'flex-start' }}>
                                <h4 style={{ fontSize: '1.3rem' }} className={styles.popupTitle}>تحویل در کمترین زمان</h4>
                            </div>
                        </div>

                        <div className={`flex flex-column animate__animated animate__fadeInUp ${styles.popup} ${styles.columnGAP} ${styles.position4}`}>
                            <img src={photo} alt='photo' />
                            <div className={`${styles.columnPopup} flex flex-column`} style={{ alignItems: 'flex-start' }}>
                                <h3 className={styles.popupTitle}>رابط کاربری</h3>
                            </div>
                        </div>

                        <div className={`flex animate__animated animate__fadeInUp ${styles.popup} ${styles.rowGAP} ${styles.position5}`}>
                            <img src={mood} alt='mood' />
                            <div className={`${styles.columnPopup} flex flex-column`} style={{ alignItems: 'flex-start' }}>
                                <h4 className={styles.popupTitle}> ۹۸ درصد</h4>
                                <p className={styles.popupContent}>از مشتریان ما راضی هستند</p>
                            </div>
                        </div>



                        <div style={{ padding: '2rem' }} className={`flex animate__animated animate__fadeInUp ${styles.popup} ${styles.position6}`}>
                            <img src={toggle} alt='toggle' />
                        </div>

                        <img src={mouseArrow} className={`animate__animated animate__fadeInUp ${styles.mouseArrow}`} />
                    </div>;

const ColumnLeft = () => {
    return (component);
};

export default ColumnLeft;