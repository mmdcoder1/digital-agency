import React from 'react';

//styles
import styles from './title.module.css';

const Title = ({ title }) => {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.details}>
                <img className={styles.vector1} src={title.vector1} />
                <h2 className={styles.title}>{title.title}</h2>
                <p className={styles.text}>{title.text}</p>
                <img className={styles.vector2} src={title.vector2} />
            </div>       
        </div>
    );
};

export default Title;