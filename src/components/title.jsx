import React from 'react';
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

export default function StyledTitle({title, before}) {

    let colorTheme

    colors.map(dato => (
        title.color === dato.name ? colorTheme = dato.color : null
    ))

    // console.log(title)

    return (
       !before ? (
        <Title theme={{color: colorTheme}}>{title.titulo}</Title>
       ) : (
        <TitleBefore theme={{color: colorTheme}}>{title.titulo}</TitleBefore>
       )
    );
}

const Title = styled.h1`
    /* font-family: 'Staatliches', sans-serif; */
    font-size: 2.25rem;
    letter-spacing: 2px;
    position: relative;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.color};
    @media (max-width:960px) {
        font-size: 2rem;
    }
    @media (max-width:550px) {
        font-size: 1.5rem;
    }
    `
;

const TitleBefore = styled(Title)`
    background: 'green';
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        background: ${props => props.theme.color};
    }
`