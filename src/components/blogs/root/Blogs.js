import React from 'react';

//animation
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './blogs.module.css';

//images
import blueCircle from '../../../media/blue-circle.svg';
import redPlus from '../../../media/red-plus.svg';

//components
import Title from '../../../extra-components/title-container/Title';
import Blog from '../blog/Blog';

//data
import { blogsData } from '../data';

const titleData = {
    vector1: redPlus,
    vector2: blueCircle,
    title: 'آخرین بلاگ ها',
    text: 'مطالب طناز'
};


const Blogs = () => {
    return (
         <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <div className={`section-space ${styles.container}`}>
                <Title title={titleData} />
                <div className={`flex justify-center ${styles.blogs}`}>
                    {blogsData.map(blogData => <Blog key={blogData.id} blog={blogData} />)}
                </div>
            </div>
        </AnimationOnScroll>
    );
};

export default Blogs;