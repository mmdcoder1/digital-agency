import React from 'react';

//animation
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './form.module.css';

//components
import Title from '../../extra-components/title-container/Title';

//images
import blueCirlce from '../../media/blue-circle.svg';
import redPlus from '../../media/red-plus.svg';
import sendImage from '../../media/send.svg';

const titleData = {
    vector1: redPlus,
    vector2: blueCirlce,
    title: 'دنبال سایت یا اپ بهتری هستید؟',
    text: 'شما هم میتونید مثل هزاران فرد دیگه از خدمات حرفه ای ما استفاده کنید'
}

const Form = () => {
    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <div className={`section-space ${styles.container}`}>
                <Title title={titleData} /> 
                <div>
                        <form className={`flex ${styles.form}`}>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" duration={1}>
                            <button className={`flex justify-center ${styles.btn}`}><img src={sendImage} /></button>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" duration={1} delay={100}>
                            <input className={styles.input} type='text' placeholder='برای ثبت سفارش ایمیل خودرا وارد کنید' />
                        </AnimationOnScroll>
                        </form>
                </div>
            </div>
        </AnimationOnScroll>
    );
};

export default Form;