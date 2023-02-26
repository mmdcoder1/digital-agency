import React from 'react';

//animation
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// styles
import styles from './comments.module.css';

//images 
import arrowLeft from '../../media/arrow-left.svg';
import arrowRight from '../../media/arrow-right.svg';
import profile from '../../media/comments-profile.png';
import bluePlus from '../../media/blue-plus.svg';
import greenCircle from '../../media/green-circle.svg';
import commentsLine from '../../media/comments-line.svg';
import commentsStar from '../../media/comments-star.svg';
import commentsSign from '../../media/comments-sign.svg';
import commentsSmile from '../../media/comments-smile.svg';

//components
import Title from '../../extra-components/title-container/Title';

const titleData = {
    vector1: bluePlus,
    vector2: greenCircle,
    title: 'نظرات برخی از مشتریان',
    text: 'عملکرد ما'
};


const Comments = () => {
    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <div className={`section-space ${styles.container}`}>
            <Title title={titleData} />
            <div className={`flex ${styles.innerContainer}`}>
                    <button className={`flex ${styles.btn}`} ><img src={arrowRight} /></button>
                    <div className={`flex justify-center ${styles.comments}`}>
                        <img className={styles.commentsLine} src={commentsLine} />
                        <img className={styles.commentsSign} src={commentsSign} />
                        <img className={styles.commentsStar} src={commentsStar} />
                        <img className={styles.commentsSmile} src={commentsSmile} />
                        <div className={`flex flex-column ${styles.details}`}>
                                <img className={styles.image} src={profile} />
                                <h3 className={styles.title}>سینا پاشازاده</h3>
                                <p className={styles.text}>من از خدمات وبینو استفاده کردم وفقط میتونم بگم فوق العاده بودن! رفتار حرفه و محرمانشون از همون شروع پروژه به من اطمینان دادن کار نهایی قراره حرفه ای باشه!</p>
                        </div>
                    </div>
                    <button className={`flex ${styles.btn}`} ><img src={arrowLeft} /></button>
            </div>
            </div>
        </AnimationOnScroll>
    );
};

export default Comments;