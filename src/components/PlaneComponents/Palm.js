import React from 'react'

import styled, {keyframes} from 'styled-components'

export default function Palm(props) {
    return (
        <Container className={props.className} size={props.size}>
            <img src="/images/palm.png" alt="Palm Tree" />
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
