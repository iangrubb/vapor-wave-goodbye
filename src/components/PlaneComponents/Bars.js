import React from 'react'

import styled from 'styled-components'

export default function Bars(props) {
    return (
        <Container className={props.className}>
            <Bar/>
            <Bar/>
        </Container>
    )
}

const Container = styled.div`
    width: 7vw;
    min-width: 40px;

    display: flex;
    justify-content: space-between;

`

const Bar = styled.div`
    background: rgba(119, 215, 253, 0.8);
    width: 38%;
    height: calc(90px + 16vw);
    transform: rotateX(-40deg) translateY(-50%) skew(-10deg);
`
