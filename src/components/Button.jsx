import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const colors = [
   {
    id: 0,
    name: 'orange',
    color: '#D93535'
   },
   {
    id: 1,
    name: 'red',
    color: '#ff0962'
   },
   {
    id: 2,
    name: 'blue',
    color: '#474DEF'
   },
   {
    id: 3,
    name: 'white',
    color: '#F9FBFF'
   },
   {
    id: 4,
    name: 'green',
    color: '#01b8cd'
   }
];

export default function StyledButton({button, link, onClick}) {

    let colorButton = button?.color;

    let colorTheme

    colors.map(dato => (
        colorButton === dato.name ? colorTheme = dato.color : null
    ))

    return (
        link ? (
            <Button as={Link} to={button?.pathLink} theme={{ color: colorTheme, style: button?.style }}>{button?.titleLink}</Button>
        ) : (
            <Button onClick={onClick} theme={{ color: colorTheme, style: button?.style }}>{button?.titleLink}</Button>
        )
    );
}

const Button = styled.button`
    font-size: 1.2rem;
    display: block;
    margin: 0;
    padding: 0.5rem 2rem;
    border-radius: 3px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    transition: all .3s;
    text-decoration: none;
    text-transform: uppercase;
    min-width: 150px;
    text-align: center;

    background: ${props => props.theme.style === 'fill' ? props.theme.color : 'transparent'};
    color: ${props => props.theme.style === 'fill' ? '#F9FBFF' : props.theme.color};
    border: 2px solid ${props => props.theme.color};

    &:hover{
        background: ${props => props.theme.style === 'fill' ? 'transparent' : props.theme.color};
        color: ${props => props.theme.style === 'fill' ? props.theme.color : '#F9FBFF'};
    }

    @media (max-width:960px) {
        font-size: 1.1rem;
        min-width: 120px;
    }

    @media (max-width:550px) {
        font-size: .9rem;
        min-width: unset;
        padding: .5rem 0rem;
        width: calc(100% - 4px);
    }
    `
;