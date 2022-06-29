import React, { useEffect, useState } from "react";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import StyledTitle from "../title";

import styles from './testimonials.module.scss';
import { getContent } from "../../hooks/httpClient";

export default function Testimonials () {

    const [content, setContent] = useState(null);

    useEffect(() => {
        getContent('homepage?populate=testimonials.title,testimonials.review').then((data) => {
            setContent(data)
        })
    }, [])

    const info = content?.data?.attributes;

    const options2 = {
        loop: true,
        items: 1,
        margin: 30,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout: 5000,
    };

    return (
        <div className={styles.sliderContain}>

            <div id='testimonials' className={styles.testimonials}>
                {
                    info?.testimonials?.review.length > 0 ?
                    <>
                        <StyledTitle title={info?.testimonials.title} before={false} />

                        <OwlCarousel className='owl-carousel owl-theme' {...options2}>
                            {info?.testimonials.review.map(testimonio => (
                                <div className={styles.review} key={testimonio.id}>
                                    <q>{testimonio.description}</q>
                                    <span>{testimonio.nombre}, {testimonio.edad} años</span>
                                </div>
                            ))}
                        </OwlCarousel>
                    </> : null
                }
            </div>
        </div>
    )
}