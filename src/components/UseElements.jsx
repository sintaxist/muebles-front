import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
    position: relative;
    display: block;
    padding: 60px 3%;
    max-width: 1300px;
    margin: auto;
    z-index: 1;
`;

export const FlexRow = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    padding: 3px 20px 3px 30px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all .3s;
    text-transform: uppercase;
    font-size: 1rem;
    border: 3px solid;
    svg{
        width: 45px;
    }
    .line{
        display: none;
    }
    &:hover{
        letter-spacing: 4px;
        svg{
            margin-left: 15px;
        }
        .line{
            display: block;
        }
    }
    @media (max-width:960px){
        padding: 2px 10px 1px 15px;
        font-size: .8rem;
        &:hover{
            letter-spacing: 2px;
        }
    }
    @media (max-width:550px){
        justify-content: center;
        width: 94%;
        font-size: 12px;
        margin: auto;
    }
`;

export const ButtonForm = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    padding: 3px 20px 3px 30px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all .3s;
    text-transform: uppercase;
    font-size: 1rem;
    border: 3px solid;
    svg{
        width: 45px;
    }
    .line{
        display: none;
    }
    &:hover{
        letter-spacing: 4px;
        svg{
            margin-left: 15px;
        }
        .line{
            display: block;
        }
    }
    @media (max-width:960px){
        padding: 2px 10px 1px 15px;
        font-size: .8rem;
        &:hover{
            letter-spacing: 2px;
        }
    }
    @media (max-width:550px){
        justify-content: center;
        width: 94%;
        font-size: 12px;
        margin: auto;
    }
`;

export const ProductContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 60px 0;
    @media (max-width:960px) {
        margin: 30px 0;
        gap: 15px;
    }
`

export const CategoryContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 60px 0;
    gap: 30px;
    justify-content: center;
    @media (max-width:960px) {
        margin: 30px 0;
        gap: 15px;
    }
`