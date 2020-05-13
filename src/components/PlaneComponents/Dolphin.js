import React from 'react'

import styled, { keyframes } from 'styled-components'

export default function Dolphin(props) {
    return (
        <Container className={props.className} size={props.size}>
            <img src="/images/dolphin.png" alt="dolphin" />
        </Container>
    )
}

const dive = keyframes`
    0% {
      transform: rotateX(-40deg) rotate(0deg) translateX(40%);
    }
  
    100% {
      transform: rotateX(-40deg) rotate(-360deg) translateX(40%);
    }
`

const Container = styled.div`
    
    width: ${props => props.size ? props.size : "200px"};
    
    img {
      width: 100%;
      height: auto;
      animation: ${dive} linear 2.74s infinite;
    }
    
`

// animation: dive linear 2.74s infinite;
