import React from 'react'

import styled from 'styled-components'

export default function Statue(props) {
    return (
        <Container className={props.className}>
            <img src="/images/statue.png" alt="statue"/>
        </Container>
    )
}

const Container = styled.div`

    width: ${props => props.size ? props.size : "100px"};
    
    img {
      width: 100%;
      height: auto;
      filter: saturate(0.6) brightness(120%);
    }

`
