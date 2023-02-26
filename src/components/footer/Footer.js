import React from 'react';

//animation
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './footer.module.css';

//images
import facebook from '../../media/facebook.svg';
import twitter from '../../media/twitter.svg';
import instagram from '../../media/instagram.svg';

const Footer = () => {
    return (
      <AnimationOnScroll animateIn='animate__fadeInUp'>
        <footer className={`flex justify-space section-space ${styles.container}`}>
            <div className={styles.about}>
                <h3 className={styles.aboutTitle}>درباره وبینو</h3>
                <p className={styles.aboutText}>وبینو یک شرکت دیجیتال مارکتینگ است
                    که با بیش از ۱۰ سال فعالیت درخشان رضایت ۹۹%
                    مشتریان خودرا جلب کرده است.
                    هدف وبینو ایجاد یک بستر امن برای تولید محصول های
                    کاربر پسند است.
                </p>
            </div>


           <div className={`flex ${styles.listsContainer}`}>
                <div className={styles.socialMedia}>
                        <h3 className={styles.socialMediaTitle}>دسترسی ها</h3>
                        <nav>
                            <ul className={`${styles.list} flex flex-column flex-align-start`}>
                                <li><a className={styles.link} href='#'>صفحه اصلی</a></li>
                                <li><a className={styles.link} href='#'>درباره ما</a></li>
                                <li><a className={styles.link} href='#'>تماس با ما</a></li>
                                <li><a className={styles.link} href='#'>قوانین و مقررات</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.socialMedia}>
                        <h3 className={styles.socialMediaTitle}>ارتباط</h3>
                        <nav>
                            <ul className={`${styles.list} flex flex-column flex-align-start`}>
                                <li><a className={styles.link} href='#'>تلگرام</a></li>
                                <li><a className={styles.link} href='#'>واتساپ</a></li>
                                <li><a className={styles.link} href='#'>اینستاگرام</a></li>
                                <li><a className={styles.link} href='#'>ایمیل</a></li>
                            </ul>
                        </nav>
                    </div>
                    
           </div>


            <div className={`flex ${styles.icons}`}>
                <a href='#'><img src={twitter} /></a>
                <a href='#'><img src={facebook} /></a>
                <a href='#'><img src={instagram} /></a>
            </div>
        </footer>
        </AnimationOnScroll>
    );
};

export default Footer;