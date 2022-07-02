import React, { useEffect, useState } from "react";
import Newsletter from "../components/newsletter";
import Testimonials from "../components/testimonials";
import StyledTitle from "../components/title";
import { Card, Content, MarginBuilder, MarkUp } from "../components/UseElements";
import Tabs from '../components/tabs/Tabs';
import Panel from '../components/tabs/Panel';
import { getContent, urlAdmin } from "../hooks/httpClient";

import styles from '../styles/QuienesSomos.module.scss';

export default function QuienesSomos() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        getContent('quienes-somos?populate=title,first_card.img,second_card.img,img_parallax,history.title,history.fecha').then((data) => {
            setContent(data)
        })
    }, [])

    const info = content?.data?.attributes;

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
            {
                info?.valid ? (
                    <img className={styles.imgP} src={urlAdmin + info?.img_parallax.data.attributes.url} alt="img" />
                ) : null
            }
            {
                info?.valid ? (
                    <Content className={styles.container2}>
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
                info?.history.show ? (
                    <section>
                        <StyledTitle title={info?.history.title} before={false} />
                        <Tabs>
                            {info?.history.fecha.map(fecha => (
                                <Panel key={fecha.id} title={fecha.fecha}>
                                    <h2>{fecha.title}</h2>
                                    <p>{fecha.text}</p>
                                </Panel>
                            ))}
                        </Tabs>
                    </section>
                ) : null
            }
            {
                info?.show_testimonials ? (

                    <Content>
                        <Testimonials/>
                    </Content>

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