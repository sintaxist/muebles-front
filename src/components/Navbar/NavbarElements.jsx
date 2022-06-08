import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  z-index: 99;
  top: 0;
  padding: 0px 3%;
  width: 94%;
  height: 80px;
  background: #D93535;
  &:after{
    content: '';
    background: #F9FBFF;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 25%;
    max-width: 325px;
  }
  @media (max-width:1200px){
    &:after{
      max-width: 55px;
    }
  }
  @media(max-width:960px){
    &:after{
      display: none;
      max-width: 55px;
    }
  }
`

export const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinksMobile = styled.div`
  position: absolute;
  top: -700px;
  right: -2000px;
  right: 0;
  margin: auto;
  text-align: center;
  transition: all .5s ease;
  display: block;
  z-index: 4;
 
  @media(min-width: 960px){
    position: initial;
    margin: 0;
    display: none;
  }
  &.active{
    display: block;
    position: absolute;
    top: 100px;
    right: 60px;
    text-align: center;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  width: fit-content;
  text-align: center;
  padding: 10px 15px;
  transition: all .3s;
  font-size: .8rem;
  position: relative;
  margin: auto;
  &:before{
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    height: 2px;
    background: #fff;
    width: 100%;
    transform-origin: center;
    transform: scaleX(0);
    transition: all .3s;
    border-radius: 50px;
  }
  &:hover{
      &:before{
          transform: scaleX(1);
      }
  }
  @media(max-width: 960px){
    font-size: 1rem;
    margin: auto;
    margin-bottom: 15px;
    color: #D93535;
    &:before{
      height: 3px;
      background: linear-gradient(45deg, #D93535, #ff0962);
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  @media(max-width: 960px){
    display: none;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

export const Logo = styled.img`
  display: block;
  margin: auto;
  padding: 0rem 6%;
  height: auto;
  width: 80%;
  max-width: 250px;
  @media(max-width:960px){
    display: none;
  }
`;

export const LogoMobile = styled.img`
  display: none;
  min-width: 60px;
  @media(max-width:960px){
    display: block;
  }
`

export const BgDiv = styled.div`
  background-color: #fff;
  position: absolute;
  top: -1200px;
  right: -1000px;
  width: 1200px;
  height: 1200px;
  z-index: 3;
  border-radius: 50%;
  transition: all .6s ease;
  box-shadow: 0 0 20px rgb(0, 0, 0, 25%);
  display: none;
  
  &.active{
    top: -500px;
    right: -700px;
  }

  @media (max-width:960px) {
    display: block;
  }
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: #263575;
  position: fixed;
  top: 0;
  right: -100vw;
  opacity: 0;
  z-index: 0;
  transition: right .6s, opacity 1s;

  &.active{
    right: 0;
    opacity: .7;
  }

  @media (max-width:960px) {
    display: block;
  }
`

export const Menu = styled.div`
  display: none;
  position: relative;
  z-index: 4;
  @media(max-width:960px){
    display: block;
    top: 5px;
  }
  @media(max-width:550px){
    top: 7px;
  }
`

export const SectionMenu = styled.div`
  background: #F9FBFF;
  padding: 0px 0px 0px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  height: 100%;
  @media(max-width:960px){
    background: transparent;
  }
  @media(max-width:960px){
    padding: 0px;
  }
`