import React from 'react'

import styled from 'styled-components'

export default function GifMonitor(props) {
    return (
        <Container className={props.className}>
            <img src="/gifs/castanza.gif" alt="Gif Monitor"/>
        </Container>
    )
}

const Container = styled.div`

    width: ${props => props.size ? props.size : "100px"};
    background: rgb(220, 220, 200);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.4vw;
    border-radius: 4px;
    
    img {
      width: 100%;
      height: auto;
    }

`
