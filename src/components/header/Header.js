import { useState, useEffect } from 'react';

//images
import logo from '../../media/logo.svg';

//Styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


import styles from './header.module.css';

//animation
import 'animate.css';


const Header = () => {
    return (
                  <header className={`flex justify-space flex  ${styles.container}`}>
                        <img className={`animate__animated animate__bounceInRight ${styles.logo}`} src={logo} alt='لوگو' />
                        <nav>
                            <ul className={`flex ${styles.links}`}>
                                <li style={{ animationDelay: '50ms' }} className='animate__animated animate__fadeInUp'><a className={`${styles.link} ${styles.active}`} href='#'>خانه</a></li>
                                <li style={{ animationDelay: '100ms' }} className='animate__animated animate__fadeInUp'><a className={`${styles.link}`} href='#'>ثبت سفارش</a></li>
                                <li style={{ animationDelay: '150ms' }} className='animate__animated animate__fadeInUp'><a className={`${styles.link}`} href='#'>درباره ما</a></li>
                                <li style={{ animationDelay: '200ms' }} className='animate__animated animate__fadeInUp'><a className={`${styles.link}`} href='#'>ارتباط با ما</a></li>
                            </ul>
                        </nav>
                        <a className={`btn btn-outline flex animate__animated animate__bounceInLeft ${styles.createAccountButton}`} href='#'>ایجاد حساب</a>
                    </header>
    );
};

export default Header;