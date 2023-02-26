import React from 'react';

//styles
import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <span class={styles.loader}></span>
        </div>
    );
};

export default Loader;