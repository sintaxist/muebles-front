import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

export const Content = styled.div`
    position: relative;
    display: block;
    padding: 60px 3%;
    max-width: 1300px;
    margin: auto;
    z-index: 1;
    h1{
        margin-bottom: var(--margin-30);
    }
`;
export const WrapContennt = styled.div`
    position: relative;
    display: block;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    z-index: 1;
`
export const PageContainer = styled.div`
    position: relative;
    display: block;
    width: 94%;
    padding: 0px 3%;
    max-width: 1300px;
    margin: auto;
    margin-top: 120px;
    z-index: 1;
    h1{
        margin-bottom: var(--margin-60);
    }
`
export const PageContainer2 = styled(PageContainer)`
    margin-bottom: 120px;
`
export const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    @media (max-width:550px) {
        gap: 15px;
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
export const MarkUp = styled(ReactMarkdown)`
    color: $black;
    font-size: 1.2rem;
    line-height: 1.7rem;
    p{
        margin-bottom: 15px;
    }
    h1,h2,h3,h4,h5,h6{
        color: #ff0962;
        margin: var(--margin-30) 0px;
    }
    h1,h2,h3{
        margin: var(--margin-60) 0px;
    }
    img{
        display: block;
        margin: var(--margin-30) auto;
        max-width: 400px;
        height: auto;
    }
    em{
        color: #ff0962;
    }
    ol{
        margin-top: var(--margin-30);
        list-style-type: upper-roman;
        list-style-position: inside;
        padding-inline-start: 0px;
        li{
            font-size: var(--font6);
            margin-bottom: 15px;
        }
    }
    ul{
        padding-inline-start: 0px;
        margin-top: var(--margin-30);
        li{
        position: relative;
        margin-bottom: 15px;
        margin-left: 20px;
        font-size: var(--font6);
        list-style: none;
        &:before{
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #ff0962;
            content: '';
            border-radius: 100px;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    }
    a{
        color: #ff0962;
        font-weight: bold;
        position: relative;
        text-decoration: none;
        &::before{
            content: '';
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 2px;
            background-color: #ff0962;
            transition: width .3s;
        }
        &:hover{
            &::before{
                width: 0px;
            }
        }
    }
    @media (max-width:960px){
        font-size: 1rem;
        line-height: 1.5rem;
    }
    @media (max-width:960px){
        font-size: .9rem;
        line-height: 1.4rem;
    }
`
export const Card = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 30px 3%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 13%);
`
export const MarginBuilder = styled.div`
    margin-top: 80px;
`