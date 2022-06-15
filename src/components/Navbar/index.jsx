import { useState, useEffect, useContext } from 'react';
import BurguerButton from './BurgerButton';
import {
  NavLink,
  NavContainer,
  Logo,
  LogoMobile,
  Header,
  LogoLink,
  BgDiv,
  LinkContainer,
  LinksMobile,
  Menu,
  Overlay,
  SectionMenu
} from './NavbarElements';

import styles from '../../styles/Header.module.scss';

import { getContent, urlAdmin } from '../utils/httpClient';
import AppContext from '../../context/AppContext'
import { Search } from './search';
import { Link } from 'react-router-dom';

function Navbar() {

  //Context App Carrito de Compras
  const { state } = useContext(AppContext);

  //Consumir API
  const [content, setContent] = useState([]);
  useEffect(() => {
    getContent('header?populate=image,imgMobile,links.sublinks').then((data) => {
      setContent(data)
    });

  }, [])

  // Mostrar Menu
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }

  // Mostrar Buscador
  const [input, setInput] = useState(false);

  const showSearch = () => {
    setInput(!input)
  }

  //Header functions (scroll hidden & Change styles)
  let lastScrollTop = 0;

  const chageHeader = () => {

    let header = document.getElementById('header');

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.top = '-100px'
    } else {
      header.style.top = '0px'
    }

    lastScrollTop = scrollTop;

    if (window.scrollY >= 80) {
      header.classList.add(`${styles.active}`)
    } else {
      header.classList.remove(`${styles.active}`)
    }
  }

  window.addEventListener('scroll', chageHeader);

  // Acordeon menu mobile

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  //Retorno de la funcion
  return (
    <Header id='header' className={styles.header}>
      <NavContainer className='widthBreak'>

        <LogoLink to='/' className={`${input ? styles.disappear : ''}`}>
          <Logo src={urlAdmin + content?.data?.attributes.image.data.attributes.url} alt="logo" />
          <LogoMobile src={urlAdmin + content?.data?.attributes.imgMobile.data.attributes.url} alt="logo-mobile" />
        </LogoLink>

        <LinkContainer className={`${input ? styles.disappear : ''}`}>
        {content?.data?.attributes?.links.data.map(link => (
            !link.attributes?.Submenu ? (
              <NavLink key={link.id} to={link.attributes.link}>
                {link.attributes.linkName}
              </NavLink>
            ) : (
              <div className={styles.subMenu} key={link.id}>
                <p>{link.attributes.linkName}</p>
                <ul className={styles.fatherItem}>
                  {link.attributes.sublinks?.data.map(sublink => (
                    <li key={sublink.id} className={styles.itemMenu}>
                      <Link to={sublink.attributes.link}>{sublink.attributes.linkName}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </LinkContainer>

        <LinksMobile className={`${clicked ? 'active' : ''}`}>
          <NavLink to='/' onClick={handleClick}>inicio</NavLink>
          {content?.data?.attributes?.links.data.map((link, i) => (
            !link.attributes.Submenu ? (
              <NavLink key={link.id} to={link.attributes.link} onClick={handleClick}>
                {link.attributes.linkName}
              </NavLink>
            ) : (
              <div className={styles.subMenuMobile} key={link.id} onClick={() => toggle(i)}>
                <p>
                  {link.attributes.linkName}
                  <span>{selected === i ? '-' : '+'}</span>
                </p>
                <ul className={selected === i ? `${styles.showAcordion} ${styles.linksMobile}` : styles.linksMobile}>
                  {link.attributes.sublinks?.data.map(sublink => (
                    <li key={sublink.id}>
                      <Link to={sublink.attributes.link} onClick={handleClick}>{sublink.attributes.linkName}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </LinksMobile>

        <SectionMenu className={styles.sectionMenu}>

          <Search input={input} showSearch={showSearch}/>

          <Link to='cart' className={`${styles.cart} ${input ? styles.disappear : ''}`}>
            {state.cart.length > 0 ? <div className={styles.item}>{state.cart.length}</div> : null }
            <svg className={styles.cartSvg} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </Link>

          <Menu className={`${input ? styles.disappear : ''}`}>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </Menu>
          
        </SectionMenu>

        <BgDiv className={`${clicked ? ' active' : ''}`}></BgDiv>

        <Overlay className={`${clicked ? ' active' : ''}`} onClick={handleClick}></Overlay>

      </NavContainer>

    </Header>
  );
}

export default Navbar;
