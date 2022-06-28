import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

export const Content = styled.div`
    position: relative;
    display: block;
    padding: 60px 3%;
    max-width: 1300px;
    margin: auto;
    z-index: 1;
`;

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
    color: #263575;
    font-size: 1.2rem;
    line-height: 1.5rem;
    @media (max-width:960px){
        font-size: 1rem;
        line-height: 1.3rem;
    }
    @media (max-width:960px){
        font-size: .9rem;
        line-height: 1.2rem;
    }
`

export const Card = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 30px 3%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 13%);
`