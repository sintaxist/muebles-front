import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext';
import { getContent, urlAdmin } from '../utils/httpClient';
import { Content } from '../utils/UseElements';
import styles from '../../styles/Home.module.scss';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import ReactMarkdown from 'react-markdown';

function Home () {
  
  const { addToCart } = useContext(AppContext);

  const addItem = (item) => {
    addToCart(item)
  }

  const [content, setContent] = useState([]);
  useEffect(() => {
    getContent('homepage?populate=Slider.slide.img,Slider.slide.title,Slider.slide.button,Promociones.img60.imgDesk,Promociones.img60.imgMobile,Promociones.firstImg30.imgDesk,Promociones.firstImg30.imgMobile,Promociones.secondImg30.imgDesk,Promociones.secondImg30.imgMobile,testimonials.title,testimonials.review').then((data) => {
      setContent(data)
    });

  }, [])

  const options = {
    loop: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    nav: false,
    autoplayTimeout: 3500,
  };

  const options2 = {
    loop: true,
    items: 1,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: false,
    autoplayTimeout: 5000,
  };

  const info = content?.data?.attributes;

  // console.log(info?.Promociones)s

  return (
    <>
      {
        info?.Slider.show ? (
          <OwlCarousel id='sliderHome' className='owl-carousel owl-theme' {...options}>
            {info?.Slider?.slide.map(slide => (
              <div
                key={slide.id}
                className={`${styles.slide}`}
                style={{ backgroundImage: `url(${urlAdmin + slide.img.data.attributes.url})` }}>
                <div className={styles.containerSlide}>
                  <h1 className={`title ${slide.title.color}`}>{slide.title.titulo}</h1>
                  <ReactMarkdown className={styles.h2Slide}>{slide.description}</ReactMarkdown>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : null
      }
      <Content>
        {
          info?.Promociones.show ? (
            <div className={styles.promociones}>
              <div className={`${styles.imgContainer} ${styles.img60}`}>
                <img className={styles.imgDesk} src={urlAdmin + info?.Promociones.img60.imgDesk.data.attributes.url} alt='' />
                <img className={styles.imgMobile} src={urlAdmin + info?.Promociones.img60.imgMobile.data.attributes.url} alt='' />
              </div>
              <div className={styles.img30}>
                <div className={styles.imgContainer}>
                  <img className={styles.imgDesk} src={urlAdmin + info?.Promociones.firstImg30.imgDesk.data.attributes.url} alt='' />
                  <img className={styles.imgMobile} src={urlAdmin + info?.Promociones.firstImg30.imgMobile.data.attributes.url} alt='' />
                </div>
                <div className={styles.imgContainer}>
                  <img className={styles.imgDesk} src={urlAdmin + info?.Promociones.secondImg30.imgDesk.data.attributes.url} alt='' />
                  <img className={styles.imgMobile} src={urlAdmin + info?.Promociones.secondImg30.imgMobile.data.attributes.url} alt='' />
                </div>
              </div>
            </div>
          ) : null
        }

        {
          info?.testimonials.show ? (

            <div className={styles.sliderContain}>

              <div id='testimonials' className={styles.testimonials}>

                <h2 className={`title ${info?.testimonials.title.color}`}>{info?.testimonials.title.titulo}</h2>

                <OwlCarousel className='owl-carousel owl-theme' {...options2}>
                  {info?.testimonials.review.map(testimonio => (
                    <div className={styles.review} key={testimonio.id}>
                      <q>{testimonio.description}</q>
                      <span>{testimonio.nombre}, {testimonio.edad} años</span>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>

          ) : null
        }

        {data.map(producto => (
          <div key={producto.id}>
            <h1>{producto.name}</h1>
            <p>{producto.description}</p>
            <button onClick={() => addItem(producto)}>agregar al carrito</button>
          </div>
        ))}
      </Content>
    </>
  )
}

const data = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  }
]

export default Home
