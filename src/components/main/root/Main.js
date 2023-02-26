import { useState, useEffect } from 'react';

//styles
import styles from './main.module.css';

//components
import ColumnRight from '../column-right/ColumnRight';
import ColumnLeft from '../column-left/ColumnLeft';

//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const component = <main className={`flex justify-space ${styles.container}`}>
                    <ColumnRight />
                    <ColumnLeft />
                </main>;

const Main = () => {
    const [scrollAnimate, setScrollAnimate] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if(window.scrollY > 800) setScrollAnimate(true);
        })
    })
    return (
       <>

          {
            (scrollAnimate) ?
            <AnimationOnScroll animateIn="animate__fadeInDown">
                 {component}
            </AnimationOnScroll> : component
          } 
       </>
    );
};

export default Main;