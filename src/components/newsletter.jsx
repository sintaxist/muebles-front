import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API, getContent } from '../hooks/httpClient';
import FormInput from './form/FormInput';
import Loader from './loader';
import StyledButton from './Button';


import styles from '../styles/form.module.scss';
import StyledTitle from './title';

export default function Newsletter() {

    //Obtener la data desde la API

    const [content, setContent] = useState([]);
    useEffect(() => {
        getContent('newsletter?populate=*').then((data) => {
            setContent(data)
        });

    }, [])

    const info = content?.data?.attributes;

    // Obtener la data de los inputs y agregarlas al estado

    const [data, setData] = useState({
        name: '',
        mail: '',
    })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata)
    }

    // Metodo POST con AXIOS

    const url = API + 'newsletter-forms';

    function submit(e) {

        e.preventDefault();

        Axios.post(url, {
            "data": {
                "name": data.name,
                "correo": data.mail,
            }
        })
            .then(res => {
                console.log(res.data)
                const span = document.getElementById('success');
                span.className = styles.success + ' ' + styles.valid;

                const loader = document.getElementById('loader');
                loader.className = styles.formLoader + ' ' + styles.valid;

                setTimeout(function () {
                    loader.className = styles.formLoader;
                }, 3000)

                const form = document.getElementById('form-contacto');

                form.reset();
            })

    }

    function displaySuccess(e) {

        e.preventDefault()

        const span = document.getElementById('success');
        span.className = styles.success;

        const loader = document.getElementById('loader');
        loader.className = styles.formLoader;

    }

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            errorMessage: "Ingresa un nombre valido",
            label: "Nombre",
            // pattern: '^[a-zA-ZÀ-ÿ\s]{1,40}$',
            required: true,
        },
        {
            id: 2,
            name: "mail",
            type: "email",
            errorMessage: "Ingresa un correo valido",
            pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$",
            label: "Correo electrónico",
            required: true,
        },
    ];

    const ButtonSuccess = {
        id: 0,
        color: 'red',
        style: 'fill',
        titleLink: 'Volver a enviar'
    };

    const ButtonEnviar = {
        id: 0,
        color: 'blue',
        style: 'fill',
        titleLink: 'enviar'
    };

    console.log(info?.title)
    return (

        <section>

            {
                info?.show_title ? (
                    <StyledTitle title={info?.title} before={false}/>
                ) : null
            }

            <div>

                <div>
                    <h4>{info?.title_list}</h4>

                    {
                        info?.listado.map(elem => (
                            <li key={elem.id}>{elem.elemento}</li>
                        ))
                    }
                </div>

                <form
                    id='form-contacto'
                    onSubmit={(e) => submit(e)}
                    className={styles.form}>

                    <span id='success' className={styles.success}>
                        Tu formulario se ha enviado con exito

                        <StyledButton onClick={displaySuccess} button={ButtonSuccess} link={false} />
                    </span>

                    <div id='loader' className={styles.formLoader}>
                        <Loader />
                    </div>

                    <div>

                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={data[input.name]}
                                onChange={(e) => handle(e)}
                            />
                        ))}

                    </div>

                    <StyledButton button={ButtonEnviar} link={false} />

                </form>

            </div>

        </section>
    )
}