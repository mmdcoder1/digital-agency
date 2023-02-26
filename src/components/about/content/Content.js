import React from 'react';

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll';

//styles
import styles from './content.module.css';

//images
import emoji from '../../../media/glasses-emoji.svg';

import 'animate.css';

const Content = () => {
    return (
             <div className={styles.container}>
             <h2 className={`flex ${styles.titleTop}`}>
                <span style={{ color: 'var(--green)' }}>اعضای تیم</span>  آژانس
                <img width={40} src={emoji} />
            </h2>
            <h2 className={styles.title}>
                دیجیتال مارکتینگ وبینو
            </h2>

            <p className={`${styles.text}`}>
            تــــیم حـــرفه ای وبینو متشـکل از کـــلی مـتخصص در حوزه وب هست پس با خیــال کاملا راحت میتونید طراحی، پیاده سازی و سئو محصولتون رو به ما بسپارید
            و لذت فروش چندین برابری را تجربه کنید.
            </p>

            <a className={`btn btn-outline ${styles.btn}`} href='#'>مطالب بیشتر</a>
        </div>
    );
};

export default Content;