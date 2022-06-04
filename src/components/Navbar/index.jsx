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

import { getContent, urlAdmin } from '../utils/httpClient';
import AppContext from '../../context/AppContext'
import { Search } from '../search';

function Navbar() {

  const [content, setContent] = useState([]);

  const {state} = useContext(AppContext);

  useEffect(() => {
    getContent('header?populate=*').then((data) => {
      setContent(data)
    });

  }, [])

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

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
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  }

  window.addEventListener('scroll', chageHeader);

  return (
    <Header id='header' className='header'>
      <NavContainer className='widthBreak'>

        <LogoLink to='/'>
          <Logo src={urlAdmin + content?.data?.attributes.image.data.attributes.url} alt="logo" />
          <LogoMobile src={urlAdmin + content?.data?.attributes.imgMobile.data.attributes.url} alt="logo-mobile" />
        </LogoLink>

        <LinkContainer>
          {content?.data?.attributes.links.data.map(link => (
            <NavLink key={link.id} to={link.attributes.link}>
              {link.attributes.linkName}
            </NavLink>
          ))}
        </LinkContainer>

        <LinksMobile className={`${clicked ? 'active' : ''}`}>
          <NavLink to='/' onClick={handleClick}>inicio</NavLink>
          {content?.data?.attributes.links.data.map(link => (
            <NavLink key={link.id} to={link.attributes.link} onClick={handleClick}>
              {link.attributes.linkName}
            </NavLink>
          ))}
        </LinksMobile>

        <SectionMenu>
          <Search />

          <div>
            <div>{state.cart.length > 0 ? <div>state.cart.length </div> : null }</div>
            <svg className="cart" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>

          <Menu className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </Menu>
          
        </SectionMenu>

        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>

        <Overlay className={`initial ${clicked ? ' active' : ''}`} onClick={handleClick}></Overlay>

      </NavContainer>

    </Header>
  );
}

export default Navbar;
