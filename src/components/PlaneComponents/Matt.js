import React from 'react'

import styled from 'styled-components'

export default function Matt(props) {
    return (
        <Container className={props.className}>
            <img src="/images/matt.png" alt="Matt"/>
        </Container>
    )
}

const Container = styled.div`

    width: ${props => props.size ? props.size : "100px"};
    
    img {
      width: 100%;
      height: auto;
    }

`