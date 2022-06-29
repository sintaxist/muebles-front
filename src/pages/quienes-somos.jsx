import React, { useEffect, useState } from "react";
import Newsletter from "../components/newsletter";
import Testimonials from "../components/testimonials";
import StyledTitle from "../components/title";
import { Card, Content, MarginBuilder, MarkUp } from "../components/UseElements";
import { getContent, urlAdmin } from "../hooks/httpClient";

import styles from '../styles/QuienesSomos.module.scss';

export default function QuienesSomos() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        getContent('quienes-somos?populate=title,first_card.img,second_card.img,img_parallax').then((data) => {
            setContent(data)
        })
    }, [])

    const info = content?.data?.attributes;

    // console.log(info?.first_card)
    return (
        <MarginBuilder>
            {
                info?.valid ? (
                    <Content className={styles.container}>
                        <StyledTitle title={info?.title} before={false}/>
                        <MarkUp>{info?.text}</MarkUp>
                    </Content>
                ) : null
            }
            {/* <Tabs className='hidden'>
                {data?.data?.map(elem => (

                    <Panel key={elem.id} title={elem.attributes.nombre}>
                        <h1 className="title h1-title gradient title-tabs">{elem.attributes.nombre}</h1>
                        <ProductContain>
                            {elem?.attributes?.productos?.data?.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </ProductContain>
                    </Panel>

                ))}
            </Tabs> */}
            {
                info?.valid ? (
                    <Content className={styles.container}>
                        <section className={styles.cardContainer}>
                            <article className={styles.card}>
                                <img src={urlAdmin + info?.first_card.img.data.attributes.url} alt="img" />
                                <Card>
                                    <h2>{info?.first_card.title}</h2>
                                    <MarkUp>{info?.first_card.text}</MarkUp>
                                </Card>
                            </article>
                            <article className={`${styles.card} ${styles.cardReverse}`}>
                                <img src={urlAdmin + info?.second_card.img.data.attributes.url} alt="img" />
                                <Card>
                                    <h2>{info?.second_card.title}</h2>
                                    <MarkUp>{info?.second_card.text}</MarkUp>
                                </Card>
                            </article>
                        </section>
                    </Content>
                ) : null
            }
            {
                info?.show_testimonials ? (

                    <Testimonials/>

                ) : null
            }

            {
                info?.show_newsletter ? (

                    <Newsletter/>

                ) : null
            }

        </MarginBuilder>
    )
} 