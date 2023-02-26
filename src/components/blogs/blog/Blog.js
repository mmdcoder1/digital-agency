import React from 'react';

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles 
import styles from './blog.module.css';

const Blog = ({ blog }) => {
    return (
        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={blog.id * 100} duration={0.5}>
            <div className={`flex flex-column flex-align-start ${styles.container}`}>
                <img className={styles.image} src={blog.image} />
                <div className={`flex flex-column flex-align-start ${styles.content}`}>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.text}>{blog.text}</p>
                </div>
                <a className={`btn btn-outline ${styles.btn}`} href='#'>مطالب بیشتر</a>
            </div>
        </AnimationOnScroll>
    );
};

export default Blog;