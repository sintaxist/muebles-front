import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
// import { Link } from 'react-router-dom';

import styles from '../styles/colapseItems.module.scss'
import { getContent } from '../hooks/httpClient';
import { Content } from '../components/UseElements';

export default function Faqs() {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  const [content, setContent] = useState(null);
  
  useEffect(() => {
    getContent('faq?populate=titulo.show,question').then((data) => {
      setContent(data)
    })
  }, [])

  const info = content?.data?.attributes;
  // console.log(info)

  return (
    <div className='back-final margin100'>
      <Content>
        {info?.titulo.show ? (
          <h1 className={`title h1-title ${info?.titulo.color}`}>{info?.titulo.titulo}</h1>
        ) : null}
        <ReactMarkdown className={styles.p}>{info?.description}</ReactMarkdown>
    
        <div className={styles.accordion}>
          {
            info?.question.map((item, i) => {
              return (
                <div className={styles.item} key={item.id}>

                  <div className={selected === i ? `${styles.active} ${styles.title}` : styles.title} onClick={() => toggle(i)}>

                    <h2 className={selected === i ? `${styles.activo} ${styles.titulo}` : styles.titulo}>
                      {item.question}
                    </h2>

                    <span>{selected === i ? '-' : '+'}</span>
                  </div>

                  <div className={selected === i ? `${styles.content} ${styles.show}` : styles.content}>

                    <p>
                      {item.answer}
                    </p>

                  </div>
                </div>
              )
            })
          }
        </div>
      </Content>
    </div>
  )
}