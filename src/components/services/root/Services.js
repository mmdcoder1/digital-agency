import { useState, useEffect } from 'react';

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

//styles
import styles from './services.module.css';

//data
import { servicesData } from '../data';

//components
import Service from '../service/Service';
import Title from '../../../extra-components/title-container/Title';

//images
import greenPlus from '../../../media/green-plus.svg';
import purpleCircle from '../../../media/purple-circle.svg';

const titleData = {
    vector1: greenPlus,
    vector2: purpleCircle,
    title: 'خدمات تخصصی',
    text: 'ما چیکار میکنیم؟'
};

const Services = () => {
    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <div className={`section-space ${styles.container}`}>
                <Title title={titleData} />
                <div className={`flex justify-space ${styles.services}`}>
                   {servicesData.map(serviceData => <Service key={serviceData.id} service={serviceData}/>)   }
                </div>
            </div>
         </AnimationOnScroll>
    );
};

export default Services;