import React, { useState } from 'react';
import { useEffect } from 'react';
import StyledButton from '../components/Button';
import Newsletter from '../components/newsletter';
import StyledTitle from '../components/title';
import { MarkUp, PageContainer } from '../components/UseElements';
import { getContent, urlAdmin } from '../hooks/httpClient';

import styles from '../styles/steps.module.scss';

export default function ComoComprar() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        getContent('como-comprar?populate=title,number.img,button').then((data) => {
            setContent(data)
        })
    }, [])

    const info = content?.data?.attributes;

    return (
        <>
        {
            info?.length > 0 ? null : (
                <PageContainer>
                    <StyledTitle title={info?.title} before={false} />
                    <MarkUp>{info?.text}</MarkUp>
                    <div className={styles.steps}>
                    {
                        info?.number.map((elem, index) => (
                            <article key={elem.id} className={styles.step}>
                                <span>{index + 1}</span>
                                <img src={urlAdmin + elem.img.data.attributes.url} alt={elem.title} />
                                <div>
                                    <h2>{elem.title}</h2>
                                    <MarkUp>{elem.text}</MarkUp>
                                </div>
                            </article>
                        ))
                    }
                    {
                        info?.button.show ? (
                            <StyledButton className={styles.button} button={info?.button} link={true} />
                        ) : null
                    }
                    </div>
                </PageContainer>
            )
        }
        {
            info?.show_newsletter ? (

                <Newsletter/>

            ) : null
        }
        </>
    )
}
