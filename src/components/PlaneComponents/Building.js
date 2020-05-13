import React from 'react'

import styled from 'styled-components'

import Palm from './Palm'

export default function Building(props) {
    return (
        <Container className={props.className}>
            <img src="/images/11broadway.png" alt="11 broadway" />
            <PositionedPalm size="24%" bottom="6%" left="48%"/>
            <PositionedPalm size="18%" bottom="8%" left="26%"/>
            <PositionedPalm size="22%" bottom="4%" left="8%"/>
            <PositionedPalm size="28%" bottom="4%" left="82%"/>
        </Container>
    )
}

const Container = styled.div`

    position: relative;

    width: 24vw;
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
