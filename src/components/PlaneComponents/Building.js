import React from 'react'

import styled from 'styled-components'

import Palm from './Palm'

export default function Building(props) {
    return (
        <Container className={props.className}>
            <img src="/images/11broadway.png" alt="11 broadway" />
            <PositionedPalm size="32%" bottom="-24%" left="42%"/>
            <PositionedPalm size="22%" bottom="-25%" left="23%"/>
            <PositionedPalm size="26%" bottom="-24%" left="2%"/>
        </Container>
    )
}

const Container = styled.div`

    position: relative;

    width: 32vw;
    min-width: 100px;
    height: 24vw;
    min-height: 100px;
    
    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
    }

`

const PositionedPalm = styled(Palm)`
    position: absolute;

    top: ${props=>props.top};
    bottom: ${props=>props.bottom};
    left: ${props=>props.left};
    right: ${props=>props.right};

`
