import React, { useState, useEffect } from 'react';
import { MarkUp, PageContainer } from '../components/UseElements';
import { getContent } from '../hooks/httpClient';
import StyledTitle from '../components/title';

export default function AvisoPrivacidad() {

    const[content, setContent] = useState(null)

    useEffect(() => {
        getContent('aviso-privacidad?fields=text').then((data) => {
            setContent(data);
        })
    },[])

    const info = content?.data?.attributes;

    const titleAviso = {
            titulo: 'Aviso privacidad',
            color: 'red',
    }
    return (
        <PageContainer>
            <StyledTitle title={titleAviso} before={false} />
            <MarkUp>{info?.text}</MarkUp>
        </PageContainer>
    )
}
