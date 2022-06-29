import React, {
  // useContext, 
  useEffect, useState
} from 'react'
// import AppContext from '../context/AppContext';
import { getContent, urlAdmin } from '../hooks/httpClient';
import { Card, Content, FlexRow, MarkUp } from '../components/UseElements';
import styles from '../styles/Home.module.scss';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import ReactMarkdown from 'react-markdown';
import StyledButton from '../components/Button';
import StyledTitle from '../components/title';
import { Link } from 'react-router-dom';
import Newsletter from '../components/newsletter';
import Testimonials from '../components/testimonials';


function Home() {

  // const { addToCart } = useContext(AppContext);

  // const addItem = (item) => {
  //   addToCart(item)
  // }

  const [content, setContent] = useState([]);
  useEffect(() => {
    getContent('homepage?populate=Slider.slide.img,Slider.slide.title,Slider.slide.button,Promociones.img60.imgDesk,Promociones.img60.imgMobile,Promociones.firstImg30.imgDesk,Promociones.firstImg30.imgMobile,Promociones.secondImg30.imgDesk,Promociones.secondImg30.imgMobile,testimonials.title,testimonials.review,beneficios.title,beneficios.beneficio.img,category_card.card.category.image').then((data) => {
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

  const info = content?.data?.attributes;

  // console.log(info?.Slider)

  return (
    <>
      <section className={styles.firstSection}>
        {
          info?.Slider.show ? (
            <OwlCarousel id='sliderHome' className='owl-carousel owl-theme' {...options}>
              {info?.Slider?.slide.map(slide => (
                <div
                  key={slide.id}
                  className={`${styles.slide}`}
                  style={{ backgroundImage: `url(${urlAdmin + slide.img.data.attributes.url})` }}>

                  <div className={styles.containerSlide}>

                    <StyledTitle title={slide?.title} before={false} />

                    <ReactMarkdown className={styles.h2Slide}>{slide.description}</ReactMarkdown>

                    <StyledButton button={slide?.button} link={true} />

                  </div>

                </div>
              ))}

            </OwlCarousel>

          ) : null
        }

        <div className={styles.scrollDowns}>
          <div className={styles.mousey}>
            <div className={styles.scroller}>
            </div>
          </div>
        </div>

      </section>

      <Content>
        <section>
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
        </section>

        <section>
          {
            info?.testimonials.show ? (

              <Testimonials/>

            ) : null
          }
        </section>

        {/* {data.map(producto => (
          <div key={producto.id}>
            <h1>{producto.name}</h1>
            <p>{producto.description}</p>
            <button onClick={() => addItem(producto)}>agregar al carrito</button>
          </div>
        ))} */}
      </Content>

      <section>
          {
            info?.beneficios.show ? (
              <div className={styles.containerBen}>
                <StyledTitle title={info?.beneficios.title} before={false}/>
                <FlexRow className={styles.beneficios}>
                  {
                    info?.beneficios.beneficio.map(article => (
                      <article className={styles.beneficio} key={article.id}>
                        <img src={urlAdmin + article.img.data.attributes.url} alt={article.title}/>
                        <div>
                          <h2>{article.title}</h2>
                          <MarkUp>{article.text}</MarkUp>
                        </div>
                      </article>
                    ))
                  }
                </FlexRow>
              </div>
            ): null
          }
          {
            info?.category_card.show ? (
              <FlexRow className={styles.categories}>
                {
                  info?.category_card.card.map(card => (
                    <Card className={styles.category} as={Link} to={`catalogo/${card.category.data.attributes.name}`} key={card.id}>
                      <img src={urlAdmin + card.category.data.attributes.image.data.attributes.url} alt={card.category.data.attributes.name} />
                      <h3>{card.category.data.attributes.name}</h3>
                    </Card>
                  ))
                }
              </FlexRow>
            ) : null
          }
        </section>
        {
          info?.showNewsletter ? (
            <Newsletter/>
          ) : null
        }
    </>
  )
}

// const data = [
//   {
//     id: 1,
//     name: 'Producto 1',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
//   },
//   {
//     id: 2,
//     name: 'Producto 2',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
//   },
//   {
//     id: 3,
//     name: 'Producto 3',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
//   },
//   {
//     id: 4,
//     name: 'Producto 4',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
//   }
// ]

export default Home
