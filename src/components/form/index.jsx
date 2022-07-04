import Axios from 'axios';
import React, { useState } from 'react'
import { API } from '../../hooks/httpClient';
import FormInput from './FormInput';
import Loader from '../loader';


import styles from '../../styles/form.module.scss';
// import { Button } from '../UseElements';

export default function PostForm() {

    // Obtener la data de los inputs y agregarlas al estado

    const [data, setData] = useState({
        name: '',
        mail: '',
        numero: '',
        empresa: '',
        estado: '',
        comentarios: '',
    })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata)
    }

    // Metodo POST con AXIOS

    const url = API + 'requests';

    function submit(e) {

        e.preventDefault();

        Axios.post(url, {
            "data": {
                "name": data.name,
                "mail": data.mail,
                "numero": data.numero,
                "empresa": data.empresa,
                "estado": data.estado,
                "comentarios": data.comentarios
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
        {
            id: 4,
            name: "numero",
            type: "text",
            errorMessage: "Ingresa un número valido",
            label: "Télefono",
            pattern: `^(?=.*[0-9])[0-9!@#$%^&*]{10,20}$`,
            required: true,
        },
    ];

    // console.log(displaySuccess)

    return (

        <form
            id='form-contacto'
            onSubmit={(e) => submit(e)}
            className={styles.form}>

            <span id='success' className={styles.success}>
                Tu formulario se ha enviado con exito

                {/* <Button onClick={displaySuccess} className='white fill'>Volver a enviar</Button> */}
            </span>

            <div id='loader' className={styles.formLoader}>
                <Loader />
            </div>

            <ul>

                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={data[input.name]}
                        onChange={(e) => handle(e)}
                    />
                ))}

                <li className={styles.area}>
                    <textarea name="comentarios" id="comentarios" cols="20" rows="2" onChange={(e) => handle(e)} value={data.comentarios}></textarea>
                    <label htmlFor="comentarios">Comentarios</label>
                </li>

            </ul>

            {/* <Button>Enviar</Button> */}

        </form>
    )
}