import React, { useState, useEffect } from 'react';
import { getContent, urlAdmin } from '../hooks/httpClient';
import { MarkUp, PageContainer2 } from '../components/UseElements';

import styles from '../styles/formsPage.module.scss';
import PostForm from '../components/form';
import StyledTitle from '../components/title';
import Newsletter from '../components/newsletter';
import { Link } from 'react-router-dom';

export default function Contacto() {

    const [content, setContent] = useState(null);

    const [general, setGeneral] = useState(null);

    useEffect(() => {

        getContent('contacto?populate=*').then((data) => {
            setContent(data)
        })

        getContent('info-general?populate=*').then((data) => {
            setGeneral(data)
        })

    }, [])

    const info = content?.data?.attributes;

    const info2 = general?.data?.attributes;

    // const imgBack = urlAdmin + info?.img_back.data.attributes.url;

    console.log(info2)

    return (
        <>
            <PageContainer2>
                {
                    info?.length > 0 ? null : (
                        <>
                            <StyledTitle title={info?.title} before={false} />
                            <MarkUp>{info?.text}</MarkUp>
                            {
                                info?.show_form ? (
                                    <div className={styles.formContainer}>
                                        <PostForm />
                                        <div className={styles.infoContain} style={{ backgroundImage: `url(${urlAdmin + info?.img_back.data.attributes.url})` }}>
                                            <h2>{info.title_two.titulo}</h2>
                                            {
                                                info?.show_redes ? (
                                                    <div>
                                                        <p>Redes Sociales</p>
                                                        <ul>
                                                            {
                                                                info2?.redes_sociales.map(elem => (
                                                                    <li key={elem.id}>
                                                                        <Link
                                                                            to={elem.link}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer">{elem.name}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                info?.show_numbers ? (
                                                    <div>
                                                        <p>Numeros</p>
                                                        <ul>
                                                            {
                                                                info2?.telefonos.map(elem => (
                                                                    <li key={elem.id}>
                                                                        <Link
                                                                            to={elem.telefono}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer">{elem.telefono}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                info?.show_correo ? (
                                                    <div>
                                                        <p>Correos</p>
                                                        <ul>
                                                            {
                                                                info2?.correo.map(elem => (
                                                                    <li key={elem.id}>
                                                                        <Link
                                                                            to={elem.correo}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer">{elem.correo}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
                        </>
                    )
                }
            </PageContainer2>
            {
                info?.show_newsletter ? (
                    <Newsletter />
                ) : null
            }
        </>
    )

}